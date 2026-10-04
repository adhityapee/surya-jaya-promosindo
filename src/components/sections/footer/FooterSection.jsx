import { useState } from "react";
import { InstagramLogo } from "@phosphor-icons/react/InstagramLogo";
import { WhatsappLogo } from "@phosphor-icons/react/WhatsappLogo";

const whatsappMessage = "Halo Surya Jaya Promosindo, saya ingin berkonsultasi mengenai pemesanan souvenir custom. Produk yang saya butuhkan: [nama produk]. Jumlah: [jumlah pcs]. Mohon informasinya, terima kasih.";
const whatsappUrl = `https://wa.me/6285740386268?text=${encodeURIComponent(whatsappMessage)}`;

const information = [
  { label: "Katalog produk", href: "/products#categories" },
  { label: "Produk paling diminati", href: "/products#weekly-best" },
  { label: "Gift set perusahaan", href: "/products#corporate-gift" },
  { label: "Informasi pemesanan", href: whatsappUrl, external: true },
  { label: "Pengiriman seluruh Indonesia", href: "/products#information" },
  { label: "Lokasi toko", href: "/id/pages/lokasi-toko" },
];
const company = [
  { label: "Tentang Surya Jaya Promosindo", href: "/" },
  { label: "Hubungi melalui WhatsApp", href: whatsappUrl, external: true },
  { label: "Lokasi toko", href: "/id/pages/lokasi-toko" },
  { label: "Telepon 0857 4038 6268", href: "tel:+6285740386268" },
];
const services = [
  { label: "Tumbler & mug custom", href: "/products#drinkware" },
  { label: "Pulpen & notebook custom", href: "/products#weekly-best" },
  { label: "Tote bag & goodie bag", href: "/products#bags" },
  { label: "Lanyard & ID card", href: "/products#event-kit" },
  { label: "Gift set & hampers", href: "/products#corporate-gift" },
  { label: "Gadget custom", href: "/products#gadget-custom" },
];

function FooterLink({ item }) {
  return <a href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noreferrer" : undefined}>{item.label}</a>;
}

export default function FooterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  return (
    <footer className="site-footer" data-pwc-critical="footer-1" id="information">
      <div className="content-shell">
        <div className="footer-grid">
          <div><h3>Jelajahi katalog</h3>{information.map((item) => <FooterLink item={item} key={item.label} />)}</div>
          <div><h3>Surya Jaya Promosindo</h3>{company.map((item) => <FooterLink item={item} key={item.label} />)}</div>
          <div><h3>Layanan kami</h3>{services.map((item) => <FooterLink item={item} key={item.label} />)}</div>
          <div><h3>Dapatkan katalog terbaru</h3><p>Terima inspirasi souvenir dan informasi produk baru melalui email.</p>{subscribed ? <p className="newsletter-success">Terima kasih. Pembaruan katalog akan kami kirimkan ke email Anda.</p> : <form className="newsletter-form" onSubmit={(event) => { event.preventDefault(); if (email.trim()) setSubscribed(true); }}><input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Alamat email" aria-label="Alamat email" required /><button type="submit">Daftar</button></form>}<div className="newsletter-note">Katalog ini bersifat informatif. Harga akhir menyesuaikan jumlah, bahan, teknik cetak, dan detail desain.</div></div>
          <div><h3>Hubungi kami</h3><p className="socials-intro">Ikuti pembaruan produk atau mulai konsultasi pesanan.</p><div className="socials"><button type="button" aria-label="Instagram Surya Jaya Promosindo, tautan segera hadir" title="Tautan Instagram segera hadir"><InstagramLogo size={21} weight="fill" aria-hidden="true" /></button><a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Chat WhatsApp Surya Jaya Promosindo" title="Chat melalui WhatsApp"><WhatsappLogo size={21} weight="fill" aria-hidden="true" /></a></div></div>
        </div>
        <div className="consumer-info"><strong>Surya Jaya Promosindo</strong><br />Percetakan dan penyedia souvenir custom untuk kebutuhan promosi.<br />Konsultasikan jumlah, bahan, warna, dan metode cetak melalui <a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp 0857 4038 6268</a>.<br />Melayani perusahaan, instansi, komunitas, dan penyelenggara acara di seluruh Indonesia.</div>
        <div className="copyright">Copyright © 2026 Surya Jaya Promosindo.</div>
      </div>
    </footer>
  );
}
