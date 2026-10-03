import { useState } from "react";

const information = ["Pertanyaan umum", "Informasi pemesanan", "Pilihan teknik cetak", "Minimum pemesanan", "Proses produksi", "Pengiriman", "Syarat penggunaan", "Kebijakan privasi"];
const company = ["Tentang kami", "Hubungi kami", "Komitmen kualitas", "Lokasi workshop", "Konsultasi pesanan"];
const services = ["Souvenir perusahaan", "Merchandise acara", "Seminar kit", "Hampers custom", "Apparel custom", "Kemasan", "Cetak promosi"];

export default function FooterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  return (
    <footer className="site-footer" data-pwc-critical="footer-1" id="information">
      <div className="content-shell">
        <div className="footer-grid">
          <div><h3>Informasi</h3>{information.map((item) => <a href={`#${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} key={item}>{item}</a>)}</div>
          <div><h3>Surya Jaya Promosindo</h3>{company.map((item) => <a id={item === "Lokasi workshop" ? "stores" : undefined} href={`#${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} key={item}>{item}</a>)}</div>
          <div><h3>Layanan kami</h3>{services.map((item) => <a href={`#${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} key={item}>{item}</a>)}</div>
          <div><h3>Dapatkan katalog terbaru</h3><p>Terima inspirasi souvenir dan informasi produk baru melalui email.</p>{subscribed ? <p className="newsletter-success">Terima kasih. Pembaruan katalog akan kami kirimkan ke email Anda.</p> : <form className="newsletter-form" onSubmit={(event) => { event.preventDefault(); if (email.trim()) setSubscribed(true); }}><input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Alamat email" aria-label="Alamat email" required /><button type="submit">Daftar</button></form>}<div className="newsletter-note">Katalog ini bersifat informatif. Harga akhir menyesuaikan jumlah, bahan, teknik cetak, dan detail desain.</div></div>
          <div><h3>Ikuti kami</h3><div className="socials"><a href="#facebook" aria-label="Facebook">f</a><a href="#instagram" aria-label="Instagram">◎</a><a href="#tiktok" aria-label="TikTok">♪</a><a href="#youtube" aria-label="YouTube">▶</a></div></div>
        </div>
        <div className="consumer-info"><strong>Surya Jaya Promosindo</strong><br />Percetakan dan penyedia souvenir custom untuk kebutuhan promosi.<br />Konsultasikan jumlah, bahan, warna, dan metode cetak yang Anda butuhkan.<br />Kami melayani kebutuhan perusahaan, instansi, komunitas, dan penyelenggara acara.</div>
        <div className="copyright">Copyright © 2026 Surya Jaya Promosindo.</div>
      </div>
    </footer>
  );
}
