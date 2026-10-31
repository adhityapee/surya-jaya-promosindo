# Referensi katalog Star Promosindo

Diambil 17 Oktober 2026 atas permintaan pemilik proyek dari https://starpromosindo.com/.

## Inventaris

`starpromosindo-inventory.json` mencatat URL halaman, teks sumber, dan URL gambar dari delapan kategori: buku agenda, pulpen, tumbler, kipas mini, kartu elektronik Flazz/e-money, tote bag, payung, dan korek api. Data ini adalah referensi, bukan konfirmasi stok terkini.

Sembilan foto asli berada di `originals/`. Nama file lokal diperjelas agar mudah dilacak. Identitas serta nomor kontak pada website sumber tidak menggantikan identitas/kontak SJP.

## Batch pertama yang dipasang

| Produk | Referensi asli | Halaman sumber | Aset katalog baru |
| --- | --- | --- | --- |
| Pulpen plastik putih, aksen navy | `originals/pulpen-custom.webp` (13.webp) | https://starpromosindo.com/pulpen-custom/ | `public/assets/images/products/source-catalog/pulpen-plastik-putih-navy.webp` |
| Agenda hardcover hitam | `originals/agenda-custom.jpg` | https://starpromosindo.com/buku-agenda-custom/ | `public/assets/images/products/source-catalog/agenda-hardcover-hitam.webp` |
| Tumbler navy bertutup pegangan | `originals/tumbler-custom.webp` (21.webp) | https://starpromosindo.com/tumbler-custom/ | `public/assets/images/products/source-catalog/tumbler-tutup-pegangan-navy.webp` |

Versi PNG hasil imagegen disimpan di `generated/`, dan WebP 900px dipakai website. Foto baru adalah visualisasi berbantuan AI berdasarkan model produk sumber, bukan hasil pemotretan ulang. Detail produksi harus dicocokkan dengan sampel klien sebelum publikasi final. Spesifikasi kapasitas, jenis bahan, dan klaim insulasi tidak ditambahkan tanpa bukti. Harga tidak ditampilkan pada ketiga item, minimum tetap mengikuti arahan katalog SJP 100 pcs.

## Prompt produksi

Tool: built-in imagegen, edit dengan satu foto sumber per produk. Arahan bersama: foto katalog persegi, latar putih #FFFFFF, bayangan kontak tipis, cahaya studio netral; pertahankan bentuk/konstruksi produk; hilangkan artwork cetak agar polos sesuai tema katalog; tanpa teks, logo, watermark, tangan, properti, atau gradasi.

- Pulpen: pilih satu pulpen putih dengan klip lebar beraksen navy, ring navy, ujung bawah navy, dan tombol putih; seluruh produk terlihat secara diagonal.
- Agenda: agenda hardcover hitam bersudut membulat, tekstur sampul halus, elastis vertikal dekat sisi kanan, blok kertas krem; sudut tiga perempat.
- Tumbler: pilih botol navy paling kanan; bodi silinder ramping, bahu bertingkat, tutup ulir navy dan pegangan oval tebal; berdiri tegak.

Kategori lain dan item lain di website belum diperbarui pada batch ini. Foto yang sudah diunduh tersedia untuk batch selanjutnya.
