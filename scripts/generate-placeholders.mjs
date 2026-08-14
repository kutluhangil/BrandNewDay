import { writeFile } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

// Neutral stand-ins for the two portrait slots (hero identity layer + about
// profile). The cloned target shipped photos of a different person; these keep
// the layout intact until real photos are dropped in at the same paths.
const OUT = join(process.cwd(), "public", "images");

const RED = "#a31515";
const INK = "#1f2937";

function silhouette({ cx, headCy, headR, shoulderRy, shoulderRx, shoulderCy }) {
  const neckWidth = headR * 0.85;
  const neckTop = headCy + headR * 0.7;
  return `
    <rect x="${cx - neckWidth / 2}" y="${neckTop}" width="${neckWidth}" height="${shoulderCy - shoulderRy - neckTop + 20}" fill="${INK}" />
    <ellipse cx="${cx}" cy="${shoulderCy}" rx="${shoulderRx}" ry="${shoulderRy}" fill="${INK}" />
    <circle cx="${cx}" cy="${headCy}" r="${headR}" fill="${INK}" />
    <circle cx="${cx}" cy="${headCy}" r="${headR}" fill="none" stroke="${RED}" stroke-width="${headR * 0.06}" />
  `;
}

function monogram({ cx, cy, size }) {
  return `
    <text x="${cx}" y="${cy}" text-anchor="middle" dominant-baseline="central"
      font-family="Outfit, Helvetica, Arial, sans-serif" font-size="${size}"
      font-weight="900" font-style="italic" letter-spacing="${size * 0.04}"
      fill="#ffffff">KG</text>
  `;
}

const HERO = { width: 1531, height: 1027 };
const PROFILE = { width: 1280, height: 913 };

const heroSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${HERO.width}" height="${HERO.height}" viewBox="0 0 ${HERO.width} ${HERO.height}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="100%" stop-color="#eceef1" />
    </linearGradient>
  </defs>
  <rect width="${HERO.width}" height="${HERO.height}" fill="url(#bg)" />
  ${silhouette({ cx: 765, headCy: 375, headR: 200, shoulderRx: 470, shoulderRy: 330, shoulderCy: 1000 })}
  ${monogram({ cx: 765, cy: 385, size: 165 })}
</svg>
`;

const profileSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${PROFILE.width}" height="${PROFILE.height}" viewBox="0 0 ${PROFILE.width} ${PROFILE.height}">
  <rect width="${PROFILE.width}" height="${PROFILE.height}" fill="#f4f5f7" />
  ${silhouette({ cx: 640, headCy: 340, headR: 210, shoulderRx: 350, shoulderRy: 260, shoulderCy: 860 })}
  ${monogram({ cx: 640, cy: 345, size: 175 })}
</svg>
`;

async function render(svg, name) {
  const buf = await sharp(Buffer.from(svg)).png().toBuffer();
  await writeFile(join(OUT, name), buf);
  console.log(`${name} (${buf.length} bytes)`);
}

await render(heroSvg, "hero-identity-bottom.png");
await render(profileSvg, "profile.png");
