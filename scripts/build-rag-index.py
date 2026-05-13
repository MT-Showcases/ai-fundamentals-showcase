#!/usr/bin/env python3
import json
import os
import re
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CHAPTERS_DIR = ROOT / "data" / "chapters"
GLOSSARY_FILE = ROOT / "data" / "glossary.ts"
DOWNLOADS_DIR = ROOT / "public" / "downloads"
PAGES_DIR = ROOT / "data" / "pages"
OUT_DIR = ROOT / "public" / "rag"
OUT_DIR.mkdir(parents=True, exist_ok=True)


def clean_text(text: str) -> str:
    text = re.sub(r"\s+", " ", text)
    return text.strip()


def chunk_text(text: str, max_chars: int = 900, overlap: int = 120):
    text = clean_text(text)
    if len(text) <= max_chars:
        return [text]
    chunks = []
    i = 0
    while i < len(text):
        chunks.append(text[i:i + max_chars])
        i += max_chars - overlap
    return chunks


def parse_chapters_raw():
    items = []
    for file in sorted(CHAPTERS_DIR.glob("ch*.ts")):
        raw = file.read_text(encoding="utf-8", errors="ignore")
        slug_m = re.search(r"slug:\s*'([^']+)'", raw)
        title_m = re.search(r"title:\s*'([^']+)'", raw)
        if not slug_m:
            continue
        slug = slug_m.group(1)
        title = title_m.group(1) if title_m else slug
        for idx, chunk in enumerate(chunk_text(raw, 1200, 160)):
            items.append({
                "id": f"chapter-{slug}-{idx}",
                "sourceType": "chapter",
                "chapterSlug": slug,
                "title": title,
                "url": f"/chapters/{slug}",
                "text": chunk,
            })
    return items


def parse_glossary_raw():
    raw = GLOSSARY_FILE.read_text(encoding="utf-8", errors="ignore")
    items = []
    for idx, chunk in enumerate(chunk_text(raw, 1200, 160)):
        items.append({
            "id": f"glossary-{idx}",
            "sourceType": "glossary",
            "chapterSlug": None,
            "title": "Glossario",
            "url": "/glossario",
            "text": chunk,
        })
    return items


def parse_zip(zip_path: Path):
    docs = []
    with zipfile.ZipFile(zip_path, "r") as zf:
        for name in zf.namelist():
            norm = name.replace("\\", "/")
            lower = norm.lower()
            row = {"path": norm, "included": False, "preview": ""}
            if any(lower.endswith(ext) for ext in [".md", ".txt", ".py", ".json", ".csv"]) or "requirement" in lower or lower.endswith(".env"):
                try:
                    raw = zf.read(name).decode("utf-8", errors="ignore")
                    row["included"] = True
                    row["preview"] = clean_text(raw)[:2000]
                    docs.append((norm, raw))
                except Exception:
                    pass
        return docs


def parse_labs():
    items = []
    manifest = []
    for zip_path in sorted(DOWNLOADS_DIR.glob("*.zip")):
        zip_name = zip_path.name
        files = []
        try:
            with zipfile.ZipFile(zip_path, "r") as zf:
                files = [n.replace("\\", "/") for n in zf.namelist()]
        except Exception:
            files = []

        docs = parse_zip(zip_path)
        manifest.append({
            "zipName": zip_name,
            "downloadUrl": f"/downloads/{zip_name}",
            "files": files,
        })
        if docs:
            for file_path, content in docs:
                for idx, chunk in enumerate(chunk_text(content, 1000, 120)):
                    items.append({
                        "id": f"lab-{zip_name}-{file_path}-{idx}".replace("/", "_").replace(" ", "_"),
                        "sourceType": "lab_zip",
                        "chapterSlug": None,
                        "title": f"{zip_name} · {file_path}",
                        "url": f"/downloads/{zip_name}",
                        "zipName": zip_name,
                        "filePath": file_path,
                        "text": chunk,
                    })
    return items, manifest


def parse_static_pages():
    items = []
    if not PAGES_DIR.exists():
        return items
    for file in sorted(PAGES_DIR.glob("*.txt")):
        meta_file = PAGES_DIR / (file.stem + ".meta.json")
        meta = {}
        if meta_file.exists():
            try:
                meta = json.loads(meta_file.read_text(encoding="utf-8"))
            except Exception:
                pass
        raw = file.read_text(encoding="utf-8", errors="ignore")
        title = meta.get("title", file.stem)
        url = meta.get("url", "/")
        for idx, chunk in enumerate(chunk_text(raw, 1200, 160)):
            items.append({
                "id": f"page-{file.stem}-{idx}",
                "sourceType": "page",
                "chapterSlug": None,
                "title": title,
                "url": url,
                "text": chunk,
            })
    return items


def main():
    chapters = parse_chapters_raw()
    glossary = parse_glossary_raw()
    labs, manifest = parse_labs()
    pages = parse_static_pages()
    corpus = chapters + glossary + labs + pages

    (OUT_DIR / "index.json").write_text(json.dumps(corpus, ensure_ascii=False, indent=2), encoding="utf-8")
    (OUT_DIR / "lab-manifest.json").write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Built RAG index: {len(corpus)} chunks (pages: {len(pages)})")
    print(f"Built lab manifest: {len(manifest)} zip files")


if __name__ == "__main__":
    main()
