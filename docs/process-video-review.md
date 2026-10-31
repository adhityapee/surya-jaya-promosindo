# Video home-process — versi review 1

- Output: `public/assets/videos/sjp-proses-cetak-uv-v1.mp4`.
- Poster WebP: `public/assets/images/sjp-proses-cetak-uv.webp`.
- Durasi 32 detik, format vertikal 576 × 1024, H.264, 30 fps, fast-start untuk web.
- Tanpa audio/musik; autoplay dalam keadaan muted, dapat di-pause, loop.
- Potongan langsung yang sederhana dengan fade singkat pada awal dan akhir. Tidak ada logo atau desain buatan yang ditambahkan ke footage.
- Berkas asli di `docs/new-assets` tidak diubah. Tidak menggunakan foto JPG.

## Urutan edit

| Sumber | Bagian yang diambil | Isi |
|---|---|---|
| VID-20261027-WA0004.mp4 | 12–17 detik | Cetak pulpen |
| VID-20261027-WA0005.mp4 | 14–19 detik | Cetak kartu |
| VID-20261002-WA0011.mp4 | 14–18 detik | Cetak tumbler hitam |
| VID-20261031-WA0008.mp4 | 17–21 dan 23–26 detik | Proses dan hasil tumbler krem |
| VID-20261031-WA0009.mp4 | 17–21 dan 24–27 detik | Proses dan hasil tumbler merah |
| VID-20261031-WA0014.mp4 | 3–7 detik | Detail hasil tumbler kuning |

Video WA0009 tanggal 2 Oktober tidak dipakai karena resolusi lebih rendah dan adegan serupa sudah terwakili. Video payung WA0010 disisihkan agar alur tetap fokus pada cetak UV.

Untuk membangun ulang: jalankan `scripts/build-process-video.py` dengan Python yang memiliki paket `imageio-ffmpeg`. Kualitas mengikuti footage yang diberikan; tidak menggunakan AI upscaling.
