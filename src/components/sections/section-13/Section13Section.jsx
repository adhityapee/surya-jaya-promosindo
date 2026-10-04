import { useState } from "react";

const testimonials = [
  { name: "Andi", city: "Jakarta", product: "Kipas Mini Portable", quote: "Kipasnya kuat, cetakannya tajam, dan pelayanannya cepat." },
  { name: "Nanda", city: "Bandung", product: "Totebag Custom", quote: "Tote bag tebal, sablon rapi, dan disukai peserta acara." },
  { name: "Dina", city: "Jakarta", product: "Tumbler Niagara", quote: "Tumbler premium, cetakan tajam, dan proses pesan mudah." },
  { name: "Fitri", city: "Karawang", product: "Kartu Flazz Custom", quote: "Desain kartu sesuai permintaan dan produksinya cepat." },
  { name: "Lestari", city: "Tangerang", product: "Pulpen Metal Custom", quote: "Pulpen metal elegan dengan hasil di atas ekspektasi." },
  { name: "Rina", city: "Depok", product: "Buku Agenda A5", quote: "Cover agenda elegan, kertas tebal, dan selesai tepat waktu." },
];

export default function Section13Section() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];
  return (
    <section className="testimonials content-shell" id="testimonials">
      <div className="testimonials__header">
        <h2>Dipercaya untuk berbagai kebutuhan promosi</h2>
        <p>Pengalaman pelanggan setelah memesan produk custom dari Surya Jaya Promosindo.</p>
      </div>
      <div className="testimonials__body">
        <article className="testimonial-feature" aria-live="polite">
          <img src="/assets/images/surya-jaya-promosindo-logo.webp" alt="" />
          <div className="testimonial-stars" aria-label="5 dari 5 bintang">★★★★★</div>
          <blockquote>“{current.quote}”</blockquote>
          <footer><strong>{current.name}</strong><span>{current.city} | {current.product}</span></footer>
        </article>
        <div className="testimonial-tabs" role="tablist" aria-label="Pilih testimoni pelanggan">
          {testimonials.map((item, index) => (
            <button key={`${item.name}-${item.product}`} className={index === active ? "is-active" : ""} type="button" role="tab" aria-selected={index === active} onClick={() => setActive(index)}>
              <strong>{item.name}</strong><span>{item.city}</span><small>{item.product}</small>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}