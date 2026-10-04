import { PromoBanner } from "../section-5/Section5Section.jsx";

export default function Section9Section() {
  return (
    <PromoBanner
      id="lanyard-lifestyle"
      image="/assets/images/banners/lanyard-id-office-banner.webp"
      alt="Pegawai memakai lanyard dan ID card custom saat berbincang bersama tim di kantor"
      href="#event-kit"
      eyebrow="LANYARD & ID CARD CUSTOM"
      title="Identitas yang menyatukan tim"
      description="Lanyard dan kartu identitas custom untuk kantor, seminar, event, dan kebutuhan komunitas."
      cta="Lihat 7 pilihan produk"
      showLogo
      badgeMark={{
        top: "66%",
        left: "72.85%",
        size: "2.5%",
        mobileLeft: "73.5%",
        mobileBottom: "96px",
        mobileSize: "31px",
      }}
    />
  );
}
