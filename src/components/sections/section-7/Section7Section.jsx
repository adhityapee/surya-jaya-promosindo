import { useState } from "react";

const hotspots = [
  { name: "Peralatan makan custom", price: "Mulai Rp 45.000" },
  { name: "Lunch box premium", price: "Mulai Rp 78.000" },
  { name: "Kemasan gift set", price: "Mulai Rp 32.000" },
];

export default function Section7Section() {
  const [selected, setSelected] = useState(0);
  return (
    <section className="section-space content-shell" id="gift-set">
      <div className="editorial-feature">
        <div className="editorial-feature__visual">
          <img src="/assets/images/EC._Aug_Limited_Sale_-_Website_Banner_3_900x374.jpg" alt="Inspirasi kitchen gift set custom" />
          <div className="hotspots">
            {hotspots.map((item, index) => <button className="hotspot" type="button" aria-label={item.name} onClick={() => setSelected(index)} key={item.name} />)}
          </div>
        </div>
        <div className="editorial-feature__copy">
          <h2>Gift set<br />siap custom</h2>
          <p>Pilih produk, warna, teknik cetak, dan kemasan yang sesuai dengan karakter brand serta anggaran Anda.</p>
          <a className="catalog-button" href="#corporate-gift">Lihat koleksi ›</a>
          <div className="product-popover"><strong>{hotspots[selected].name}</strong><br />{hotspots[selected].price}</div>
        </div>
      </div>
    </section>
  );
}
