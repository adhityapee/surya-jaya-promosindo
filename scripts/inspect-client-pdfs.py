from pathlib import Path
import json
import fitz
from PIL import Image, ImageDraw

root = Path(__file__).resolve().parents[1]
out = root / '.pwc/client-pdfs'
out.mkdir(parents=True, exist_ok=True)
records = []
for n, filename in enumerate(['catalog produk.pdf', 'CATALOG KARTU UANG ELEKTRONIK.pdf', 'CATALOG PULPEN GELL.pdf', 'CTLG PULPEN STAINLS.pdf']):
    doc = fitz.open(root / filename)
    pages = []
    thumbs = []
    for i, page in enumerate(doc):
        pages.append({'page': i + 1, 'text': page.get_text(), 'images': len(page.get_images()), 'size': list(page.rect)})
        pix = page.get_pixmap(matrix=fitz.Matrix(0.8, 0.8), alpha=False)
        image = Image.frombytes('RGB', [pix.width, pix.height], pix.samples)
        image.save(out / f'{n}-{i+1}.jpg')
        image.thumbnail((240, 300))
        thumbs.append(image)
    for start in range(0, len(thumbs), 20):
        batch = thumbs[start:start+20]
        sheet = Image.new('RGB', (1000, ((len(batch)+3)//4)*330), '#ddd')
        draw = ImageDraw.Draw(sheet)
        for j, image in enumerate(batch):
            x, y = (j % 4)*250, (j//4)*330
            sheet.paste(image, (x,y+22))
            draw.text((x+5,y+4), f'{n}: Page {start+j+1}', fill='black')
        sheet.save(out / f'contact-{n}-{start//20}.jpg')
    records.append({'file': filename, 'pages': pages})
    print(filename, len(pages), 'pages')
    for page in pages:
        print(f"PAGE {page['page']}: {page['text'][:3000]}")
(out / 'inventory.json').write_text(json.dumps(records, ensure_ascii=False, indent=2), encoding='utf-8')
