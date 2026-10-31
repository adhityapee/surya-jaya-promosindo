import { useEffect, useRef, useState } from "react";
import catalog from "../data/clientCatalog.json";
import "./client-catalog.css";

export const productContact = ({ name }) => "https://wa.me/6285740386268?text=" + encodeURIComponent(`Halo Surya Jaya Promosindo, saya ingin meminta penawaran untuk ${name}. Jumlah: [jumlah pcs]. Desain/logo: [keterangan]. Target selesai: [tanggal]. Mohon informasi pilihan dan proses pemesanannya. Terima kasih.`);

export function CatalogCategories() {
  return <section className="categories content-shell client-categories" id="categories">
    <h2 className="section-heading">Katalog Produk Surya Jaya Promosindo</h2>
    <p className="client-category-intro">Temukan model yang sesuai dengan kebutuhan promosi, acara, dan perusahaan Anda.</p>
    <div className="category-grid">{catalog.map((category) => <a className="category-card" href={`#${category.id}`} key={category.id}>
      <img src={category.image} alt={category.label} width="240" height="240" loading="lazy" decoding="async" />
      <span>{category.label}</span><small>{category.count} pilihan</small>
    </a>)}</div>
  </section>;
}

function ProductDetails({ product, onClose }) {
  const dialog = useRef(null);
  useEffect(() => {
    const element = dialog.current;
    if (!element.open) element.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, []);
  return <dialog ref={dialog} className="client-product-dialog" aria-labelledby="client-product-name" onClose={onClose} onClick={(event) => { if (event.target === dialog.current) onClose(); }}>
    <div className="client-product-details">
      <button className="modal-close" type="button" onClick={onClose} aria-label="Tutup detail souvenir">×</button>
      <img src={product.image} alt={product.name} />
      <div className="client-product-details__copy"><span className="image-product__eyebrow">KATALOG SJP</span><h2 id="client-product-name">{product.name}</h2>
        <p>{product.description}</p><p>Minimum pemesanan: <strong>{product.minimum}</strong></p>
        <p className="client-product-note">Sampaikan jumlah, desain, dan target waktu untuk mendapatkan penawaran.</p>
        <a className="catalog-button" href={productContact(product)} target="_blank" rel="noreferrer">Minta penawaran WhatsApp ↗</a>
      </div>
    </div>
  </dialog>;
}

function CategoryProducts({ category, products, onSelect, searchMode = false }) {
  const track = useRef(null);
  const [group, setGroup] = useState("Semua");
  const groups = [...new Set(products.map((product) => product.group))];
  const visible = group === "Semua" ? products : products.filter((product) => product.group === group);
  const move = (direction) => track.current?.scrollBy({ left: direction * track.current.clientWidth * 0.8, behavior: "smooth" });
  return <section className="client-category-section" id={category.id} aria-labelledby={`${category.id}-title`}>
    <div className="shelf content-shell">
      <div className="shelf-header"><div><h2 id={`${category.id}-title`}>{category.label}</h2><p className="shelf-subtitle">{category.subtitle}</p></div>
        {!searchMode && <div className="shelf-arrows"><button type="button" className="shelf-arrow" onClick={() => move(-1)} aria-label={`Lihat ${category.label} sebelumnya`}>‹</button><button type="button" className="shelf-arrow" onClick={() => move(1)} aria-label={`Lihat ${category.label} berikutnya`}>›</button></div>}
      </div>
      {groups.length > 1 && <div className="client-group-filters" aria-label={`Filter ${category.label}`}>{["Semua", ...groups].map((label) => <button type="button" key={label} aria-pressed={label === group} onClick={() => { setGroup(label); track.current?.scrollTo({ left: 0 }); }}>{label}</button>)}</div>}
      <div className="client-product-track" ref={track} tabIndex={0} aria-label={`Pilihan ${category.label}`}>
        {visible.map((product) => <article className="product-card" key={product.id}>
          <button type="button" className="product-image client-product-image" aria-label={`Lihat ${product.name}`} onClick={() => onSelect(product)}><img src={product.image} alt={product.name} loading="lazy" decoding="async" width="400" height="400" /></button>
          <h3 className="product-name">{product.name}</h3><small className="product-tax">Minimum order: {product.minimum}</small><div className="stock">Bisa custom desain</div><button className="card-detail" type="button" onClick={() => onSelect(product)}>Lihat detail</button>
        </article>)}
      </div>
    </div>
    {!searchMode && <div className="client-story content-shell">
      <a className="client-story__poster" href={productContact({ name: category.label })} target="_blank" rel="noreferrer" aria-label={`Konsultasi ${category.label}`}><img src={category.poster} alt={`Katalog produk ${category.label} custom Surya Jaya Promosindo`} loading="lazy" decoding="async" width="1254" height="1254" /></a>
      <div className="client-story__copy"><span className="image-product__eyebrow">{category.label.toUpperCase()}</span><h3>{category.storyTitle}</h3><p>{category.storyDescription}</p><a className="catalog-button" href={productContact({ name: category.label })} target="_blank" rel="noreferrer">Konsultasikan pesanan ↗</a></div>
    </div>}
  </section>;
}

export default function ClientCatalog({ query = "" }) {
  const [selected, setSelected] = useState(null);
  const needle = query.toLowerCase();
  const matches = catalog.map((category) => ({ category, products: category.products.filter((product) => category.label.toLowerCase() === needle || `${product.name} ${product.description} ${product.group}`.toLowerCase().includes(needle)) })).filter(({ products }) => products.length > 0);
  return <>
    {query && <div className="client-search-summary content-shell" role="status">{matches.reduce((total, result) => total + result.products.length, 0)} pilihan ditemukan dalam katalog produk. <a href="/products#categories">Lihat katalog produk lengkap</a></div>}
    {matches.map(({ category, products }) => <CategoryProducts key={category.id} category={category} products={products} onSelect={setSelected} searchMode={Boolean(query)} />)}
    {matches.length === 0 && <div className="client-search-empty content-shell"><h2>Belum ada hasil dalam katalog produk</h2><p>Coba nama seperti pulpen, tumbler, payung, atau Flazz.</p><a className="catalog-button" href="/products#categories">Jelajahi katalog produk</a></div>}
    {selected && <ProductDetails product={selected} onClose={() => setSelected(null)} />}
  </>;
}
