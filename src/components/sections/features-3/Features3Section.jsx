import { CatalogShelf } from "../features/FeaturesSection.jsx";

const products = [
  { name: "Executive gift set 3-in-1", image: "/assets/images/400799702_62769bf6-2c0c-447f-9bdd-ae5fb5fe93e5_220x220.jpg", price: "Mulai Rp 185.000", minimum: "25 set" },
  { name: "Welcome kit karyawan", image: "/assets/images/400799802_96a285bb-17b7-4479-9fb7-2e1713b93de4_220x220.jpg", price: "Mulai Rp 149.000", minimum: "25 set" },
  { name: "Hampers klien custom box", image: "/assets/images/400799702_220x220.jpg", price: "Mulai Rp 225.000", minimum: "20 set" },
  { name: "Seminar kit notebook & pena", image: "/assets/images/401155202_220x220.jpg", price: "Mulai Rp 67.000", minimum: "50 set" },
  { name: "Eco gift set perusahaan", image: "/assets/images/401292302_220x220.jpg", price: "Mulai Rp 96.000", minimum: "50 set" },
];

export default function Features3Section() {
  return <CatalogShelf id="corporate-gift" title="Corporate gift & hampers" subtitle="Paket berkesan dengan kemasan yang selaras dengan brand" products={products} />;
}
