import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function esc(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function linkify(s) {
  let t = esc(s);
  // Map legacy support@ address + protect gmail so "khepia.pk" inside it is not site-linked
  t = t.replace(/\b(?:support@khepia\.pk|khepia\.pk@gmail\.com)\b/g, "\0EMAIL\0");
  t = t.replace(
    /\bkhepia\.pk\b/g,
    '<a href="https://khepia.pk">khepia.pk</a>',
  );
  t = t.replace(
    /\0EMAIL\0/g,
    '<a href="mailto:khepia.pk@gmail.com">khepia.pk@gmail.com</a>',
  );
  return t;
}

function convert(txtPath) {
  let raw = fs.readFileSync(txtPath, "utf8").replace(/^\uFEFF/, "").trim();
  const scheduleIdx = raw.search(/\nSCHEDULE\b/);
  if (scheduleIdx !== -1) raw = raw.slice(0, scheduleIdx).trim();

  const lines = raw
    .split(/\r?\n/)
    .map((l) => l.replace(/^\t+/, "").trim())
    .filter(Boolean);

  let i = 0;
  const skipTitles =
    /^(KHEPIA\.PK|TERMS AND CONDITIONS|PRIVACY POLICY|Last updated:)/i;
  while (i < lines.length && skipTitles.test(lines[i])) i++;

  const chunks = [];
  let listOpen = false;

  const closeList = () => {
    if (listOpen) {
      chunks.push("</ol>");
      listOpen = false;
    }
  };

  for (; i < lines.length; i++) {
    const line = lines[i];

    const sec = line.match(/^(\d+)\.\s+(.+)$/);
    if (sec && !/^\d+\.\d+/.test(line)) {
      closeList();
      chunks.push(`<section id="clause-${sec[1]}">`);
      chunks.push(`<h2>${esc(sec[1])}. ${esc(sec[2])}</h2>`);
      continue;
    }

    const sub = line.match(/^(\d+\.\d+)\s+(.+)$/);
    if (sub) {
      closeList();
      chunks.push(`<p><strong>${esc(sub[1])}</strong> ${linkify(sub[2])}</p>`);
      continue;
    }

    const letm = line.match(/^\(([a-z])\)\s+(.+)$/);
    if (letm) {
      if (!listOpen) {
        chunks.push('<ol type="a">');
        listOpen = true;
      }
      chunks.push(`<li>${linkify(letm[2])}</li>`);
      continue;
    }

    closeList();
    if (/^KHEPIA\.PK \(SMC-PRIVATE\) LIMITED$/i.test(line)) {
      chunks.push(`<p><strong>${esc(line)}</strong></p>`);
      continue;
    }
    chunks.push(`<p>${linkify(line)}</p>`);
  }
  closeList();

  const rebuilt = [];
  let inSection = false;
  for (const chunk of chunks) {
    if (chunk.startsWith("<section")) {
      if (inSection) rebuilt.push("</section>");
      rebuilt.push(chunk);
      inSection = true;
    } else {
      rebuilt.push(chunk);
    }
  }
  if (inSection) rebuilt.push("</section>");
  return rebuilt.join("\n");
}

const outDir = path.join(root, "src/content/legal");
fs.mkdirSync(outDir, { recursive: true });

const termsHtml = convert(
  path.join(root, "Khepia.pk Terms and Conditions.txt"),
);
const privacyHtml = convert(path.join(root, "Khepia.pk Privacy Policy.txt"));

fs.writeFileSync(path.join(outDir, "terms-body.html"), termsHtml);
fs.writeFileSync(path.join(outDir, "privacy-body.html"), privacyHtml);

console.log(
  "terms",
  termsHtml.length,
  "sections",
  (termsHtml.match(/<section/g) || []).length,
);
console.log(
  "privacy",
  privacyHtml.length,
  "sections",
  (privacyHtml.match(/<section/g) || []).length,
);
