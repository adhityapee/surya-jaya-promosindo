import { useState } from "react";

export default function Section3Section() {
  const [open, setOpen] = useState(false);
  return (
    <section className="section-space" data-pwc-critical="hero-4">
      <div className="content-shell image-product" data-pwc-critical="hero-3">
        <div className="image-product__visual"><img src="/assets/images/INGGRIS-4.png" alt="Inspirasi kitchen gift set custom" /></div>
        <div className="image-product__info">
          <span className="image-product__eyebrow">GIFT SET PILIHAN</span>
          <h2>KITCHEN GIFT SET CUSTOM</h2>
          <div className="image-product__price">Mulai Rp 145.000</div>
          <div className="image-product__meta">Minimum 25 set</div>
          <button className="catalog-button" type="button" onClick={() => setOpen(true)}>Lihat detail produk</button>
        </div>
      </div>
      {open && (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setOpen(false)}>
          <article className="product-modal" role="dialog" aria-modal="true" aria-label="Kitchen gift set custom" onMouseDown={(event) => event.stopPropagation()}>
            <button className="modal-close" type="button" onClick={() => setOpen(false)} aria-label="Tutup">×</button>
            <img src="/assets/images/211120001709001.jpg" alt="Kitchen gift set custom" />
            <div className="product-modal__copy"><span className="image-product__eyebrow">KATALOG SOUVENIR</span><h3>KITCHEN GIFT SET CUSTOM</h3><p>Peralatan dapur praktis dalam kemasan custom untuk hampers perusahaan, program loyalitas, atau hadiah acara. Logo dapat dicetak pada produk dan kemasan.</p><strong>Mulai Rp 145.000</strong></div>
          </article>
        </div>
      )}
    </section>
  );
}
