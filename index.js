#!/usr/bin/env node
const fs = require("fs");
const file = process.argv[2];
if (!file || file === "-h" || file === "--help") {
  console.log("Usage: font-converter-stub <font-file.woff|woff2|ttf>");
  process.exit(file ? 0 : 1);
}
try {
  const buf = fs.readFileSync(file);
  const tag = buf.subarray(0, 4).toString("utf8");
  console.log(`File:     ${file}`);
  console.log(`Size:     ${(buf.length / 1024).toFixed(2)} KB`);
  console.log(`Format:   \x1b[32m${tag.includes("wOF2") ? "WOFF2" : tag.includes("wOFF") ? "WOFF" : "TrueType / OpenType"}\x1b[0m`);
} catch (e) {
  console.error("Error: " + e.message);
  process.exit(1);
}
