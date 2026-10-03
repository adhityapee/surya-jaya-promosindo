const categories = [
  ["N-Cool Series", "Categories_ICON-09_208x208.jpg", "n-cool"],
  ["Mattresses", "Categories_ICON-10_208x208.jpg", "mattresses"],
  ["Kitchenware", "Categories_ICON-06_208x208.jpg", "kitchen"],
  ["Useful Tools", "Categories_ICON-08_208x208.jpg", "tools"],
  ["Laundry & Cleaning", "Categories_ICON-05_208x208.jpg", "cleaning"],
  ["Trolleys & Wagons", "Categories_ICON-07_208x208.jpg", "storage"],
  ["Flat Pack Furnitures", "Flat_Pack_467a4d8e-68c7-4cc7-934a-51208d4348b3_208x208.png", "furniture"],
  ["Electronics", "Categories_ICON-02_208x208.jpg", "electronics"],
  ["Display Racks", "Categories_ICON-01_208x208.jpg", "racks"],
  ["Green Home", "Categories_ICON-03_208x208.jpg", "decor"],
  ["Kids & Babies", "Kids_55e076da-52d3-4661-881b-a291d1ecebee_208x208.png", "kids"],
  ["Furkids", "Categories_ICON-04_208x208.jpg", "pets"],
];

export default function Section4Section() {
  return (
    <section className="categories content-shell" id="categories">
      <h2 className="section-heading">Popular Categories</h2>
      <div className="category-grid">
        {categories.map(([label, image, anchor]) => <a className="category-card" href={`#${anchor}`} key={label}><img src={`/assets/images/${image}`} alt={label} /><span>{label}</span></a>)}
      </div>
    </section>
  );
}
