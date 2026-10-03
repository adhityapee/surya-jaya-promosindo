import { useState } from "react";

export default function Section9Section() {
  const [playing, setPlaying] = useState(false);
  return (
    <section className="section-space content-shell">
      <button className={`video-poster ${playing ? "is-playing" : ""}`} type="button" onClick={() => setPlaying((value) => !value)} aria-label={playing ? "Jeda demonstrasi meja Nitori" : "Putar demonstrasi meja Nitori"}>
        <img src="/assets/images/Dining-23_1351x579.jpg" alt="Demonstrasi meja makan extensible Nitori" />
        <span className="play-button">{playing ? "Ⅱ" : "▶"}</span>
        {playing && <span className="video-caption">Product demonstration • playing</span>}
      </button>
    </section>
  );
}
