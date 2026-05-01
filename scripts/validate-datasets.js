#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const BASE_DIR = path.join(ROOT, 'public', 'data', 'chapters');
const REQUIRED_COLUMNS = ['id', 'label', 'type', 'value', 'explanation'];

function parseChapterNumber(name) {
  const match = name.match(/^ch(\d+)$/i);
  return match ? Number(match[1]) : null;
}

function isValidUtf8(buffer) {
  const decoded = buffer.toString('utf8');
  const reEncoded = Buffer.from(decoded, 'utf8');
  return reEncoded.equals(buffer);
}

function validateFile(filePath) {
  const errors = [];

  if (!fs.existsSync(filePath)) {
    errors.push('dataset.csv not found');
    return { pass: false, errors };
  }

  const raw = fs.readFileSync(filePath);
  if (!isValidUtf8(raw)) {
    errors.push('file is not valid UTF-8');
    return { pass: false, errors };
  }

  const text = raw.toString('utf8').replace(/^\uFEFF/, '');
  const lines = text.split(/\r?\n/);

  if (lines.length === 0 || !lines[0].trim()) {
    errors.push('missing header row');
    return { pass: false, errors };
  }

  const header = lines[0].split(',').map((c) => c.trim());
  const headerOk =
    header.length === REQUIRED_COLUMNS.length &&
    REQUIRED_COLUMNS.every((col, idx) => header[idx] === col);

  if (!headerOk) {
    errors.push(`invalid header. expected: ${REQUIRED_COLUMNS.join(',')}`);
  }

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    if (!line.trim()) {
      if (i !== lines.length - 1) {
        errors.push(`empty row at line ${i + 1}`);
      }
      continue;
    }

    const cols = line.split(',');
    if (cols.length !== REQUIRED_COLUMNS.length) {
      errors.push(`line ${i + 1} has ${cols.length} columns (expected ${REQUIRED_COLUMNS.length})`);
    }
  }

  return { pass: errors.length === 0, errors };
}

function main() {
  if (!fs.existsSync(BASE_DIR)) {
    console.error(`Directory not found: ${BASE_DIR}`);
    process.exit(1);
  }

  const chapters = fs
    .readdirSync(BASE_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .filter((name) => parseChapterNumber(name) !== null)
    .sort((a, b) => parseChapterNumber(a) - parseChapterNumber(b));

  const targets = chapters.filter((ch) => {
    const n = parseChapterNumber(ch);
    return n === 3 || (n >= 5 && n <= 15);
  });

  console.log('Dataset Validation Report');
  console.log('=========================');

  let allPass = true;
  for (const chapter of targets) {
    const chapterLabel = `CH${parseChapterNumber(chapter)}`;
    const filePath = path.join(BASE_DIR, chapter, 'dataset.csv');
    const result = validateFile(filePath);

    if (result.pass) {
      console.log(`${chapterLabel}: ✅ PASS`);
    } else {
      allPass = false;
      console.log(`${chapterLabel}: ❌ FAIL`);
      for (const err of result.errors) {
        console.log(`  - ${err}`);
      }
    }
  }

  console.log('');
  if (allPass) {
    console.log('All datasets valid ✅');
  } else {
    console.log('Some datasets are invalid ❌');
    process.exit(1);
  }
}

main();
