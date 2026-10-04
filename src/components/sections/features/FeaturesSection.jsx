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
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                {product.badge && <span className="product-badge">{product.badge}</span>}
              </div>
              <h3 className="product-name">{product.name}</h3>
              <small className="product-tax">Minimum order: {product.minimum || "50 pcs"}</small>
              {product.price && <div className="product-price">{product.price}</div>}
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
            <div className="product-modal__visual">
              <img src={selected.image} alt={selected.name} />
            </div>
            <div className="product-modal__copy"><span className="image-product__eyebrow">KATALOG SOUVENIR</span><h3>{selected.name}</h3><p>{selected.description || "Produk dapat disesuaikan dengan logo, warna, dan kebutuhan acara Anda. Hubungi tim Surya Jaya Promosindo untuk pilihan bahan serta teknik cetak."}</p>{selected.price && <strong>{selected.price}</strong>}<p className="stock">{selected.stock || "Bisa custom logo"}</p></div>
          </article>
        </div>
      )}
    </section>
  );
}

const products = [
  { name: "Pulpen metal executive", image: "/assets/images/products/stationery/pulpen-metal-executive.webp", price: "Mulai Rp 16.000", minimum: "100 pcs", badge: "Premium", description: "Pulpen metal dengan finishing profesional yang dapat dipersonalisasi menggunakan laser grafir untuk kebutuhan perusahaan dan hadiah eksklusif." },
  { name: "Pulpen plastik full color", image: "/assets/images/products/stationery/pulpen-plastik-promosi.webp", price: "Mulai Rp 5.500", minimum: "200 pcs", badge: "Hemat", description: "Pulpen promosi ringan dengan pilihan warna cerah dan area cetak luas untuk logo, kampanye, atau kebutuhan acara." },
  { name: "Pulpen stylus 2-in-1", image: "/assets/images/products/stationery/pulpen-stylus-2-in-1.webp", price: "Mulai Rp 13.500", minimum: "100 pcs", badge: "Multifungsi", description: "Pulpen metal dua fungsi dengan ujung stylus untuk layar sentuh, cocok sebagai merchandise kerja yang praktis." },
  { name: "Notebook A5 hardcover custom", image: "/assets/images/products/stationery/notebook-a5-hardcover.webp", price: "Mulai Rp 32.000", minimum: "50 pcs", badge: "Favorit", description: "Notebook hardcover A5 dengan elastic closure dan ribbon bookmark yang dapat dicetak atau di-emboss sesuai identitas brand." },
  { name: "Notebook spiral full color", image: "/assets/images/products/stationery/notebook-spiral-custom.webp", price: "Mulai Rp 22.000", minimum: "100 pcs", description: "Notebook spiral dengan cover full color untuk seminar, pelatihan, sekolah, dan berbagai program promosi." },
  { name: "Notebook organizer 6-in-1", image: "/assets/images/products/stationery/notebook-organizer-6-in-1.webp", price: "", minimum: "100 pcs", badge: "6-in-1", description: "Organizer multifungsi dengan notebook, wireless charger, phone stand, card holder, pen holder, dan document pocket." },
  { name: "Gift set notebook & pulpen", image: "/assets/images/products/stationery/gift-set-notebook-pen.webp", price: "Mulai Rp 65.000", minimum: "50 set", badge: "Gift Set", description: "Set notebook hardcover dan pulpen metal dalam box presentasi untuk onboarding, apresiasi, atau corporate gift." },
];

export default function FeaturesSection() {
  return <CatalogShelf id="weekly-best" title="Pulpen & notebook custom" subtitle="Alat tulis custom untuk seminar, onboarding, promosi, dan kebutuhan perusahaan" products={products} interactive />;
}
