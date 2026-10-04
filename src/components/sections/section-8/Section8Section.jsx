import { CatalogShelf } from "../features/FeaturesSection.jsx";

const products = [
  {
    name: "Lanyard polyester 20 mm",
    image: "/assets/images/products/lanyard-id/lanyard-polyester-magenta.webp",
    price: "Mulai Rp 9.500",
    minimum: "100 pcs",
    badge: "Favorit",
    brandMark: { top: "68%", left: "48%", size: "12%" },
    description: "Lanyard polyester ekonomis dengan warna solid dan area cetak logo yang jelas untuk kantor, seminar, sekolah, dan komunitas.",
  },
  {
    name: "Lanyard tissue full color",
    image: "/assets/images/products/lanyard-id/lanyard-tissue-full-color.webp",
    price: "Mulai Rp 13.500",
    minimum: "100 pcs",
    badge: "Full Color",
    brandMark: { top: "80%", left: "50%", size: "11%" },
    description: "Bahan tissue yang halus dengan cetak sublimasi full color untuk menampilkan identitas brand dan desain acara secara lebih detail.",
  },
  {
    name: "Lanyard nylon premium",
    image: "/assets/images/products/lanyard-id/lanyard-nylon-navy.webp",
    price: "Mulai Rp 15.000",
    minimum: "100 pcs",
    badge: "Premium",
    brandMark: { top: "82%", left: "50%", size: "11%" },
    description: "Lanyard nylon dengan tampilan mengilap dan konstruksi kuat untuk kebutuhan karyawan, tamu VIP, serta event perusahaan.",
  },
  {
    name: "ID card horizontal + holder",
    image: "/assets/images/products/lanyard-id/id-card-horizontal-holder.webp",
    price: "Mulai Rp 12.000",
    minimum: "100 pcs",
    brandMark: { top: "52%", left: "67%", size: "10%" },
    description: "Paket kartu identitas horizontal dan holder transparan untuk panitia, peserta konferensi, maupun akses karyawan.",
  },
  {
    name: "Lanyard dengan acrylic holder",
    image: "/assets/images/products/lanyard-id/lanyard-acrylic-holder.webp",
    price: "Mulai Rp 19.500",
    minimum: "100 pcs",
    brandMark: { top: "65%", left: "32%", size: "12%" },
    description: "Lanyard lengkap dengan holder acrylic yang melindungi kartu sekaligus menjaga identitas tetap mudah terlihat sepanjang aktivitas.",
  },
  {
    name: "Retractable badge reel",
    image: "/assets/images/products/lanyard-id/retractable-badge-reel.webp",
    price: "Mulai Rp 18.000",
    minimum: "100 pcs",
    badge: "Praktis",
    brandMark: { top: "66%", left: "50%", size: "13%" },
    description: "Badge reel tarik-ulur memudahkan penggunaan kartu akses dan cocok untuk staf rumah sakit, kantor, ritel, maupun pameran.",
  },
  {
    name: "Event credential set",
    image: "/assets/images/products/lanyard-id/event-credential-set.webp",
    price: "Mulai Rp 55.000",
    minimum: "50 set",
    badge: "Event Set",
    brandMark: { top: "74%", left: "50%", size: "8%" },
    description: "Set siap pakai berisi lanyard, kartu identitas, dan holder dalam kemasan presentasi untuk seminar, konferensi, serta acara perusahaan.",
  },
];

export default function Section8Section() {
  return (
    <CatalogShelf
      id="event-kit"
      title="Lanyard & ID card custom"
      subtitle="Identitas profesional untuk kantor, event, seminar, dan komunitas"
      products={products}
    />
  );
}
