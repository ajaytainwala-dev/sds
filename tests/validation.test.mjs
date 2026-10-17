import { test, describe } from "node:test";
import assert from "node:assert/strict";

// Validation logic directly tested
function isValidIndianPhone(phone) {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 10) {
    return /^[6-9]\d{9}$/.test(digits);
  }
  if (digits.length === 11 && digits.startsWith("0")) {
    return /^[6-9]\d{9}$/.test(digits.slice(1));
  }
  if (digits.length === 12 && digits.startsWith("91")) {
    return /^[6-9]\d{9}$/.test(digits.slice(2));
  }
  return false;
}

function cleanIndianPhone(phone) {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 10) return digits;
  if (digits.length === 11 && digits.startsWith("0")) return digits.slice(1);
  if (digits.length === 12 && digits.startsWith("91")) return digits.slice(2);
  return digits;
}

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

describe("Phone Validation & Normalisation", () => {
  test("accepts standard 10-digit Indian mobile numbers", () => {
    assert.equal(isValidIndianPhone("9845012345"), true);
    assert.equal(isValidIndianPhone("8765432109"), true);
    assert.equal(isValidIndianPhone("7012345678"), true);
    assert.equal(isValidIndianPhone("6361234567"), true);
  });

  test("accepts numbers with spaces or hyphens", () => {
    assert.equal(isValidIndianPhone("98450 12345"), true);
    assert.equal(isValidIndianPhone("98450-12345"), true);
  });

  test("accepts numbers with +91 or 91 country code prefix", () => {
    assert.equal(isValidIndianPhone("+91 98450 12345"), true);
    assert.equal(isValidIndianPhone("919845012345"), true);
  });

  test("accepts numbers with leading 0 prefix", () => {
    assert.equal(isValidIndianPhone("09845012345"), true);
  });

  test("rejects invalid mobile numbers", () => {
    assert.equal(isValidIndianPhone("1234567890"), false); // starts with 1
    assert.equal(isValidIndianPhone("5123456789"), false); // starts with 5
    assert.equal(isValidIndianPhone("98450"), false); // too short
    assert.equal(isValidIndianPhone("98450123456789"), false); // too long
    assert.equal(isValidIndianPhone("abcdefghij"), false); // letters
  });

  test("cleans phone to clean 10-digit format", () => {
    assert.equal(cleanIndianPhone("+91 98450 12345"), "9845012345");
    assert.equal(cleanIndianPhone("09845012345"), "9845012345");
    assert.equal(cleanIndianPhone("98450-12345"), "9845012345");
  });
});

describe("HTML Escaping Security", () => {
  test("escapes script tags and html characters to prevent XSS injection", () => {
    const malicious = '<script>alert("hacked")</script>';
    const escaped = escapeHtml(malicious);
    assert.equal(escaped, "&lt;script&gt;alert(&quot;hacked&quot;)&lt;/script&gt;");
    assert.ok(!escaped.includes("<"));
    assert.ok(!escaped.includes(">"));
  });

  test("escapes ampersands and single quotes", () => {
    const input = "Tom & Jerry's";
    const escaped = escapeHtml(input);
    assert.equal(escaped, "Tom &amp; Jerry&#039;s");
  });
});
