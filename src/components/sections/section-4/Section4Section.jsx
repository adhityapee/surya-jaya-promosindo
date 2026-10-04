const categories = [
  ["Pulpen & Notebook", "pulpen-notebook.webp", "weekly-best"],
  ["Tumbler & Mug", "tumbler-mug.webp", "drinkware"],
  ["Lanyard & ID Card", "lanyard-id-card.webp", "event-kit"],
  ["Tote Bag & Goodie Bag", "tote-goodie-bag.webp", "bags"],
  ["Gift Set & Hampers", "gift-set-hampers.webp", "corporate-gift"],
  ["Gadget Custom", "gadget-usb.webp", "gadget-custom"],
  ["Apparel Custom", "apparel-custom.webp", null],
  ["Kalender Custom", "kalender-custom.webp", null],
  ["Gantungan Kunci & Pin", "gantungan-kunci-pin.webp", null],
  ["Payung & Travel", "payung-travel.webp", null],
  ["Seminar & Event Kit", "seminar-event-kit.webp", null],
  ["Korek Api Custom", "korek-api-custom.webp", null],
];

export default function Section4Section() {
  return (
    <section className="categories content-shell" id="categories">
      <h2 className="section-heading">Kategori souvenir populer</h2>
      <div className="category-grid">
        {categories.map(([label, image, anchor]) => {
          const content = <><img src={`/assets/images/categories/${image}`} alt={label} /><span>{label}</span></>;
          return anchor
            ? <a className="category-card" href={`#${anchor}`} key={label}>{content}</a>
            : <div className="category-card category-card--static" key={label}>{content}</div>;
        })}
      </div>
    </section>
  );
}
