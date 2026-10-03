import { CatalogShelf } from "../features/FeaturesSection.jsx";

const products = [
  { name: "FOOT BRUSH CARE (28 X 25 X 4CM)", image: "/assets/images/771065802_220x220.jpg", price: "Rp 79.000,00", badge: "Sale" },
  { name: "BODY WASH BRUSH CLEAR", image: "/assets/images/771065302_220x220.jpg", price: "Rp 59.000,00" },
  { name: "BACK AND BODY BATH MESH SPONGE SOFT", image: "/assets/images/771067502_220x220.jpg", price: "Rp 49.000,00", badge: "Sale" },
  { name: "BACK AND BODY BATH MESH SPONGE", image: "/assets/images/771067602_220x220.jpg", price: "Rp 49.000,00", badge: "Sale" },
  { name: "BODY WASH BALL BUBBLY 2 WH", image: "/assets/images/771064402_220x220.jpg", price: "Rp 16.000,00" },
];

export default function Features5Section() {
  return <CatalogShelf id="bath" title="Bathroom Essentials" subtitle="Pilihan praktis untuk rutinitas harian" products={products} />;
}
