"""Build catalog data and WebP photos from the client's four PDFs.

Only extract and encode original photos; no AI alteration of product references.
"""
from pathlib import Path
import json
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
EXTRACTED = ROOT / '.pwc/client-pdfs/extracted'
DEST = ROOT / 'public/assets/images/products/client-catalog'
DEST.mkdir(parents=True, exist_ok=True)
categories = []

def category(id, label, short, subtitle, poster, story, body):
    item = dict(id=id, label=label, shortLabel=short, subtitle=subtitle,
                poster=f'/assets/images/catalog-posters/{poster}-catalog-v2.webp',
                storyTitle=story, storyDescription=body, products=[])
    categories.append(item)
    return item

def product(cat, slug, name, image, minimum, description, group, pdf='catalog produk.pdf', page=1):
    source = EXTRACTED / image
    output = DEST / f'{slug}.webp'
    with Image.open(source) as im:
        im = im.convert('RGB')
        im.thumbnail((1000, 1000), Image.Resampling.LANCZOS)
        im.save(output, 'WEBP', quality=90, method=6)
    cat['products'].append(dict(id=slug, name=name, image=f'/assets/images/products/client-catalog/{slug}.webp',
                               minimum=f'{minimum} pcs', description=description, group=group,
                               source=dict(file=pdf, page=page, image=image)))

c = category('weekly-best','Pulpen Custom','Pulpen','Pulpen plastik, gel, KACO, dan metal untuk berbagai kebutuhan promosi.','pulpen',
             'Pilihan pulpen untuk setiap kebutuhan','Pilih model plastik untuk promosi, gel untuk perlengkapan kerja, atau metal untuk souvenir perusahaan. Model dan pilihan warna mengikuti katalog.')
plastic = [
 ('gepeng','Pulpen gepeng','0-3-0.png','Bodi pipih dengan klip lebar untuk penempatan desain.'),
 ('hitam-promosi','Pulpen hitam promosi','0-3-2.png','Pulpen promosi dengan pilihan bodi hitam dan warna sesuai katalog.'),
 ('kertas','Pulpen kertas','0-3-4.png','Pulpen berbodi kertas dengan aksen warna pada klip dan ujung.'),
 ('carinex','Pulpen Carinex','0-3-7.png','Model Carinex dengan pilihan aksen warna pada bodi putih.'),
 ('06','Pulpen 06','0-3-10.png','Model 06 dengan bodi ramping dan pilihan warna sesuai katalog.'),
 ('05','Pulpen 05','0-3-22.png','Model 05 dengan pilihan warna untuk kebutuhan promosi.'),
 ('17','Pulpen 17','0-3-23.png','Model 17 dengan klip dan aksen warna sesuai katalog.'),
 ('ici-stylus','Pulpen ICI Stylus','0-3-24.png','Model ICI Stylus untuk menulis dan penggunaan layar sentuh.'),
 ('03','Pulpen 03','0-3-25.png','Model 03 dengan klip berlekuk dan pilihan aksen warna.'),
 ('hitam-klasik','Pulpen hitam klasik','0-3-26.png','Model hitam klasik dengan detail ring sesuai foto katalog.'),
]
for slug,name,image,desc in plastic:
    product(c,'pulpen-'+slug,name,image,200,desc+' Dapat dikustom sesuai kebutuhan acara atau perusahaan.','Plastik',page=3)
for slug,name,image,minimum,desc in [
 ('gel-pastel','Pulpen gel pastel','2-1-2.png',200,'Pulpen gel dengan pilihan warna lembut sesuai foto katalog.'),
 ('gel-warna','Pulpen gel warna','2-1-1.png',200,'Pulpen gel dengan pilihan warna untuk kebutuhan promosi dan perlengkapan kerja.'),
 ('kaco','Pulpen KACO','2-1-0.png',100,'Model KACO dengan pilihan warna hitam dan putih sesuai katalog.'),
]:
    product(c,'pulpen-'+slug,name,image,minimum,desc+' Konfirmasikan pilihan warna dan cetak kepada tim SJP.','Gel & KACO','CATALOG PULPEN GELL.pdf',1)
for slug,name,image in [
 ('metal-bp-222','Pulpen metal BP 222','3-1-0.png'),
 ('metal-bp-921','Pulpen metal BP 921','3-1-2.png'),
 ('paku-medium','Pulpen Paku Medium','3-1-1.png'),
 ('bp-016','Pulpen BP 016','3-1-4.png'),
 ('bp-171','Pulpen BP 171','3-1-3.png'),
]:
    product(c,'pulpen-'+slug,name,image,200,f'{name} untuk souvenir perusahaan dan kebutuhan promosi. Pilihan warna serta penempatan logo dikonfirmasi sebelum produksi.','Metal','CTLG PULPEN STAINLS.pdf',1)

c = category('agenda','Agenda & Notebook','Agenda','Agenda karet, magnet, premium, dan spiral dalam pilihan A5 serta A6.','agenda',
             'Catatan yang menemani aktivitas kerja','Dari rapat hingga seminar, pilih sampul dan model agenda sesuai kebutuhan tim. Tersedia pilihan karet, magnet, premium, dan spiral dalam katalog.')
for slug,name,image,minimum in [
 ('a5-karet','Agenda A5 karet','0-4-16.png',50),('a6-karet','Agenda A6 karet','0-4-17.png',50),
 ('a5-magnet','Agenda A5 magnet','0-4-18.png',50),('a5-premium','Agenda A5 premium','0-4-19.png',50),
 ('a5-spiral','Notebook A5 spiral','0-4-20.png',100),('a6-spiral','Notebook A6 spiral','0-4-33.png',100),
]:
    product(c,'agenda-'+slug,name,image,minimum,f'{name} dengan sampul yang dapat dipersonalisasi. Konfirmasikan ukuran, isi, dan warna sebelum pemesanan.','Agenda',page=4)

c = category('drinkware','Tumbler & Mug','Tumbler & Mug','Dua belas pilihan tumbler dan mug dari katalog produk SJP.','tumbler',
             'Teman minum untuk ritme kerja Anda','Pilih model Sakura, Hook Japan, Japan, Elite, Coffe, Jamur, Lulu tutup kayu, Mug Egg, Tyso, Arizona, Bowling, atau Sport. Konsultasikan cetak satu sisi, dua sisi, maupun full print.')
for slug,name,number in [('sakura','Tumbler Sakura',9),('hook-japan','Tumbler Hook Japan',11),('japan','Tumbler Japan',13),
                         ('elite','Tumbler Elite',15),('coffe','Tumbler Coffe',17),('jamur','Tumbler Jamur',19),
                         ('lulu-tutup-kayu','Tumbler Lulu tutup kayu',21),('mug-egg','Mug Egg',23),('tyso','Tumbler Tyso',25),
                         ('arizona','Tumbler Arizona',27),('bowling','Tumbler Bowling',29),('sport','Tumbler Sport',31)]:
    product(c,slug,name,f'0-2-{number}.png',50,f'{name} sesuai model pada katalog. Tersedia pilihan cetak satu sisi, dua sisi, atau full print; warna dan detail cetak dikonfirmasi kepada tim SJP.','Mug' if slug=='mug-egg' else 'Tumbler',page=2)

c = category('bags','Tote Bag','Tote Bag','Tote bag kanvas cream, putih, navy, serta model D300.','totebag',
             'Tas promosi yang ikut ke berbagai acara','Pilihan tote bag kanvas 30 × 40 cm dan D300 35 × 30 cm untuk kebutuhan merchandise, seminar, serta kegiatan perusahaan.')
for slug,name,number,desc in [
 ('kanvas-cream','Tote bag kanvas cream',0,'Kanvas cream ukuran 30 × 40 cm.'),('kanvas-putih','Tote bag kanvas putih',1,'Kanvas putih ukuran 30 × 40 cm.'),
 ('kanvas-navy','Tote bag kanvas navy',2,'Kanvas navy ukuran 30 × 40 cm.'),('d300','Tote bag D300',3,'Model D300 ukuran 35 × 30 cm sesuai katalog.'),
]:
    product(c,'tote-'+slug,name,f'0-1-{number}.png',50,desc+' Dapat dicetak sesuai logo atau desain acara Anda.','Tote bag',page=1)

c = category('payung','Payung Custom','Payung','Payung lipat, golf, double layer, dan model terbalik gagang C.','payung',
             'Pilihan payung untuk aktivitas di luar kantor','Tersedia sepuluh model: lipat manual, lipat otomatis, 10 jari, bagian dalam silver, golf manual, semi golf, golf otomatis, golf premium, golf dua layer, dan terbalik gagang C.')
for i,(slug,name) in enumerate([('lipat-manual','Payung lipat manual'),('lipat-otomatis','Payung lipat otomatis'),
 ('lipat-10-jari','Payung lipat 10 jari'),('manual-dalam-silver','Payung manual dalam silver'),('golf-manual','Payung golf manual'),
 ('semi-golf','Payung semi golf'),('golf-otomatis','Payung golf otomatis'),('golf-premium','Payung golf premium'),
 ('golf-dua-layer','Payung golf dua layer'),('terbalik-gagang-c','Payung terbalik gagang C')],1):
    product(c,'payung-'+slug,name,f'0-5-{i}.png',20,f'{name} sesuai model katalog. Konsultasikan desain, warna, dan penempatan logo kepada tim SJP sebelum produksi.','Payung',page=5)

c = category('gadget-custom','Kipas Portable','Kipas','Kipas LED, LED N68, dan kipas mini sesuai katalog.','kipas',
             'Souvenir praktis untuk kegiatan Anda','Tiga pilihan kipas portable untuk merchandise acara dan promosi. Pilih model LED, LED N68, atau mini, lalu sesuaikan desain cetak dengan kebutuhan brand.')
for slug,name,number,minimum in [('led','Kipas LED',0,50),('led-n68','Kipas LED N68',2,50),('mini','Kipas mini',1,20)]:
    product(c,'kipas-'+slug,name,f'0-7-{number}.png',minimum,f'{name} dengan pilihan warna sesuai foto katalog dan area cetak logo. Konfirmasikan ketersediaan warna serta spesifikasi kepada tim SJP.','Kipas',page=7)

c = category('kartu-elektronik','Kartu Uang Elektronik','Kartu Elektronik','Flazz, e-money, TapCash, dan BRIZZI dengan cetak satu atau dua sisi.','kartu',
             'Kartu harian dengan identitas brand Anda','Pilih Flazz, e-money, TapCash, atau BRIZZI. Tersedia opsi desain satu sisi dan dua sisi untuk souvenir perusahaan serta kegiatan promosi. Ketentuan saldo dikonfirmasi saat pemesanan.')
for slug,name,number in [('flazz','Kartu Flazz custom',1),('emoney','Kartu e-money custom',0),('tapcash','Kartu TapCash custom',2),('brizzi','Kartu BRIZZI custom',3)]:
    product(c,'kartu-'+slug,name,f'1-1-{number}.png',50,f'{name} dengan pilihan cetak satu sisi atau dua sisi. Konsultasikan desain, ketentuan saldo, dan jumlah kebutuhan kepada tim SJP.','Kartu','CATALOG KARTU UANG ELEKTRONIK.pdf',1)

for c in categories:
    c['image'] = c['products'][0]['image']
    c['count'] = len(c['products'])
target=ROOT/'src/data/clientCatalog.json'
target.write_text(json.dumps(categories,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
manifest=ROOT/'docs/catalog-source/client-pdf-manifest.json'
manifest.write_text(json.dumps(categories,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
print('Categories:',len(categories),'Products:',sum(c['count'] for c in categories))
for c in categories: print(c['label'],c['count'])
