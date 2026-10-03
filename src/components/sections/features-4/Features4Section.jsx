import { CatalogShelf } from "../features/FeaturesSection.jsx";

const products = [
  { name: "POLYESTER PILLOW WASH JN HI", image: "/assets/images/755048902_220x220.jpg", price: "Rp 139.000,00" },
  { name: "FEATHER BED PILLOW VEER 2 MID", image: "/assets/images/755039702_220x220.jpg", price: "Rp 119.000,00" },
  { name: "POLYESTER PILLOW WASH JN MID", image: "/assets/images/755048802_220x220.jpg", price: "Rp 69.000,00" },
  { name: "HOTEL STYLE PILLOW N-HOTEL 3 STD", image: "/assets/images/755072120_220x220.jpg", price: "Rp 279.000,00" },
  { name: "HOTEL STYLE PILLOW N-HOTEL 3 SELECT", image: "/assets/images/755072716_220x220.jpg", price: "Rp 429.000,00" },
];

export default function Features4Section() {
  return <CatalogShelf id="bedding" title="Pillow Collection" subtitle="Nyaman untuk istirahat setiap malam" products={products} />;
}
