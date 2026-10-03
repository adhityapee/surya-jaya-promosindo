import { CatalogShelf } from "../features/FeaturesSection.jsx";

const products = [
  { name: "BOX PAD N-COOL S BL S2401", image: "/assets/images/7586502-7567121-752590103_220x220.jpg", price: "Rp 429.000,00" },
  { name: "BOX PAD N-COOL SP WD BL S2402", image: "/assets/images/7525908-756713104_557fedf0-6cbb-4d03-a156-668e2de7f8dd_220x220.jpg", price: "Rp 849.000,00", badge: "Sale" },
  { name: "BOX PAD N-COOL WSP WD GYS2403", image: "/assets/images/7525916-756714504_e39946dd-706e-47e8-ab9a-e0e3c1e468a2_220x220.jpg", price: "Rp 999.000,00" },
  { name: "BOX PAD N-COOL WSP S DBLS2403", image: "/assets/images/7525915-756714104_220x220.jpg", price: "Rp 699.000,00" },
  { name: "BOX PAD N-COOL SP WD GY S2402", image: "/assets/images/7525909-756713504_582cb46c-f45c-40e2-a424-8fb68cbad958_220x220.jpg", price: "Rp 849.000,00" },
];

export default function Features2Section() {
  return <CatalogShelf id="n-cool" title="N-Cool Collection" subtitle="Tetap nyaman di cuaca panas ekstrem" products={products} />;
}
