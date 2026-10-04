import { useEffect } from "react";
import { ArrowRight } from "@phosphor-icons/react/ArrowRight";
import { Handshake } from "@phosphor-icons/react/Handshake";
import { MapPin } from "@phosphor-icons/react/MapPin";
import { Package } from "@phosphor-icons/react/Package";
import { Palette } from "@phosphor-icons/react/Palette";
import { Truck } from "@phosphor-icons/react/Truck";
import { WhatsappLogo } from "@phosphor-icons/react/WhatsappLogo";
import HeaderSection from "../../components/sections/header/HeaderSection.jsx";
import Section13Section from "../../components/sections/section-13/Section13Section.jsx";
import FooterSection from "../../components/sections/footer/FooterSection.jsx";
import "./styles.css";

const whatsappMessage = "Halo Surya Jaya Promosindo, saya ingin berkonsultasi mengenai kebutuhan souvenir perusahaan. Mohon bantu rekomendasinya, terima kasih.";
const whatsappUrl = `https://wa.me/6285740386268?text=${encodeURIComponent(whatsappMessage)}`;
const processVideo = "https://videos.pexels.com/video-files/34888657/14781069_1920_1080_30fps.mp4";

const featuredCategories = [
  { label: "Corporate Gift", copy: "Paket apresiasi untuk klien, relasi, dan tim.", image: "/assets/images/categories/gift-set-hampers.webp", href: "/products#corporate-gift", featured: true },
  { label: "Tumbler & Mug", copy: "Produk harian untuk menjaga brand tetap terlihat.", image: "/assets/images/categories/tumbler-mug.webp", href: "/products#drinkware" },
  { label: "Pulpen & Notebook", copy: "Perlengkapan kerja untuk seminar dan onboarding.", image: "/assets/images/categories/pulpen-notebook.webp", href: "/products#weekly-best" },
  { label: "Tote Bag", copy: "Tas promosi untuk event dan kebutuhan perusahaan.", image: "/assets/images/categories/tote-goodie-bag.webp", href: "/products#bags" },
];

const workflow = [
  { icon: Handshake, title: "Diskusikan kebutuhan", copy: "Sampaikan jenis produk, jumlah, target waktu, dan kebutuhan brand." },
  { icon: Palette, title: "Setujui desain", copy: "Tim kami membantu meninjau penempatan logo dan detail cetak." },
  { icon: Package, title: "Produksi pesanan", copy: "Pesanan dikerjakan sesuai spesifikasi yang telah dikonfirmasi." },
  { icon: Truck, title: "Terima pengiriman", copy: "Produk dikemas dan dikirim ke alamat tujuan di Indonesia." },
];

export default function HomePage() {
  useEffect(() => {
    document.title = "Surya Jaya Promosindo | Partner Souvenir Perusahaan";
  }, []);

  return (
    <>
      <div data-pwc-section="header"><HeaderSection /></div>
      <main className="home-page">
        <section className="home-hero content-shell">
          <div className="home-hero__copy">
            <span className="home-eyebrow">PARTNER SOUVENIR PERUSAHAAN</span>
            <h1>Souvenir custom yang membawa brand Anda lebih jauh</h1>
            <p>Kami membantu perusahaan menyiapkan merchandise, corporate gift, dan kebutuhan event dari konsultasi hingga pengiriman.</p>
            <div className="home-actions">
              <a className="home-button home-button--primary" href="/products">Lihat produk<ArrowRight size={18} weight="bold" aria-hidden="true" /></a>
              <a className="home-button home-button--secondary" href={whatsappUrl} target="_blank" rel="noreferrer"><WhatsappLogo size={19} weight="fill" aria-hidden="true" />Konsultasi WhatsApp</a>
            </div>
          </div>
          <div className="home-hero__visual">
            <img src="/assets/images/banners/giftset-hampers-office-banner.webp" alt="Penyerahan gift set perusahaan di ruang kerja profesional" />
          </div>
        </section>

        <section className="home-trust" aria-label="Layanan utama Surya Jaya Promosindo">
          <div className="content-shell home-trust__grid">
            <span>Konsultasi kebutuhan</span>
            <span>Review desain custom</span>
            <span>Produksi untuk perusahaan dan event</span>
            <span>Pengiriman seluruh Indonesia</span>
          </div>
        </section>

        <section className="home-categories content-shell" aria-labelledby="home-category-title">
          <div className="home-section-heading">
            <h2 id="home-category-title">Pilihan untuk berbagai kebutuhan perusahaan</h2>
            <p>Mulai dari merchandise kerja hingga paket apresiasi, pilih kategori yang paling sesuai dengan kebutuhan Anda.</p>
          </div>
          <div className="home-category-grid">
            {featuredCategories.map((category) => (
              <a className={`home-category ${category.featured ? "home-category--featured" : ""}`} href={category.href} key={category.label}>
                <img src={category.image} alt={category.label} />
                <span><strong>{category.label}</strong><small>{category.copy}</small></span>
                <ArrowRight size={21} weight="bold" aria-hidden="true" />
              </a>
            ))}
          </div>
          <a className="home-text-link" href="/products">Lihat semua kategori<ArrowRight size={17} weight="bold" aria-hidden="true" /></a>
        </section>

        <section className="home-process content-shell" aria-labelledby="process-title">
          <div className="home-process__copy">
            <h2 id="process-title">Detail produksi yang dapat Anda lihat</h2>
            <p>Area ini disiapkan untuk dokumentasi proses cetak, kontrol detail, dan pengerjaan pesanan Surya Jaya Promosindo.</p>
            <a className="home-text-link" href={whatsappUrl} target="_blank" rel="noreferrer">Diskusikan kebutuhan Anda<ArrowRight size={17} weight="bold" aria-hidden="true" /></a>
          </div>
          <div className="home-process__media">
            <video controls playsInline preload="metadata" poster="https://images.pexels.com/videos/34888657/pexels-photo-34888657.jpeg?auto=compress&amp;dpr=1&amp;h=750&amp;w=1260">
              <source src={processVideo} type="video/mp4" />
              Browser Anda belum mendukung pemutaran video.
            </video>
            <p>Video placeholder proses screen printing. Dokumentasi produksi SJP dapat menggantikan video ini nanti.</p>
          </div>
        </section>

        <section className="home-workflow content-shell" aria-labelledby="workflow-title">
          <div className="home-section-heading">
            <h2 id="workflow-title">Dari kebutuhan hingga siap dibagikan</h2>
            <p>Satu alur kerja yang jelas membantu pesanan perusahaan tetap sesuai spesifikasi dan jadwal.</p>
          </div>
          <div className="home-workflow__grid">
            {workflow.map(({ icon: Icon, title, copy }) => (
              <article key={title}>
                <Icon size={27} weight="regular" aria-hidden="true" />
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <Section13Section />

        <section className="home-contact content-shell" aria-labelledby="home-contact-title">
          <div>
            <h2 id="home-contact-title">Siapkan souvenir perusahaan bersama tim kami</h2>
            <p>Konsultasikan produk, jumlah, teknik cetak, dan waktu produksi sebelum melakukan pemesanan.</p>
          </div>
          <div className="home-contact__actions">
            <a className="home-button home-button--primary" href={whatsappUrl} target="_blank" rel="noreferrer"><WhatsappLogo size={19} weight="fill" aria-hidden="true" />Chat WhatsApp</a>
            <a className="home-button home-button--secondary" href="/id/pages/lokasi-toko"><MapPin size={19} weight="fill" aria-hidden="true" />Lokasi toko</a>
          </div>
        </section>
      </main>
      <div data-pwc-section="footer"><FooterSection /></div>
    </>
  );
}
