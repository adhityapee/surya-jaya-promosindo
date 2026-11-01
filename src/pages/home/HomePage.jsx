
import { ArrowRight } from "@phosphor-icons/react/ArrowRight";
import { Handshake } from "@phosphor-icons/react/Handshake";
import { MapPin } from "@phosphor-icons/react/MapPin";
import { Package } from "@phosphor-icons/react/Package";
import { Palette } from "@phosphor-icons/react/Palette";
import { Truck } from "@phosphor-icons/react/Truck";
import { WhatsappLogo } from "@phosphor-icons/react/WhatsappLogo";
import MarketplaceMark from "../../components/MarketplaceMark.jsx";
import PhotoGallery from "../../components/PhotoGallery.jsx";
import { galleryPhotos } from "../../data/gallery.js";
import SeoMetadata from "../../components/SeoMetadata.jsx";
import HeaderSection from "../../components/sections/header/HeaderSection.jsx";
import Section13Section from "../../components/sections/section-13/Section13Section.jsx";
import FooterSection from "../../components/sections/footer/FooterSection.jsx";
import { marketplaces } from "../../data/marketplaces.js";
import clientCatalog from "../../data/clientCatalog.json";
import "./styles.css";

const whatsappMessage = "Halo Surya Jaya Promosindo, saya ingin berkonsultasi mengenai kebutuhan souvenir perusahaan. Mohon bantu rekomendasinya, terima kasih.";
const whatsappUrl = `https://wa.me/6285740386268?text=${encodeURIComponent(whatsappMessage)}`;
const processVideo = "/assets/videos/sjp-proses-cetak-uv-v1.mp4";

const featuredCategories = clientCatalog.filter((category) => ["weekly-best", "agenda", "drinkware", "bags"].includes(category.id)).map((category, index) => ({ label: category.label, copy: category.subtitle, image: category.image, href: `/products#${category.id}`, featured: index === 0 }));

const workflow = [
  { icon: Handshake, title: "Diskusikan kebutuhan", copy: "Pilih souvenir dari katalog produk, lalu sampaikan jumlah, target waktu, dan kebutuhan brand." },
  { icon: Palette, title: "Setujui desain", copy: "Tim kami membantu meninjau penempatan logo dan detail cetak." },
  { icon: Package, title: "Produksi pesanan", copy: "Pesanan dikerjakan sesuai spesifikasi yang telah dikonfirmasi." },
  { icon: Truck, title: "Terima pengiriman", copy: "Pesanan dikemas dan dikirim ke alamat tujuan di Indonesia." },
];

export default function HomePage() {
  return (
    <>
      <SeoMetadata
        title="Surya Jaya Promosindo | Souvenir Custom untuk Perusahaan"
        description="Souvenir custom, corporate gift, merchandise event, dan kebutuhan promosi untuk perusahaan, instansi, komunitas, dan acara di seluruh Indonesia."
      />
      <div data-pwc-section="header"><HeaderSection /></div>
      <main className="home-page">
        <section className="home-hero content-shell">
          <div className="home-hero__copy">
            <span className="home-eyebrow">PARTNER SOUVENIR PERUSAHAAN</span>
            <h1>Souvenir custom yang membawa brand Anda lebih jauh</h1>
            <p>Kami membantu perusahaan menyiapkan merchandise, corporate gift, dan kebutuhan event dari konsultasi hingga pengiriman.</p>
            <div className="home-actions">
              <a className="home-button home-button--primary" href="/products">Lihat katalog produk<ArrowRight size={18} weight="bold" aria-hidden="true" /></a>
              <a className="home-button home-button--secondary" href={whatsappUrl} target="_blank" rel="noreferrer"><WhatsappLogo size={19} weight="fill" aria-hidden="true" />Konsultasi WhatsApp</a>
            </div>
          </div>
          <div className="home-hero__visual">
            <img src="/assets/images/catalog-posters/pulpen-catalog-v2.webp" alt="Pilihan pulpen plastik, gel, dan metal custom Surya Jaya Promosindo" style={{ objectFit: "contain", background: "#fff" }} />
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
          <a className="home-text-link" href="/products">Jelajahi katalog produk<ArrowRight size={17} weight="bold" aria-hidden="true" /></a>
        </section>

        <section className="home-marketplaces content-shell" aria-labelledby="marketplace-title">
          <div className="home-marketplaces__intro">
            <span className="home-eyebrow">TOKO ONLINE SJP</span>
            <h2 id="marketplace-title">Belanja melalui marketplace pilihan Anda</h2>
            <p>Jelajahi katalog produk siap pesan di toko online Surya Jaya Promosindo. Kebutuhan custom dan pesanan perusahaan tetap dapat dikonsultasikan melalui WhatsApp.</p>
          </div>
          <div className="home-marketplaces__list">
            {marketplaces.map((marketplace) => (
              <a className={"home-marketplace home-marketplace--" + marketplace.id} href={marketplace.href} target="_blank" rel="noreferrer" key={marketplace.id}>
                <MarketplaceMark marketplace={marketplace} />
                <span className="home-marketplace__copy"><strong>{marketplace.label}</strong><small>{marketplace.description}</small></span>
                <ArrowRight size={21} weight="bold" aria-hidden="true" />
              </a>
            ))}
          </div>
        </section>

        <section className="home-process content-shell" aria-labelledby="process-title">
          <div className="home-process__copy">
            <h2 id="process-title">Lihat proses cetak UV pada souvenir</h2>
            <p>Dari pulpen dan kartu hingga tumbler, lihat proses cetak UV dan detail hasil pengerjaan kami. Konsultasikan pilihan souvenir, posisi logo, dan kebutuhan desain Anda bersama tim SJP.</p>
            <a className="home-text-link" href={whatsappUrl} target="_blank" rel="noreferrer">Diskusikan kebutuhan Anda<ArrowRight size={17} weight="bold" aria-hidden="true" /></a>
          </div>
          <div className="home-process__media">
            <video
              src={processVideo}
              aria-label="Dokumentasi proses cetak UV dan hasil souvenir Surya Jaya Promosindo"
              poster="/assets/images/sjp-proses-cetak-uv.webp"
              width="576"
              height="1024"
              autoPlay
              muted
              loop
              controls
              playsInline
              preload="metadata"
            >Browser Anda tidak mendukung pemutaran video. <a href={processVideo}>Tonton dokumentasi cetak UV</a>.</video>
          </div>
        </section>

        <section className="home-gallery content-shell" aria-labelledby="home-gallery-title">
          <div className="home-section-heading"><h2 id="home-gallery-title">Hasil pengerjaan kami</h2><p>Foto hasil custom yang telah kami kerjakan untuk pelanggan.</p></div>
          <PhotoGallery photos={galleryPhotos} preview />
          <a className="home-text-link" href="/gallery">Lihat galeri<ArrowRight size={17} weight="bold" aria-hidden="true" /></a>
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
            <p>Pilih souvenir dari katalog produk, lalu konsultasikan jumlah, teknik cetak, dan waktu pengerjaannya sebelum memesan.</p>
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
