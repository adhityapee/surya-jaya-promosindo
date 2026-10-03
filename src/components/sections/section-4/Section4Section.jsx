const categories = [
  ["Tumbler & Botol", "Categories_ICON-09_208x208.jpg", "drinkware"],
  ["Mug Custom", "Categories_ICON-10_208x208.jpg", "mug"],
  ["Seminar Kit", "Categories_ICON-06_208x208.jpg", "event-kit"],
  ["Pulpen & Notebook", "Categories_ICON-08_208x208.jpg", "stationery"],
  ["Tote Bag", "Categories_ICON-05_208x208.jpg", "bags"],
  ["Lanyard & ID Card", "Categories_ICON-07_208x208.jpg", "lanyard"],
  ["Corporate Gift", "Flat_Pack_467a4d8e-68c7-4cc7-934a-51208d4348b3_208x208.png", "corporate-gift"],
  ["Gadget & USB", "Categories_ICON-02_208x208.jpg", "gadget"],
  ["Display Promosi", "Categories_ICON-01_208x208.jpg", "display"],
  ["Produk Eco", "Categories_ICON-03_208x208.jpg", "eco"],
  ["Apparel Custom", "Kids_55e076da-52d3-4661-881b-a291d1ecebee_208x208.png", "apparel"],
  ["Hampers", "Categories_ICON-04_208x208.jpg", "hampers"],
];

export default function Section4Section() {
  return (
    <section className="categories content-shell" id="categories">
      <h2 className="section-heading">Kategori souvenir populer</h2>
      <div className="category-grid">
        {categories.map(([label, image, anchor]) => <a className="category-card" href={`#${anchor}`} key={label}><img src={`/assets/images/${image}`} alt={label} /><span>{label}</span></a>)}
      </div>
    </section>
  );
}
