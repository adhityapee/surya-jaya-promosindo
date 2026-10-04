import { PromoBanner } from "../section-5/Section5Section.jsx";

export default function Section12Section() {
  return (
    <PromoBanner
      id="gadget-lifestyle"
      image="/assets/images/banners/gadget-office-banner.webp"
      alt="Kipas portable, power bank, dan kartu elektronik custom digunakan di meja kerja"
      href="#gadget-custom"
      eyebrow="GADGET CUSTOM"
      title="Praktis untuk ritme kerja modern"
      description="Kipas portable, power bank, dan kartu elektronik custom untuk kebutuhan tim serta event."
      cta="Lihat 7 pilihan produk"
      showLogo
      badgeMark={{ top: "56%", left: "70%", size: "2.4%", mobileLeft: "66%", mobileBottom: "135px", mobileSize: "29px" }}
    />
  );
}