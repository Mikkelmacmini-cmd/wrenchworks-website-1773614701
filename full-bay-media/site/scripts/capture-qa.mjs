import { chromium } from "playwright";
import fs from "node:fs/promises";
import path from "node:path";

const baseUrl = process.env.BASE_URL || "http://127.0.0.1:3000";
const outDir = process.env.OUT_DIR || "qa-captures/2026-03-11-r5";

const shots = [
  { name: "desktop-1280", width: 1280, height: 820 },
  { name: "tablet-768", width: 768, height: 1024 },
  { name: "mobile-430", width: 430, height: 932 },
  { name: "mobile-390", width: 390, height: 844 },
  { name: "mobile-360", width: 360, height: 780 },
];

await fs.mkdir(outDir, { recursive: true });
const browser = await chromium.launch({ headless: true });

for (const shot of shots) {
  const context = await browser.newContext({ viewport: { width: shot.width, height: shot.height }, deviceScaleFactor: 2 });
  const page = await context.newPage();
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.screenshot({ path: path.join(outDir, `${shot.name}-viewport.png`), fullPage: false });
  await page.screenshot({ path: path.join(outDir, `${shot.name}-full.png`), fullPage: true });
  await context.close();
}

await browser.close();
console.log(`Saved QA captures to ${outDir}`);
