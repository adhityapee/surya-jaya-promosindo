"""Create lightweight gallery WebPs without cropping or altering print details."""
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "docs/new-assets"
OUTPUT = ROOT / "public/assets/images/gallery"
OUTPUT.mkdir(parents=True, exist_ok=True)
PHOTOS = {
    "IMG-20261031-WA0015.jpg": "pouch-navy-custom",
    "IMG-20261031-WA0013.jpg": "tumbler-krem-logo-hijau",
    "IMG-20261031-WA0012.jpg": "tumbler-merah-full-color",
    "IMG-20261031-WA0011.jpg": "tumbler-krem-ilustrasi",
}
for source, name in PHOTOS.items():
    with Image.open(SOURCE / source) as original:
        photo = ImageOps.exif_transpose(original).convert("RGB")
        for suffix, maximum, quality in [("", 1600, 88), ("-thumb", 720, 80)]:
            output = photo.copy()
            output.thumbnail((maximum, maximum), Image.Resampling.LANCZOS)
            destination = OUTPUT / f"{name}{suffix}.webp"
            output.save(destination, "WEBP", quality=quality, method=6)
            print(destination.name, output.size, destination.stat().st_size)
