"""Resize and encode generated source-based catalog photos; no content editing."""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "docs/catalog-source/generated"
for name in ("pulpen-plastik-putih-navy", "agenda-hardcover-hitam", "tumbler-tutup-pegangan-navy"):
    destination = ROOT / "public/assets/images/products/source-catalog" / f"{name}.webp"
    destination.parent.mkdir(parents=True, exist_ok=True)
    with Image.open(SOURCE / f"{name}.png") as image:
        image = image.convert("RGB")
        image.thumbnail((900, 900), Image.Resampling.LANCZOS)
        image.save(destination, "WEBP", quality=88, method=6)
    print(f"{destination.relative_to(ROOT)}: {destination.stat().st_size} bytes")
