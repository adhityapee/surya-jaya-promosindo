import { useState } from "react";

export default function Section3Section() {
  const [open, setOpen] = useState(false);
  return (
    <section className="section-space" data-pwc-critical="hero-4">
      <div className="content-shell image-product" data-pwc-critical="hero-3">
        <div className="image-product__visual"><img src="/assets/images/notebook-organizer-6-in-1.webp" alt="Notebook organizer 6-in-1 custom" /></div>
        <div className="image-product__info">
          <span className="image-product__eyebrow">PRODUK MULTIFUNGSI</span>
          <h2>NOTEBOOK ORGANIZER 6-IN-1</h2>
          <div className="image-product__meta">Minimum 100 pcs</div>
          <button className="catalog-button" type="button" onClick={() => setOpen(true)}>Lihat detail produk</button>
        </div>
      </div>
      {open && (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setOpen(false)}>
          <article className="product-modal" role="dialog" aria-modal="true" aria-label="Notebook organizer 6-in-1 custom" onMouseDown={(event) => event.stopPropagation()}>
            <button className="modal-close" type="button" onClick={() => setOpen(false)} aria-label="Tutup">×</button>
            <img src="/assets/images/notebook-organizer-6-in-1.webp" alt="Notebook organizer 6-in-1 custom" />
            <div className="product-modal__copy"><span className="image-product__eyebrow">KATALOG SOUVENIR</span><h3>NOTEBOOK ORGANIZER 6-IN-1</h3><p>Notebook organizer premium dengan enam fungsi: notebook, wireless charger, phone stand, card holder, pen holder, dan document pocket. Logo dapat dicetak pada cover untuk kebutuhan perusahaan, seminar, dan corporate gift.</p><strong>Minimum pemesanan 100 pcs</strong></div>
          </article>
        </div>
      )}
    </section>
  );
}
