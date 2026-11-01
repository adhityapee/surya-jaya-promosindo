import HeaderSection from "../../components/sections/header/HeaderSection.jsx";
import FooterSection from "../../components/sections/footer/FooterSection.jsx";
import SeoMetadata from "../../components/SeoMetadata.jsx";
import PhotoGallery from "../../components/PhotoGallery.jsx";
import { galleryPhotos } from "../../data/gallery.js";
import "./styles.css";

export default function GalleryPage() {
  return <>
    <SeoMetadata title="Galeri Hasil Custom Pelanggan | Surya Jaya Promosindo" description="Lihat foto hasil cetak souvenir dan pesanan custom pelanggan Surya Jaya Promosindo." path="/gallery" image={galleryPhotos[0]?.src} />
    <HeaderSection />
    <main className="gallery-page content-shell">
      <header className="gallery-page__heading"><h1>Hasil custom pelanggan</h1><p>Berbagai pesanan, beragam cerita. Inilah hasil pengerjaan souvenir custom dari Surya Jaya Promosindo.</p></header>
      <section aria-label="Galeri foto hasil pengerjaan"><PhotoGallery photos={galleryPhotos} /></section>
    </main>
    <FooterSection />
  </>;
}
