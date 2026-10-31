"""Encode approved generated posters as WebP without altering their content."""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
generated = Path(r'C:\Users\90148061\.codex\generated_images\01a1009d-71ad-7a62-ad56-cd5fac532632')
files = {
    'pulpen': 'exec-f3b5c093-779c-4573-b7db-f4c3f12bb2bf.png',
    'agenda': 'exec-f630019e-bbbf-47a3-9720-9f93240986bc.png',
    'tumbler': 'exec-253e9abf-1290-4ced-8c24-1045c96320e5.png',
    'totebag': 'exec-4639bd9b-ff17-4848-9978-b861b2546e76.png',
    'payung': 'exec-26027ea3-49e2-43ac-9b46-456ebefa0846.png',
    'kipas': 'exec-31755b30-1d1b-49d2-8590-b66e93988cb6.png',
    'kartu': 'exec-efdb2cb3-fbdd-4761-b299-0c3004a97add.png',
}
for category, filename in files.items():
    output = ROOT / f'public/assets/images/catalog-posters/{category}-catalog-v2.webp'
    with Image.open(generated / filename) as im:
        im.convert('RGB').save(output, 'WEBP', quality=90, method=6)
    print(category, output.stat().st_size)
