import { useEffect, useState } from "react";

const slides = [
  { desktop: "/assets/images/IDN_ECBanner_-_OCT_FURNITURE_1688x700.png", mobile: "/assets/images/7_98a31225-ae21-4398-ab84-6f441b756858_800x1005.png", label: "October Furniture Collection" },
  { desktop: "/assets/images/EC_Survey-_Website_Banner_2000x830.png", mobile: "/assets/images/EC_Survey-_Website_Banner_1351x560.png", label: "Nitori Customer Survey" },
  { desktop: "/assets/images/1_23df848b-8c35-4bc0-89ec-319cdcf88807_1351x560.png", mobile: "/assets/images/1_23df848b-8c35-4bc0-89ec-319cdcf88807_1351x560.png", label: "Nitori Special Selection" },
  { desktop: "/assets/images/Main_Banners_ID_3_2000x830.jpg", mobile: "/assets/images/Main_Banners_ID_mobile_3_800x1005.jpg", label: "Welcome to Nitori Indonesia" },
  { desktop: "/assets/images/IDN_-ECID-Main-Banners-4_1351x560.jpg", mobile: "/assets/images/IDN_-ECID-Main-Banners-4_1351x560.jpg", label: "Comfortable Living" },
  { desktop: "/assets/images/IDN_ECBanner_-_OCT_FURNITURE_1351x560.png", mobile: "/assets/images/7_98a31225-ae21-4398-ab84-6f441b756858_1208x1518.png", label: "Furniture for Every Room" },
  { desktop: "/assets/images/EC_Survey-_Website_Banner_1351x560.png", mobile: "/assets/images/EC_Survey-_Website_Banner_1351x560.png", label: "Share Your Experience" },
  { desktop: "/assets/images/Main_Banners_ID_3_3500x1453.jpg", mobile: "/assets/images/Main_Banners_ID_mobile_3_800x1005.jpg", label: "A Better Everyday Home" },
  { desktop: "/assets/images/IDN_-ECID-Main-Banners-Beddingg.jpg", mobile: "/assets/images/IDN_-ECID-Main-Banners-Beddingg.jpg", label: "Restful Bedroom" },
  { desktop: "/assets/images/IDN_-ECID-Bathroom.jpg", mobile: "/assets/images/IDN_-ECID-Bathroom.jpg", label: "Bathroom Essentials" },
  { desktop: "/assets/images/IDN_-ECID-Main-Banners-Petss.jpg", mobile: "/assets/images/IDN_-ECID-Main-Banners-Petss.jpg", label: "Living with Pets" },
  { desktop: "/assets/images/IDN_-ECID-Main-Banners-Curtain.jpg", mobile: "/assets/images/IDN_-ECID-Main-Banners-Curtain.jpg", label: "Curtain Collection" },
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
              <img src={slide.desktop} alt={slide.label} />
            </picture>
          </button>
        ))}
      </div>
      <button className="hero-arrow prev" type="button" data-pwc-interaction="interaction-23" onClick={() => go(active - 1)} aria-label="Slide sebelumnya">â€¹</button>
      <button className="hero-arrow next" type="button" data-pwc-interaction="interaction-24" onClick={() => go(active + 1)} aria-label="Slide berikutnya">â€º</button>
      <div className="hero-pagination" aria-label="Pilih slide">
        {slides.map((slide, index) => <button className={active === index ? "active" : ""} type="button" key={slide.label} data-pwc-interaction={`interaction-${25 + index}`} onClick={() => activate(index)} aria-label={`Slide ${index + 1}`} />)}
      </div>
    </section>
  );
}


