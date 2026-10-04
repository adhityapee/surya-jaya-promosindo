import { CatalogShelf } from "../features/FeaturesSection.jsx";

const products = [
  {
    name: "Vacuum bottle stainless 500 ml",
    image: "/assets/images/products/drinkware/vacuum-bottle-matte-black.webp",
    price: "Mulai Rp 78.000",
    minimum: "50 pcs",
    badge: "Premium",
    brandMark: { top: "55%", left: "50%", size: "13%" },
    description: "Botol vakum stainless dengan lapisan matte dan tutup metal. Cocok untuk corporate gift, onboarding kit, dan kebutuhan eksekutif.",
  },
  {
    name: "Tumbler handle & straw 600 ml",
    image: "/assets/images/products/drinkware/handled-tumbler-straw.webp",
    price: "Mulai Rp 69.000",
    minimum: "50 pcs",
    badge: "Favorit",
    brandMark: { top: "54%", left: "47%", size: "14%" },
    description: "Tumbler insulated dengan handle dan sedotan reusable untuk aktivitas kerja, perjalanan, dan event perusahaan.",
  },
  {
    name: "Botol sport Tritan 750 ml",
    image: "/assets/images/products/drinkware/sport-bottle-smoke.webp",
    price: "Mulai Rp 42.000",
    minimum: "100 pcs",
    brandMark: { top: "58%", left: "48%", size: "12%" },
    description: "Botol olahraga berbahan Tritan dengan flip lock dan carry loop. Ringan, praktis, dan memiliki area cetak logo yang luas.",
  },
  {
    name: "Mug keramik full color",
    image: "/assets/images/products/drinkware/mug-ceramic-white.webp",
    price: "Mulai Rp 28.000",
    minimum: "100 pcs",
    badge: "Best Seller",
    brandMark: { top: "57%", left: "43%", size: "16%" },
    description: "Mug keramik putih klasik untuk sublimasi full color, merchandise kantor, hampers, dan kebutuhan promosi.",
  },
  {
    name: "Mug enamel klasik",
    image: "/assets/images/products/drinkware/mug-enamel-navy.webp",
    price: "Mulai Rp 35.000",
    minimum: "100 pcs",
    brandMark: { top: "55%", left: "42%", size: "15%" },
    description: "Mug enamel bergaya klasik dengan material ringan dan tahan lama untuk komunitas, acara outdoor, dan gift set.",
  },
  {
    name: "Travel mug stainless 450 ml",
    image: "/assets/images/products/drinkware/travel-mug-sage.webp",
    price: "Mulai Rp 56.000",
    minimum: "50 pcs",
    badge: "Praktis",
    brandMark: { top: "58%", left: "45%", size: "14%" },
    description: "Travel mug stainless dengan handle dan sliding lid untuk menjaga minuman tetap nyaman dibawa di kantor maupun perjalanan.",
  },
  {
    name: "Gift set tumbler & mug",
    image: "/assets/images/products/drinkware/gift-set-tumbler-mug.webp",
    price: "Mulai Rp 145.000",
    minimum: "25 set",
    badge: "Gift Set",
    brandMark: { top: "24%", left: "51%", size: "12%" },
    description: "Paket botol dan mug stainless dalam hard box premium untuk apresiasi karyawan, klien, dan hadiah perusahaan.",
  },
];

export default function Features2Section() {
  return (
    <CatalogShelf
      id="drinkware"
      title="Tumbler & mug custom"
      subtitle="Drinkware custom untuk kantor, event, perjalanan, dan hadiah perusahaan"
      products={products}
    />
  );
}