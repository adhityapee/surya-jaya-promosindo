import { CatalogShelf } from "../features/FeaturesSection.jsx";

const products = [
  { name: "Executive gift set 3-in-1", image: "/assets/images/products/hampers/executive-gift-set.webp", price: "Mulai Rp 185.000", minimum: "25 set", badge: "Premium", brandMark: { top: "55%", left: "50%", size: "10%" }, description: "Set botol vakum, notebook, dan pulpen dalam hard box hitam untuk klien, pimpinan, dan penghargaan perusahaan." },
  { name: "Employee welcome kit", image: "/assets/images/products/hampers/employee-welcome-kit.webp", price: "Mulai Rp 155.000", minimum: "25 set", badge: "Onboarding", brandMark: { top: "60%", left: "32%", size: "10%" }, description: "Paket notebook, tumbler, lanyard, dan pulpen untuk menyambut anggota tim baru dengan identitas brand yang konsisten." },
  { name: "Client appreciation hamper", image: "/assets/images/products/hampers/client-appreciation-hamper.webp", price: "Mulai Rp 225.000", minimum: "20 set", brandMark: { top: "69%", left: "50%", size: "10%" }, description: "Hampers berisi mug, kopi, dan kukis dalam hard box untuk apresiasi klien atau relasi bisnis." },
  { name: "Eco corporate gift set", image: "/assets/images/products/hampers/eco-corporate-set.webp", price: "Mulai Rp 135.000", minimum: "25 set", badge: "Eco", brandMark: { top: "53%", left: "28%", size: "10%" }, description: "Set bernuansa natural dengan notebook bambu, pulpen, pouch, dan botol stainless untuk program ramah lingkungan." },
  { name: "Premium tea hamper", image: "/assets/images/products/hampers/premium-tea-hamper.webp", price: "Mulai Rp 245.000", minimum: "20 set", badge: "Seasonal", brandMark: { top: "67%", left: "50%", size: "9%" }, description: "Hampers teh, infuser, madu, dan camilan dalam box premium untuk perayaan perusahaan serta momen spesial." },
  { name: "Coffee desk gift set", image: "/assets/images/products/hampers/coffee-desk-set.webp", price: "Mulai Rp 198.000", minimum: "20 set", brandMark: { top: "50%", left: "31%", size: "10%" }, description: "Paket mug, French press, kopi, dan coaster yang cocok untuk meja kerja atau hadiah bagi pecinta kopi." },
  { name: "Custom hard box hamper", image: "/assets/images/products/hampers/custom-hard-box.webp", price: "Mulai Rp 48.000", minimum: "50 pcs", badge: "Custom Box", brandMark: { top: "53%", left: "43%", size: "10%" }, description: "Hard box magnet dengan sleeve custom untuk menyatukan berbagai produk pilihan dalam presentasi yang rapi." },
];

export default function Features4Section() {
  return <CatalogShelf id="corporate-gift" title="Gift set & hampers custom" subtitle="Paket apresiasi yang siap disesuaikan dengan momen dan identitas perusahaan" products={products} />;
}