from pathlib import Path
import json
import pymupdf as fitz
from PIL import Image, ImageDraw
from io import BytesIO

root = Path(__file__).resolve().parents[1]
out = root / '.pwc/client-pdfs/extracted'
out.mkdir(parents=True, exist_ok=True)
files = ['catalog produk.pdf', 'CATALOG KARTU UANG ELEKTRONIK.pdf', 'CATALOG PULPEN GELL.pdf', 'CTLG PULPEN STAINLS.pdf']
inventory = []
for d, file in enumerate(files):
    doc = fitz.open(root / file)
    for p, page in enumerate(doc):
        images = []
        for block in page.get_text('dict')['blocks']:
            if block['type'] != 1 or min(block['width'],block['height']) < 100:
                continue
            image = Image.open(BytesIO(block['image'])).convert('RGB')
            filename = f'{d}-{p+1}-{block["number"]}.png'
            image.save(out / filename)
            inventory.append({'file': filename, 'pdf': file, 'page': p+1, 'number': block['number'], 'bbox': block['bbox']})
            image.thumbnail((160,180))
            images.append((filename,image))
        if not images:
            continue
        sheet = Image.new('RGB',(1000,((len(images)+4)//5)*210),'#ddd')
        draw=ImageDraw.Draw(sheet)
        for i,(name,image) in enumerate(images):
            x,y=(i%5)*200,(i//5)*210
            sheet.paste(image,(x,y+25)); draw.text((x+4,y+4),name,fill='black')
        sheet.save(out / f'sheet-{d}-{p+1}.jpg')
(out / 'images.json').write_text(json.dumps(inventory,indent=2),encoding='utf-8')
