const categories = [
  ["Pulpen & Notebook", "pulpen-notebook.webp", "weekly-best"],
  ["Tumbler & Mug", "tumbler-mug.webp", "drinkware"],
  ["Lanyard & ID Card", "lanyard-id-card.webp", "event-kit"],
  ["Tote Bag & Goodie Bag", "tote-goodie-bag.webp", "bags"],
  ["Gift Set & Hampers", "gift-set-hampers.webp", "corporate-gift"],
  ["Gadget Custom", "gadget-usb.webp", "gadget-custom"],
  ["Apparel Custom", "apparel-custom.webp", "apparel"],
  ["Kalender Custom", "kalender-custom.webp", "weekly-best"],
  ["Gantungan Kunci & Pin", "gantungan-kunci-pin.webp", "event-kit"],
  ["Payung & Travel", "payung-travel.webp", "weekly-best"],
  ["Seminar & Event Kit", "seminar-event-kit.webp", "event-kit"],
  ["Korek Api Custom", "korek-api-custom.webp", "weekly-best"],
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
