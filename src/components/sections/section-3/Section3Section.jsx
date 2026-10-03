import { useState } from "react";

export default function Section3Section() {
  const [open, setOpen] = useState(false);
  return (
    <section className="section-space" data-pwc-critical="hero-4">
      <div className="content-shell image-product" data-pwc-critical="hero-3">
        <div className="image-product__visual"><img src="/assets/images/INGGRIS-4.png" alt="Nitori kitchen multifunctional tongs in use" /></div>
        <div className="image-product__info">
          <span className="image-product__eyebrow">USEFUL TOOLS</span>
          <h2>MULTIFUNCTIONAL TONG</h2>
          <div className="image-product__price">Rp 84.000,00</div>
          <div className="image-product__meta">In stock</div>
          <button className="catalog-button" type="button" onClick={() => setOpen(true)}>Lihat detail produk</button>
        </div>
      </div>
      {open && (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setOpen(false)}>
          <article className="product-modal" role="dialog" aria-modal="true" aria-label="MULTIFUNCTIONAL TONG" onMouseDown={(event) => event.stopPropagation()}>
            <button className="modal-close" type="button" onClick={() => setOpen(false)} aria-label="Tutup">×</button>
            <img src="/assets/images/211120001709001.jpg" alt="MULTIFUNCTIONAL TONG" />
            <div className="product-modal__copy"><span className="image-product__eyebrow">KATALOG PRODUK</span><h3>MULTIFUNCTIONAL TONG</h3><p>Penjepit serbaguna yang praktis untuk menyiapkan dan menyajikan makanan. Informasi produk ditampilkan sebagai katalog; pembelian dilakukan melalui toko NITORI.</p><strong>Rp 84.000,00</strong></div>
          </article>
        </div>
      )}
    </section>
  );
}
