const categories = [
  ["Tumbler & Mug", "tumbler-mug.webp", "drinkware"],
  ["Pulpen & Notebook", "pulpen-notebook.webp", "weekly-best"],
  ["Lanyard & ID Card", "lanyard-id-card.webp", "event-kit"],
  ["Tote Bag & Goodie Bag", "tote-goodie-bag.webp", "event-kit"],
  ["Gift Set & Hampers", "gift-set-hampers.webp", "corporate-gift"],
  ["Gadget & USB", "gadget-usb.webp", "weekly-best"],
  ["Apparel Custom", "apparel-custom.webp", "apparel"],
  ["Kalender Custom", "kalender-custom.webp", "weekly-best"],
  ["Gantungan Kunci & Pin", "gantungan-kunci-pin.webp", "event-kit"],
  ["Payung & Travel", "payung-travel.webp", "weekly-best"],
  ["Seminar & Event Kit", "seminar-event-kit.webp", "event-kit"],
  ["Produk Eco", "produk-eco.webp", "corporate-gift"],
];

export default function Section4Section() {
  return (
    <section className="categories content-shell" id="categories">
      <h2 className="section-heading">Kategori souvenir populer</h2>
      <div className="category-grid">
        {categories.map(([label, image, anchor]) => <a className="category-card" href={`#${anchor}`} key={label}><img src={`/assets/images/categories/${image}`} alt={label} /><span>{label}</span></a>)}
      </div>
    </section>
  );
}
