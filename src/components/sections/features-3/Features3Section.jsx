import { CatalogShelf } from "../features/FeaturesSection.jsx";

const products = [
  { name: "DT N-COLLECTION T-01H 200 NA", image: "/assets/images/400799702_62769bf6-2c0c-447f-9bdd-ae5fb5fe93e5_220x220.jpg", price: "Rp 10.799.000,00" },
  { name: "DT N-COLLECTION T-01H 200 MBR", image: "/assets/images/400799802_96a285bb-17b7-4479-9fb7-2e1713b93de4_220x220.jpg", price: "Rp 10.799.000,00" },
  { name: "DT N-COLLECTION T-01 200 NA", image: "/assets/images/400799702_220x220.jpg", price: "Rp 10.799.000,00" },
  { name: "DT N-CONNECT135 LBR", image: "/assets/images/401155202_220x220.jpg", price: "Rp 2.999.000,00" },
  { name: "DT 4 LEG SI01 S 135 MBR", image: "/assets/images/401292302_220x220.jpg", price: "Rp 1.199.000,00" },
];

export default function Features3Section() {
  return <CatalogShelf id="dining" title="Dining Furniture" subtitle="Meja makan untuk momen bersama" products={products} />;
}
