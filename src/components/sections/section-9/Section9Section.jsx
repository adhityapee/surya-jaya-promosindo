import { useState } from "react";

export default function Section9Section() {
  const [playing, setPlaying] = useState(false);
  return (
    <section className="section-space content-shell">
      <button className={`video-poster ${playing ? "is-playing" : ""}`} type="button" onClick={() => setPlaying((value) => !value)} aria-label={playing ? "Jeda inspirasi corporate gift" : "Putar inspirasi corporate gift"}>
        <img src="/assets/images/Dining-23_1351x579.jpg" alt="Inspirasi penataan corporate gift dan tableware custom" />
        <span className="play-button">{playing ? "Ⅱ" : "▶"}</span>
        {playing && <span className="video-caption">Inspirasi produk • diputar</span>}
      </button>
    </section>
  );
}
