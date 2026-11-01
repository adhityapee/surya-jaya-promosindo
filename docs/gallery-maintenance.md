# Update galeri bulanan

1. Simpan foto asli yang telah disetujui untuk publikasi di folder aset lokal. Hindari informasi pribadi pelanggan.
2. Tambahkan pemetaan sumber dan nama file deskriptif di `scripts/build-gallery-assets.py`, lalu jalankan dengan Python + Pillow. Script menghasilkan WebP thumbnail maksimal 720 px dan foto besar maksimal 1600 px, tanpa crop atau perubahan hasil cetak. Metadata EXIF tidak disertakan pada hasil ekspor.
3. Tambahkan item baru di bagian awal `src/data/gallery.js`. Isi `id`, `alt`, `width`, dan `height` sesuai foto berorientasi benar. Jangan menggandakan foto atau mengarang data pelanggan.
4. Beranda otomatis menampilkan maksimal enam foto pertama. Halaman `/gallery` menampilkan 24 foto awal, lalu menambahkan 24 foto setiap kali tombol Muat lebih banyak ditekan. Foto besar dimuat hanya saat dibuka.
5. Periksa foto, navigasi keyboard, tampilan HP, dan jalankan `npm run build` sebelum deploy.

Galeri ini tidak menggunakan CMS. File hasil WebP di `public/assets/images/gallery` ikut deploy; foto asli tetap lokal.
