import { CatalogShelf } from "../features/FeaturesSection.jsx";

const products = [
  { name: "Paket lanyard & ID card", image: "/assets/images/771065802_220x220.jpg", price: "Mulai Rp 14.500", minimum: "100 set", badge: "Event" },
  { name: "Goodie bag spunbond", image: "/assets/images/771065302_220x220.jpg", price: "Mulai Rp 9.500", minimum: "100 pcs" },
  { name: "Folder seminar custom", image: "/assets/images/771067502_220x220.jpg", price: "Mulai Rp 18.000", minimum: "100 pcs" },
  { name: "Pulpen promosi full color", image: "/assets/images/771067602_220x220.jpg", price: "Mulai Rp 5.500", minimum: "200 pcs", badge: "Hemat" },
  { name: "Pin custom 58 mm", image: "/assets/images/771064402_220x220.jpg", price: "Mulai Rp 4.500", minimum: "100 pcs" },
];

export default function Features5Section() {
  return <CatalogShelf id="event-kit" title="Seminar & event kit" subtitle="Perlengkapan acara yang rapi, seragam, dan siap dibagikan" products={products} />;
}
