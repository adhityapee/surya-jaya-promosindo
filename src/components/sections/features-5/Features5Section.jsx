import { CatalogShelf } from "../features/FeaturesSection.jsx";

const products = [
  { name: "Kipas mini portable custom", image: "/assets/images/products/gadgets/portable-mini-fan.webp", price: "Mulai Rp 30.000", minimum: "100 pcs", badge: "Best Seller", description: "Kipas genggam lipat untuk event, aktivitas luar ruang, dan merchandise promosi yang sering digunakan." },
  { name: "Power bank magnetic", image: "/assets/images/products/gadgets/magnetic-powerbank.webp", price: "Mulai Rp 145.000", minimum: "50 pcs", badge: "Premium", description: "Power bank wireless magnetic dengan bodi ringkas dan bidang cetak logo untuk corporate gift modern." },
  { name: "Power bank kabel terintegrasi", image: "/assets/images/products/gadgets/integrated-cable-powerbank.webp", price: "Mulai Rp 115.000", minimum: "50 pcs", description: "Power bank dengan kabel bawaan yang praktis untuk perjalanan, onboarding kit, dan kebutuhan tim lapangan." },
  { name: "Kartu BRIZZI custom", image: "/assets/images/products/gadgets/brizzi-card.webp", price: "Mulai Rp 45.000", minimum: "50 pcs", badge: "Full Color", description: "Kartu elektronik BRIZZI dengan desain custom untuk hadiah, komunitas, event, dan kebutuhan promosi." },
  { name: "Kartu TapCash custom", image: "/assets/images/products/gadgets/tapcash-card.webp", price: "Mulai Rp 45.000", minimum: "50 pcs", description: "Kartu TapCash custom dengan area desain luas untuk identitas acara atau merchandise perusahaan." },
  { name: "Kartu e-money custom", image: "/assets/images/products/gadgets/emoney-card.webp", price: "Mulai Rp 45.000", minimum: "50 pcs", description: "Kartu e-money custom full color untuk campaign, hadiah pelanggan, dan souvenir perusahaan." },
  { name: "Kartu Flazz custom", image: "/assets/images/products/gadgets/flazz-card.webp", price: "Mulai Rp 45.000", minimum: "50 pcs", badge: "Favorit", description: "Kartu Flazz custom yang praktis dan mudah dipersonalisasi untuk event serta program apresiasi." },
];

export default function Features5Section() {
  return <CatalogShelf id="gadget-custom" title="Gadget custom" subtitle="Perangkat praktis dan kartu elektronik untuk promosi, event, dan hadiah perusahaan" products={products} />;
}