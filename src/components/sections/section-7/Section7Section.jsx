import { useState } from "react";

const hotspots = [
  { name: "Kitchen Cleaning Tool", price: "Rp 39.000,00" },
  { name: "Multifunctional Kitchen Organizer", price: "Rp 129.000,00" },
  { name: "Compact Food Preparation Tool", price: "Rp 59.000,00" },
];

export default function Section7Section() {
  const [selected, setSelected] = useState(0);
  return (
    <section className="section-space content-shell" id="kitchen">
      <div className="editorial-feature">
        <div className="editorial-feature__visual">
          <img src="/assets/images/EC._Aug_Limited_Sale_-_Website_Banner_3_900x374.jpg" alt="Hassle-Free Cooking collection" />
          <div className="hotspots">
            {hotspots.map((item, index) => <button className="hotspot" type="button" aria-label={item.name} onClick={() => setSelected(index)} key={item.name} />)}
          </div>
        </div>
        <div className="editorial-feature__copy">
          <h2>Hassle-Free<br />Cooking</h2>
          <p>All the little tools you need in preparing your home meals! Cleaner, Easier and More Efficient!</p>
          <a className="catalog-button" href="#weekly-best">Lihat koleksi ›</a>
          <div className="product-popover"><strong>{hotspots[selected].name}</strong><br />{hotspots[selected].price}</div>
        </div>
      </div>
    </section>
  );
}
