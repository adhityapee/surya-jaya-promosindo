import { CatalogShelf } from "../features/FeaturesSection.jsx";

const products = [
  { name: "Tumbler sport 750 ml", image: "/assets/images/7586502-7567121-752590103_220x220.jpg", price: "Mulai Rp 48.000", minimum: "50 pcs" },
  { name: "Vacuum flask premium", image: "/assets/images/7525908-756713104_557fedf0-6cbb-4d03-a156-668e2de7f8dd_220x220.jpg", price: "Mulai Rp 86.000", minimum: "30 pcs", badge: "Premium" },
  { name: "Botol minum doff custom", image: "/assets/images/7525916-756714504_e39946dd-706e-47e8-ab9a-e0e3c1e468a2_220x220.jpg", price: "Mulai Rp 42.000", minimum: "50 pcs" },
  { name: "Travel mug dengan handle", image: "/assets/images/7525915-756714104_220x220.jpg", price: "Mulai Rp 54.000", minimum: "50 pcs" },
  { name: "Tumbler slim full color", image: "/assets/images/7525909-756713504_582cb46c-f45c-40e2-a424-8fb68cbad958_220x220.jpg", price: "Mulai Rp 39.000", minimum: "50 pcs" },
];

export default function Features2Section() {
  return <CatalogShelf id="drinkware" title="Tumbler & drinkware" subtitle="Pilihan material dan teknik cetak untuk identitas brand Anda" products={products} />;
}
