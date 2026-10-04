import { PromoBanner } from "../section-5/Section5Section.jsx";

export default function Section10Section() {
  return (
    <PromoBanner
      id="bags-lifestyle"
      image="/assets/images/banners/totebag-goodiebag-office-banner.webp"
      alt="Pekerja membawa tote bag dan goodie bag custom di area kantor"
      href="#bags"
      eyebrow="TOTE BAG & GOODIE BAG CUSTOM"
      title="Brand Anda ikut ke mana saja"
      description="Tas custom yang praktis untuk acara, aktivitas kantor, belanja, dan merchandise komunitas."
      cta="Lihat 7 pilihan produk"
      showLogo
      badgeMark={{ top: "72%", left: "58%", size: "3.4%", mobileLeft: "51%", mobileBottom: "72px", mobileSize: "36px" }}
    />
  );
}