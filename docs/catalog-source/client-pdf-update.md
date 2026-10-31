# Pembaruan katalog dari PDF client

Sumber: empat PDF yang diberikan client di root proyek. PDF tidak disalin ke folder publik dan tidak ditautkan sebagai unduhan karena memuat harga.

## Cakupan

| Kategori | Produk | Sumber |
| --- | ---: | --- |
| Pulpen Custom | 18 | catalog produk.pdf hal. 3; CATALOG PULPEN GELL.pdf; CTLG PULPEN STAINLS.pdf |
| Agenda & Notebook | 6 | catalog produk.pdf hal. 4 |
| Tumbler & Mug | 12 | catalog produk.pdf hal. 2 |
| Tote Bag | 4 | catalog produk.pdf hal. 1 |
| Payung Custom | 10 | catalog produk.pdf hal. 5 |
| Kipas Portable | 3 | catalog produk.pdf hal. 7 |
| Kartu Uang Elektronik | 4 | CATALOG KARTU UANG ELEKTRONIK.pdf |

Total 57 pilihan. Halaman pulpen stainless pada catalog produk.pdf hal. 6 identik dengan PDF stainless tersendiri dan tidak digandakan. Opsi cetak kartu satu/dua sisi dijelaskan pada detail setiap jenis kartu, bukan dibuat sebagai produk identik terpisah.

Harga tidak ditampilkan. Minimum mengikuti dokumen: plastik/metal/gel 200 pcs, KACO 100 pcs, agenda hardcover 50 pcs dan spiral 100 pcs, drinkware/tote/kartu 50 pcs, payung 20 pcs, kipas LED dan N68 50 pcs serta mini 20 pcs.

## Aset dan sumber data

- `src/data/clientCatalog.json`: data yang dipakai kategori, item katalog, pencarian, dan banner.
- `client-pdf-manifest.json`: salinan data sumber beserta nama PDF, halaman dan ID gambar untuk audit.
- `public/assets/images/products/client-catalog/`: 57 foto asli hasil ekstraksi, dikodekan ke WebP tanpa mengubah model produk.
- `public/assets/images/catalog-posters/*-catalog-v2.webp`: tujuh banner baru mengikuti template poster SJP yang disetujui.
- `.pwc/client-pdfs/`: pratinjau halaman, contact sheet, dan hasil ekstraksi antara; bukan aset yang dipublikasikan.
- `scripts/inspect-client-pdfs.py`, `extract-client-images.py`, `build-client-catalog.py`, `optimize-client-posters.py`: alur ekstraksi, pemetaan dan optimasi.

Foto asli katalog dapat berupa beberapa warna dalam satu foto, contoh artwork pelanggan, atau foto dengan label model. Resolusi asli sebagian foto sekitar 200–500 px. Tidak diganti dengan foto stok acak agar model asli tetap terjaga.

## Catatan yang perlu dikonfirmasi client

Penamaan A6 karet dan A5 magnet mengikuti judul item PDF, tetapi label ukuran yang tertulis di foto produknya berbeda. Halaman web meminta konfirmasi ukuran/isi sebelum pemesanan. Foto Arizona dan Bowling pada PDF juga tampak sama; keduanya dipertahankan sebagai model berbeda sesuai nama katalog. Daftar ini tidak mengasumsikan kapasitas tumbler, daya baterai kipas, atau saldo kartu yang tidak disebutkan.

## Banner

Mode: built-in imagegen. Setiap banner memakai template poster v1 sebagai referensi layout dan halaman PDF terkait sebagai referensi produk. Prompt lengkap disimpan di `client-poster-prompts.json`.

Instruksi bersama: poster persegi putih, logo/nama SJP kiri atas, judul hitam besar di kiri, garis serta tiga centang magenta, foto produk di kanan dan inset detail, footer WhatsApp 0857 4038 6268. Tanpa harga dan tanpa angka minimum generik; badge “PESAN CUSTOM”. Produk visualisasi dibuat polos sesuai preferensi sebelumnya. Ketujuh poster dikodekan WebP kualitas 90, nama versi baru agar template sebelumnya tetap ada.

## Struktur dan navigasi

Masing-masing kategori menampilkan deretan produk yang dapat digeser, disusul poster dan deskripsi kategori. Filter pulpen memisahkan plastik, gel/KACO, dan metal. Detail produk memakai dialog yang bisa ditutup Escape, dengan CTA WhatsApp berisi nama produk. Header tetap Beranda/Produk; pencarian memfilter item sesuai query. Footer dan pintasan kategori di beranda mengarah ke tujuh kategori yang tersedia.
