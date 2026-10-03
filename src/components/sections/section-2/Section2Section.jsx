import { useEffect, useState } from "react";

const slides = [
  { desktop: "/assets/images/IDN_ECBanner_-_OCT_FURNITURE_1688x700.png", mobile: "/assets/images/7_98a31225-ae21-4398-ab84-6f441b756858_800x1005.png", label: "Souvenir custom untuk setiap kebutuhan", note: "Dari ide hingga siap dibagikan" },
  { desktop: "/assets/images/EC_Survey-_Website_Banner_2000x830.png", mobile: "/assets/images/EC_Survey-_Website_Banner_1351x560.png", label: "Corporate gift yang berkesan", note: "Kemasan dan produk selaras dengan brand" },
  { desktop: "/assets/images/1_23df848b-8c35-4bc0-89ec-319cdcf88807_1351x560.png", mobile: "/assets/images/1_23df848b-8c35-4bc0-89ec-319cdcf88807_1351x560.png", label: "Merchandise acara", note: "Praktis untuk seminar, pameran, dan komunitas" },
  { desktop: "/assets/images/Main_Banners_ID_3_2000x830.jpg", mobile: "/assets/images/Main_Banners_ID_mobile_3_800x1005.jpg", label: "Selamat datang di Surya Jaya Promosindo", note: "Partner produksi souvenir custom Anda" },
  { desktop: "/assets/images/IDN_-ECID-Main-Banners-4_1351x560.jpg", mobile: "/assets/images/IDN_-ECID-Main-Banners-4_1351x560.jpg", label: "Kualitas cetak yang konsisten", note: "Pilihan teknik cetak untuk berbagai material" },
  { desktop: "/assets/images/IDN_ECBanner_-_OCT_FURNITURE_1351x560.png", mobile: "/assets/images/7_98a31225-ae21-4398-ab84-6f441b756858_1208x1518.png", label: "Satu katalog, banyak pilihan", note: "Tumbler, apparel, tas, alat tulis, dan lainnya" },
  { desktop: "/assets/images/EC_Survey-_Website_Banner_1351x560.png", mobile: "/assets/images/EC_Survey-_Website_Banner_1351x560.png", label: "Konsultasi sebelum produksi", note: "Sesuaikan jumlah, bahan, warna, dan anggaran" },
  { desktop: "/assets/images/Main_Banners_ID_3_3500x1453.jpg", mobile: "/assets/images/Main_Banners_ID_mobile_3_800x1005.jpg", label: "Souvenir yang memperkuat brand", note: "Dirancang untuk dipakai dan selalu diingat" },
  { desktop: "/assets/images/IDN_-ECID-Main-Banners-Beddingg.jpg", mobile: "/assets/images/IDN_-ECID-Main-Banners-Beddingg.jpg", label: "Apparel custom", note: "Untuk tim, komunitas, dan program perusahaan" },
  { desktop: "/assets/images/IDN_-ECID-Bathroom.jpg", mobile: "/assets/images/IDN_-ECID-Bathroom.jpg", label: "Seminar & event kit", note: "Paket rapi untuk peserta acara" },
  { desktop: "/assets/images/IDN_-ECID-Main-Banners-Petss.jpg", mobile: "/assets/images/IDN_-ECID-Main-Banners-Petss.jpg", label: "Hampers perusahaan", note: "Hadiah yang terasa personal dan profesional" },
  { desktop: "/assets/images/IDN_-ECID-Main-Banners-Curtain.jpg", mobile: "/assets/images/IDN_-ECID-Main-Banners-Curtain.jpg", label: "Kemasan custom", note: "Sentuhan akhir yang menyatukan keseluruhan paket" },
];

export default function Section2Section() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setActive((value) => (value + 1) % slides.length), 6500);
    return () => window.clearInterval(timer);
  }, []);
  const go = (next) => setActive((next + slides.length) % slides.length);
  const activate = (index) => setActive((value) => value === index ? (index + 1) % slides.length : index);

  return (
    <section className="hero-carousel" data-pwc-critical="hero-1">
      <div className="hero-track" data-pwc-critical="hero-2" data-pwc-controlled="hero-carousel" style={{ transform: `translateX(-${active * 100}%)` }}>
        {slides.map((slide, index) => (
          <button className="hero-slide" type="button" key={`${slide.label}-${index}`} data-pwc-interaction={`interaction-${11 + index}`} onClick={() => activate(index)} aria-label={slide.label}>
            <picture>
              <source media="(max-width: 760px)" srcSet={slide.mobile} />
              <img src={slide.desktop} alt="" />
            </picture>
            <span className="hero-copy"><img src="/assets/images/surya-jaya-promosindo-logo.webp" alt="" /><small>Katalog Surya Jaya Promosindo</small><strong>{slide.label}</strong><em>{slide.note}</em></span>
          </button>
        ))}
      </div>
      <button className="hero-arrow prev" type="button" data-pwc-interaction="interaction-23" onClick={() => go(active - 1)} aria-label="Slide sebelumnya">‹</button>
      <button className="hero-arrow next" type="button" data-pwc-interaction="interaction-24" onClick={() => go(active + 1)} aria-label="Slide berikutnya">›</button>
      <div className="hero-pagination" aria-label="Pilih slide">
        {slides.map((slide, index) => <button className={active === index ? "active" : ""} type="button" key={slide.label} data-pwc-interaction={`interaction-${25 + index}`} onClick={() => activate(index)} aria-label={`Slide ${index + 1}`} />)}
      </div>
    </section>
  );
}
