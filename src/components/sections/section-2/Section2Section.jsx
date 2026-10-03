import { useEffect, useState } from "react";

const slides = [
  { desktop: "/assets/images/hero/hero-pen-office.webp", mobile: "/assets/images/hero/hero-pen-office.webp", label: "Pulpen custom untuk setiap ide", note: "Detail kecil yang selalu hadir di meja kerja" },
  { desktop: "/assets/images/hero/hero-tumbler-office.webp", mobile: "/assets/images/hero/hero-tumbler-office.webp", label: "Tumbler untuk ritme kerja aktif", note: "Souvenir fungsional yang menemani aktivitas harian" },
  { desktop: "/assets/images/hero/hero-tote-office.webp", mobile: "/assets/images/hero/hero-tote-office.webp", label: "Tote bag yang membawa identitas brand", note: "Praktis, reusable, dan mudah disesuaikan" },
  { desktop: "/assets/images/hero/hero-fan-office.webp", mobile: "/assets/images/hero/hero-fan-office.webp", label: "Kipas portable untuk aktivitas kantor", note: "Souvenir praktis dengan branding yang selalu terlihat" },
  { desktop: "/assets/images/hero/hero-corporate-gift-office.webp", mobile: "/assets/images/hero/hero-corporate-gift-office.webp", label: "Corporate gift yang siap berkesan", note: "Produk dan kemasan dalam satu identitas visual" },
  { desktop: "/assets/images/hero/hero-keychain-office.webp", mobile: "/assets/images/hero/hero-keychain-office.webp", label: "Gantungan kunci untuk identitas brand", note: "Aksen kecil yang ikut ke mana pun tas dibawa" },
  { desktop: "/assets/images/hero/hero-notebook-office.webp", mobile: "/assets/images/hero/hero-notebook-office.webp", label: "Notebook untuk ide yang terus bergerak", note: "Teman rapat dengan detail custom yang profesional" },
  { desktop: "/assets/images/hero/hero-calendar-office.webp", mobile: "/assets/images/hero/hero-calendar-office.webp", label: "Kalender custom untuk ruang kerja", note: "Kalender meja dan dinding yang menjaga brand tetap terlihat" },
  { desktop: "/assets/images/hero/hero-mug-meeting-office.webp", mobile: "/assets/images/hero/hero-mug-meeting-office.webp", label: "Mug custom untuk setiap pertemuan", note: "Brand hadir dalam percakapan dan kolaborasi tim" },
  { desktop: "/assets/images/hero/hero-lanyard-team-office.webp", mobile: "/assets/images/hero/hero-lanyard-team-office.webp", label: "Lanyard dan ID card profesional", note: "Identitas tim yang konsisten, rapi, dan mudah dikenali" },
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
