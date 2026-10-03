import { CatalogShelf } from "../features/FeaturesSection.jsx";

const products = [
  { name: "Kaos cotton combed sablon", image: "/assets/images/755048902_220x220.jpg", price: "Mulai Rp 69.000", minimum: "24 pcs" },
  { name: "Polo shirt bordir logo", image: "/assets/images/755039702_220x220.jpg", price: "Mulai Rp 118.000", minimum: "24 pcs" },
  { name: "Kemeja kerja custom", image: "/assets/images/755048802_220x220.jpg", price: "Mulai Rp 165.000", minimum: "24 pcs" },
  { name: "Topi bordir komputer", image: "/assets/images/755072120_220x220.jpg", price: "Mulai Rp 47.000", minimum: "50 pcs" },
  { name: "Jaket komunitas custom", image: "/assets/images/755072716_220x220.jpg", price: "Mulai Rp 185.000", minimum: "24 pcs" },
];

export default function Features4Section() {
  return <CatalogShelf id="apparel" title="Apparel custom" subtitle="Seragam, merchandise komunitas, dan kebutuhan event" products={products} />;
}
