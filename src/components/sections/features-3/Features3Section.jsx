import { CatalogShelf } from "../features/FeaturesSection.jsx";

const products = [
  { name: "Tote bag kanvas natural", image: "/assets/images/products/bags/canvas-tote-natural.webp", price: "Mulai Rp 28.000", minimum: "50 pcs", badge: "Favorit", brandMark: { top: "66%", left: "50%", size: "13%" }, description: "Tote bag kanvas tebal dengan bidang cetak luas untuk seminar, merchandise brand, dan kebutuhan komunitas." },
  { name: "Tote bag cotton drill", image: "/assets/images/products/bags/cotton-drill-tote-navy.webp", price: "Mulai Rp 34.000", minimum: "50 pcs", badge: "Premium", brandMark: { top: "65%", left: "50%", size: "13%" }, description: "Tas berbahan cotton drill dengan gusset dan jahitan kuat untuk corporate gift atau perlengkapan kerja harian." },
  { name: "Goodie bag spunbond", image: "/assets/images/products/bags/spunbond-goodie-magenta.webp", price: "Mulai Rp 6.500", minimum: "100 pcs", badge: "Hemat", brandMark: { top: "62%", left: "50%", size: "14%" }, description: "Goodie bag ringan dan ekonomis dengan pilihan warna serta ukuran untuk acara, promosi, dan kebutuhan ritel." },
  { name: "Goodie bag polyester full print", image: "/assets/images/products/bags/polyester-goodie-white.webp", price: "Mulai Rp 15.000", minimum: "100 pcs", badge: "Full Color", brandMark: { top: "62%", left: "50%", size: "14%" }, description: "Goodie bag polyester dengan permukaan halus yang cocok untuk desain full color dan visual kampanye yang detail." },
  { name: "Drawstring bag custom", image: "/assets/images/products/bags/drawstring-bag-black.webp", price: "Mulai Rp 18.000", minimum: "100 pcs", brandMark: { top: "61%", left: "50%", size: "13%" }, description: "Tas serut praktis untuk olahraga, kegiatan komunitas, paket seminar, dan merchandise acara." },
  { name: "Paper bag premium", image: "/assets/images/products/bags/paper-bag-premium.webp", price: "Mulai Rp 13.500", minimum: "100 pcs", brandMark: { top: "61%", left: "50%", size: "13%" }, description: "Paper bag berlapis dengan tali katun untuk melengkapi kemasan gift set dan produk perusahaan." },
  { name: "Foldable shopping bag", image: "/assets/images/products/bags/foldable-shopping-bag.webp", price: "Mulai Rp 24.000", minimum: "100 pcs", badge: "Reusable", brandMark: { top: "64%", left: "43%", size: "12%" }, description: "Tas belanja reusable yang dapat dilipat ke pouch kecil, mudah dibawa, dan memiliki bidang logo yang luas." },
];

export default function Features3Section() {
  return <CatalogShelf id="bags" title="Tote bag & goodie bag custom" subtitle="Tas promosi untuk event, seminar, retail, dan kebutuhan perusahaan" products={products} />;
}