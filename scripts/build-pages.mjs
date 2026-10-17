import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

console.log("==================================================");
console.log("  Building Static Export for GitHub Pages Demo... ");
console.log("==================================================");

// Set environment variables for static export
process.env.STATIC_EXPORT = "true";

try {
  // Execute next build
  execSync("npx next build", {
    stdio: "inherit",
    env: {
      ...process.env,
      STATIC_EXPORT: "true",
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
  if (!fs.existsSync(fallback404Path) && fs.existsSync(indexHtmlPath)) {
    fs.copyFileSync(indexHtmlPath, fallback404Path);
    console.log("✓ Created out/404.html SPA fallback");
  }

  console.log("\n==================================================");
  console.log("✓ GitHub Pages Static Export Complete!");
  console.log("  Output Directory: ./out");
  console.log("  To preview locally: npx serve out");
  console.log("==================================================\n");
} catch (error) {
  console.error("\n❌ Static export failed:", error.message);
  process.exit(1);
}
