import { useState } from "react";

export function CatalogShelf({ title, subtitle, products, id, interactive = false }) {
  const [offset, setOffset] = useState(0);
  const [selected, setSelected] = useState(null);
  const maxOffset = Math.max(0, products.length - 5);
  const move = (direction) => setOffset((value) => direction > 0 ? (value >= maxOffset ? 0 : value + 1) : (value <= 0 ? maxOffset : value - 1));
  return (
    <section className="shelf content-shell" id={id}>
      <div className="shelf-header">
        <div><h2>{title}</h2>{subtitle && <p className="shelf-subtitle">{subtitle}</p>}</div>
        <div className="shelf-arrows">
          <button className="shelf-arrow" type="button" {...(interactive ? { "data-pwc-interaction": "interaction-37" } : {})} onClick={() => move(-1)} aria-label="Produk sebelumnya">‹</button>
          <button className="shelf-arrow" type="button" {...(interactive ? { "data-pwc-interaction": "interaction-38" } : {})} onClick={() => move(1)} aria-label="Produk berikutnya">›</button>
        </div>
      </div>
      <div className="product-viewport" {...(interactive ? { "data-pwc-controlled": "featured-products" } : {})}>
        <div className="product-track" style={{ transform: `translateX(-${offset * 20}%)` }}>
          {products.map((product, index) => (
            <article className="product-card" key={`${product.name}-${index}`}>
              <div className="product-image"><img src={product.image} alt={product.name} />{product.badge && <span className="product-badge">{product.badge}</span>}</div>
              <h3 className="product-name">{product.name}</h3>
              <small className="product-tax">Minimum order: {product.minimum || "50 pcs"}</small>
              <div className="product-price">{product.price}</div>
              <div className="stock">{product.stock || "Bisa custom logo"}</div>
              <button className="card-detail" type="button" onClick={() => setSelected(product)}>Lihat detail</button>
            </article>
          ))}
        </div>
      </div>
      {selected && (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setSelected(null)}>
          <article className="product-modal" role="dialog" aria-modal="true" aria-label={selected.name} onMouseDown={(event) => event.stopPropagation()}>
            <button className="modal-close" type="button" onClick={() => setSelected(null)} aria-label="Tutup">×</button>
            <img src={selected.image} alt={selected.name} />
            <div className="product-modal__copy"><span className="image-product__eyebrow">KATALOG SOUVENIR</span><h3>{selected.name}</h3><p>{selected.description || "Produk dapat disesuaikan dengan logo, warna, dan kebutuhan acara Anda. Hubungi tim Surya Jaya Promosindo untuk pilihan bahan serta teknik cetak."}</p><strong>{selected.price}</strong><p className="stock">{selected.stock || "Bisa custom logo"}</p></div>
          </article>
        </div>
      )}
    </section>
  );
}

const products = [
  { name: "Tumbler vacuum stainless 500 ml", image: "/assets/images/755087333_220x220.jpg", price: "Mulai Rp 58.000", minimum: "50 pcs", badge: "Favorit" },
  { name: "Mug keramik full color", image: "/assets/images/858066501_220x220.jpg", price: "Mulai Rp 24.000", minimum: "48 pcs" },
  { name: "Tote bag kanvas custom", image: "/assets/images/899641802_220x220.jpg", price: "Mulai Rp 19.500", minimum: "100 pcs", badge: "Custom" },
  { name: "Lanyard printing dua sisi", image: "/assets/images/898237802_220x220.jpg", price: "Mulai Rp 8.500", minimum: "100 pcs" },
  { name: "Pulpen metal laser grafir", image: "/assets/images/898238202_220x220.jpg", price: "Mulai Rp 16.000", minimum: "100 pcs", badge: "Premium" },
  { name: "Notebook A5 custom", image: "/assets/images/2145000-214004302_300x300.jpg", price: "Mulai Rp 32.000", minimum: "50 pcs" },
  { name: "Payung lipat otomatis", image: "/assets/images/300049902_300x300.jpg", price: "Mulai Rp 72.000", minimum: "50 pcs" },
];

export default function FeaturesSection() {
  return <CatalogShelf id="weekly-best" title="Souvenir paling diminati" subtitle="Pilihan praktis untuk promosi, acara, dan kebutuhan perusahaan" products={products} interactive />;
}
