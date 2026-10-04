import { PromoBanner } from "../section-5/Section5Section.jsx";

export default function Section11Section() {
  return (
    <PromoBanner
      id="hampers-lifestyle"
      image="/assets/images/banners/giftset-hampers-office-banner.webp"
      alt="Rekan kerja menerima gift set dan hampers custom di ruang meeting"
      href="#corporate-gift"
      eyebrow="GIFT SET & HAMPERS CUSTOM"
      title="Apresiasi yang terasa personal"
      description="Susun produk, kemasan, dan kartu ucapan menjadi hadiah perusahaan yang lebih berkesan."
      cta="Lihat 7 pilihan produk"
      showLogo
      badgeMark={{ top: "77%", left: "74%", size: "3%", mobileLeft: "70%", mobileBottom: "64px", mobileSize: "34px" }}
    />
  );
}