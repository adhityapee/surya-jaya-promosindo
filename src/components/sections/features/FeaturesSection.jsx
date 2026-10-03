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
              <small className="product-tax">Sebelum/Excl. PPN: {product.tax || product.price}</small>
              <div className="product-price">{product.price}</div>
              <div className="stock">{product.stock || "In stock"}</div>
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
            <div className="product-modal__copy"><span className="image-product__eyebrow">KATALOG PRODUK</span><h3>{selected.name}</h3><p>{selected.description || "Informasi produk NITORI untuk membantu Anda menemukan pilihan yang tepat. Ketersediaan dapat dikonfirmasi langsung di toko."}</p><strong>{selected.price}</strong><p className="stock">{selected.stock || "In stock"}</p></div>
          </article>
        </div>
      )}
    </section>
  );
}

const products = [
  { name: "FLUFFY PILLOW N-COOL P2402", image: "/assets/images/755087333_220x220.jpg", price: "Rp 199.000,00", tax: "Rp 177.109,29", badge: "Sale" },
  { name: "REFILL FOR STICKY ROLLER 3P DIAG CUT", image: "/assets/images/858066501_220x220.jpg", price: "Rp 44.000,00", tax: "Rp 39.159,84" },
  { name: "EXTENSION BOTTLE BRUSH JAG GY", image: "/assets/images/899641802_220x220.jpg", price: "Rp 32.000,00", tax: "Rp 28.479,89", badge: "Coming soon", stock: "Coming soon" },
  { name: "SPONGE 3P SOFT GY (11 X 6.6 X 3.5CM)", image: "/assets/images/898237802_220x220.jpg", price: "Rp 17.000,00", tax: "Rp 15.129,94", badge: "Sale" },
  { name: "SILICONE SPONGE ORIFICE GY", image: "/assets/images/898238202_220x220.jpg", price: "Rp 52.000,00", tax: "Rp 46.279,81", badge: "Sale" },
  { name: "LARGE COOKING CHOPSTICKS 2P BK & RE", image: "/assets/images/2145000-214004302_300x300.jpg", price: "Rp 12.000,00", tax: "Rp 10.679,11" },
  { name: "HANGER NW-BK 10P", image: "/assets/images/300049902_300x300.jpg", price: "Rp 32.000,00", tax: "Rp 28.479,89" },
];

export default function FeaturesSection() {
  return <CatalogShelf id="weekly-best" title="Weekly Best Selling Items" subtitle="Produk pilihan yang paling banyak dicari minggu ini" products={products} interactive />;
}
