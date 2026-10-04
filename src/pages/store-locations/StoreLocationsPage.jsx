import { useEffect } from "react";
import { ArrowUpRight } from "@phosphor-icons/react/ArrowUpRight";
import { Clock } from "@phosphor-icons/react/Clock";
import { MapPin } from "@phosphor-icons/react/MapPin";
import { Phone } from "@phosphor-icons/react/Phone";
import { WhatsappLogo } from "@phosphor-icons/react/WhatsappLogo";
import HeaderSection from "../../components/sections/header/HeaderSection.jsx";
import FooterSection from "../../components/sections/footer/FooterSection.jsx";
import "./styles.css";

const PHONE_DISPLAY = "0857 4038 6268";
const PHONE_LINK = "tel:+6285740386268";
const WHATSAPP_LINK = "https://wa.me/6285740386268";

const locations = [
  {
    name: "Surya Jaya Promosindo Cipondoh",
    type: "Lokasi utama",
    address: "Jl. Royal Gg. Annur 2 No. 131, RT.04/RW.01, Poris Plawad Utara, Kec. Cipondoh, Kota Tangerang, Banten 15141",
    schedule: "Kunjungan dengan janji temu",
    mapUrl: "https://maps.app.goo.gl/KTn9ZTx8xkJb5N6X9",
    embedUrl: "https://www.google.com/maps?q=-6.1858559,106.3561496&z=16&output=embed",
    isPrimary: true,
  },
  {
    name: "SJP Jakarta Barat",
    type: "Lokasi contoh",
    address: "Kawasan Puri Indah, Kembangan, Jakarta Barat",
    schedule: "Belum beroperasi — data demonstrasi",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-6.1872,106.7388",
    embedUrl: "https://www.google.com/maps?q=-6.1872,106.7388&z=15&output=embed",
    isPrimary: false,
  },
  {
    name: "SJP Tangerang Selatan",
    type: "Lokasi contoh",
    address: "Kawasan BSD City, Tangerang Selatan, Banten",
    schedule: "Belum beroperasi — data demonstrasi",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=-6.3017,106.6527",
    embedUrl: "https://www.google.com/maps?q=-6.3017,106.6527&z=15&output=embed",
    isPrimary: false,
  },
];

function MapPreview({ location }) {
  return (
    <div className="store-map">
      <iframe
        title={`Peta ${location.name}`}
        src={location.embedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        tabIndex="-1"
        aria-hidden="true"
      />
      <a className="store-map-link" href={location.mapUrl} target="_blank" rel="noreferrer" aria-label={`Buka lokasi ${location.name} di Google Maps`}>
        <span><MapPin size={18} weight="fill" aria-hidden="true" />Buka di Google Maps<ArrowUpRight size={17} weight="bold" aria-hidden="true" /></span>
      </a>
    </div>
  );
}

export default function StoreLocationsPage() {
  useEffect(() => {
    document.title = "Lokasi Toko | Surya Jaya Promosindo";
  }, []);

  return (
    <>
      <div data-pwc-section="header">
        <HeaderSection hideStoreLocationLink />
      </div>
      <main className="store-locations-page">
        <div className="content-shell store-breadcrumb" aria-label="Breadcrumb">
          <a href="/">Beranda</a><span aria-hidden="true">/</span><span>Lokasi Toko</span>
        </div>

        <section className="content-shell store-hero" aria-labelledby="store-page-title">
          <div className="store-hero-copy">
            <span className="store-eyebrow">LOKASI TOKO & WORKSHOP</span>
            <h1 id="store-page-title">Temui tim Surya Jaya Promosindo</h1>
            <p>Konsultasikan kebutuhan merchandise, lihat sampel bahan, dan pastikan detail cetak sebelum produksi. Hubungi kami lebih dulu agar tim dapat menyiapkan kebutuhan kunjungan Anda.</p>
            <div className="store-hero-actions">
              <a className="store-button store-button-primary" href={PHONE_LINK}><Phone size={19} weight="fill" aria-hidden="true" />Telepon {PHONE_DISPLAY}</a>
              <a className="store-button store-button-secondary" href={WHATSAPP_LINK} target="_blank" rel="noreferrer"><WhatsappLogo size={20} weight="fill" aria-hidden="true" />Chat WhatsApp</a>
            </div>
          </div>
          <aside className="visit-note">
            <span className="visit-note-number">01</span>
            <div><strong>Sebelum berkunjung</strong><p>Konfirmasi jadwal dan jenis sampel yang ingin dilihat melalui telepon atau WhatsApp.</p></div>
          </aside>
        </section>

        <section className="content-shell locations-section" aria-labelledby="location-list-title">
          <div className="locations-heading">
            <div><span className="store-eyebrow">TEMUKAN LOKASI</span><h2 id="location-list-title">Pilih lokasi yang ingin dikunjungi</h2></div>
            <p>Dua lokasi bertanda <strong>Lokasi contoh</strong> adalah data demonstrasi dan belum merupakan cabang aktif.</p>
          </div>

          <div className="location-list">
            {locations.map((location, index) => (
              <article className={`location-entry ${location.isPrimary ? "is-primary" : "is-example"}`} key={location.name}>
                <MapPreview location={location} />
                <div className="location-details">
                  <div className="location-index">{String(index + 1).padStart(2, "0")}</div>
                  <span className="location-type">{location.type}</span>
                  <h3>{location.name}</h3>
                  <dl>
                    <div><dt><MapPin size={20} weight="regular" aria-hidden="true" />Alamat</dt><dd>{location.address}</dd></div>
                    <div><dt><Clock size={20} weight="regular" aria-hidden="true" />Kunjungan</dt><dd>{location.schedule}</dd></div>
                    <div><dt><Phone size={20} weight="regular" aria-hidden="true" />Telepon</dt><dd><a href={PHONE_LINK}>{PHONE_DISPLAY}</a></dd></div>
                  </dl>
                  <div className="location-actions">
                    <a href={PHONE_LINK}>Hubungi lokasi</a>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">WhatsApp</a>
                    <a href={location.mapUrl} target="_blank" rel="noreferrer">Petunjuk arah<ArrowUpRight size={15} weight="bold" aria-hidden="true" /></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-shell store-contact-strip" aria-label="Hubungi Surya Jaya Promosindo">
          <div><span className="store-eyebrow">BUTUH INFORMASI SEBELUM DATANG?</span><h2>Tim kami siap membantu menyiapkan kunjungan Anda.</h2></div>
          <a href={PHONE_LINK}><Phone size={20} weight="fill" aria-hidden="true" />{PHONE_DISPLAY}</a>
        </section>
      </main>
      <FooterSection />
    </>
  );
}
