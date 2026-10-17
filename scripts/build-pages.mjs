import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

console.log("==================================================");
console.log("  Building Static Export for GitHub Pages Demo... ");
console.log("==================================================");

// Detect repository name from git remote or default to /sds
let basePath = process.env.NEXT_PUBLIC_BASE_PATH;
if (basePath === undefined) {
  if (process.env.GITHUB_REPOSITORY) {
    const repoName = process.env.GITHUB_REPOSITORY.split("/")[1];
    basePath = repoName && !repoName.endsWith(".github.io") ? `/${repoName}` : "";
  } else {
    try {
      const remoteUrl = execSync("git config --get remote.origin.url", { encoding: "utf8" }).trim();
      const match = remoteUrl.match(/\/([^/]+?)(?:\.git)?$/);
      basePath = match && match[1] && !match[1].endsWith(".github.io") ? `/${match[1]}` : "/sds";
    } catch {
      basePath = "/sds";
    }
  }
}

process.env.STATIC_EXPORT = "true";
process.env.NEXT_PUBLIC_BASE_PATH = basePath;

console.log(`✓ Configured Base Path: "${basePath || "/"}"`);

try {
  // Execute next build with static export settings
  execSync("npx next build", {
    stdio: "inherit",
    env: {
      ...process.env,
      STATIC_EXPORT: "true",
      NEXT_PUBLIC_BASE_PATH: basePath,
    },
  });

  const outDir = path.resolve(process.cwd(), "out");
  if (!fs.existsSync(outDir)) {
    throw new Error(`Output directory ${outDir} was not found.`);
  }

  // 1. Create .nojekyll in out/ to ensure GitHub Pages serves _next directory
  const noJekyllPath = path.join(outDir, ".nojekyll");
  fs.writeFileSync(noJekyllPath, "");
  console.log("✓ Created out/.nojekyll file (prevents GitHub Pages Jekyll filter)");

  // 2. Ensure 404.html exists for client-side routing
  const indexHtmlPath = path.join(outDir, "index.html");
  const fallback404Path = path.join(outDir, "404.html");
  if (fs.existsSync(indexHtmlPath)) {
    fs.copyFileSync(indexHtmlPath, fallback404Path);
    console.log("✓ Synchronised out/404.html SPA fallback");
  }

  console.log("\n==================================================");
  console.log("✓ GitHub Pages Static Export Complete!");
  console.log(`  Assets mapped to prefix: ${basePath || "/"}`);
  console.log("  Output Directory: ./out");
  console.log("==================================================\n");
} catch (error) {
  console.error("\n❌ Static export failed:", error.message);
  process.exit(1);
}
