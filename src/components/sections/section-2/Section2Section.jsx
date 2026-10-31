import { useEffect, useState } from "react";
import catalog from "../../../data/clientCatalog.json";

export default function Section2Section() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  useEffect(() => {
    if (paused) return undefined;
    const timer = window.setInterval(() => setActive((value) => (value + 1) % catalog.length), 9500);
    return () => window.clearInterval(timer);
  }, [paused]);
  const go = (direction) => setActive((value) => (value + direction + catalog.length) % catalog.length);
  return (
    <section className="hero-carousel pdf-hero" aria-label="Pilihan kategori katalog produk" aria-roledescription="carousel">
      <div className="hero-track" style={{ transform: `translateX(-${active * 100}%)` }}>
        {catalog.map((category, index) => (
          <div className="hero-slide" key={category.id} aria-hidden={active !== index} inert={active !== index ? "" : undefined}>
            <div className="pdf-hero__copy"><small>KATALOG SURYA JAYA PROMOSINDO</small><strong>{category.storyTitle}</strong><p>{category.subtitle}</p><a className="catalog-button" href={`#${category.id}`} tabIndex={active === index ? 0 : -1}>Jelajahi {category.count} pilihan →</a></div>
            <a href={`#${category.id}`} tabIndex={active === index ? 0 : -1} className="pdf-hero__visual"><img className="pdf-hero__visual" src={category.poster} alt={`Katalog ${category.label} custom Surya Jaya Promosindo`} loading={index === 0 ? "eager" : "lazy"} width="1254" height="1254" /></a>
          </div>
        ))}
      </div>
      <button className="hero-arrow prev" type="button" onClick={() => go(-1)} aria-label="Slide sebelumnya">‹</button>
      <button className="hero-arrow next" type="button" onClick={() => go(1)} aria-label="Slide berikutnya">›</button>
      <div className="hero-pagination" aria-label="Pilih kategori">{catalog.map((category, index) => <button className={active === index ? "active" : ""} type="button" key={category.id} onClick={() => setActive(index)} aria-label={`Tampilkan ${category.label}`} aria-current={active === index ? "true" : undefined} />)}</div>
      <button className="pdf-hero-pause" type="button" onClick={() => setPaused((value) => !value)} aria-pressed={paused}>{paused ? "Putar otomatis" : "Jeda"}</button>
    </section>
  );
}
