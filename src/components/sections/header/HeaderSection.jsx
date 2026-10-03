import { useMemo, useState } from "react";
import "./styles.css";

const menus = [
  { label: "FURNITURE", groups: [["SOFAS", "1 SEATER SOFA", "2 SEATER SOFAS", "3 SEATER SOFAS", "SOFA BEDS"], ["BEDROOM", "SINGLE BEDFRAMES", "DOUBLE BEDFRAMES", "QUEEN BEDFRAMES", "DRESSERS & VANITIES"], ["LIVING ROOM", "COFFEE & ACCENT TABLES", "TV FURNITURE", "SIDEBOARD & CABINETS"], ["HOME OFFICE", "OFFICE CHAIRS & ACCESSORIES", "OFFICE DESKS & ACCESSORIES"]] },
  { label: "KITCHEN", groups: [["COOKWARES", "POTS & PANS", "KITCHEN UTENSILS / TOOLS", "KNIVES & CUTTING BOARDS"], ["FOOD STORAGES", "FOOD CONTAINERS & CANISTERS", "WATER BOTTLES & LUNCH BOXES"], ["KITCHEN ORGANIZERS", "STORAGE & ORGANIZATION", "CART & TROLLEY ACCESSORIES"], ["SINKWARES", "DISH RACKS & DRAINER", "KITCHEN CLEANING & CARE"]] },
  { label: "DINING", groups: [["JAPANESE TABLEWARE", "ULTRA LIGHTWEIGHT TABLEWARE", "PLATES & BOWLS"], ["TABLEWARES", "SERVEWARES", "GLASSWARE & TUMBLERS", "MUGS & CUPS"], ["DINING FURNITURE", "DINING CHAIRS & BENCH", "DINING & COUNTER TABLES"], ["TABLE ACCESSORIES", "CUTLERY", "TABLE LINENS & ACCESSORIES"]] },
  { label: "BEDDING", groups: [["N COOL COLLECTIONS", "N COOL BED LINENS", "N COOL PILLOWS & COVERS"], ["BEDDING", "FUNCTIONAL PILLOWS", "BED PILLOWS", "COMFORTERS & QUILTS"], ["BED LINENS", "BLANKETS & THROWS", "MATTRESS PADS & PROTECTORS"], ["FAMILY", "KIDS & BABIES", "PET BEDS"]] },
  { label: "BATH", groups: [["BATH ACCESSORIES", "BATHROOM STORAGE & ORGANIZERS", "BATH ESSENTIALS"], ["BATH FABRICS", "BATHROOM TEXTILES & MATS", "BATH TOWELS"], ["LAUNDRY", "LAUNDRY & STORAGE", "CLEANING & CARE"], ["PERSONAL CARE", "BODY WASH TOOLS", "BATHROOM SLIPPERS"]] },
  { label: "TEXTILES", groups: [["LIVING FABRICS", "CUSHIONS & COVERS", "FLOOR CUSHIONS"], ["RUGS", "RUGS, CARPETS & ACCESSORIES", "FLOOR MATS"], ["CURTAINS", "READY MADE CURTAINS", "LACE CURTAINS"], ["HOME COMFORT", "SLIPPERS", "SEAT PADS"]] },
  { label: "STORAGE", groups: [["LIVING & OFFICE", "STORAGE BOXES", "STORAGE BASKETS"], ["RACKS & SHELVES", "STORAGE SHELVING & RACKS", "BOOKSHELVES"], ["CLOSET & ENTRANCE", "CLOSET ORGANIZERS", "CLOSET HANGERS"], ["UTILITY", "TENSION RODS", "HOOKS & ACCESSORIES"]] },
  { label: "DECOR", groups: [["DÉCOR", "DECORATIVE ACCESSORIES", "ARTIFICIAL PLANTS & FLOWERS"], ["MIRRORS", "WALL MIRRORS", "STANDING MIRRORS"], ["WALL DECORATIONS", "WALL SHELVES", "CLOCKS", "WALL DECOR & FRAMES"], ["FRAGRANCE", "AROMA & CANDLES", "DIFFUSERS"]] },
  { label: "ROOM WEAR", groups: [["MEN", "MEN OUTFITS", "MEN SOCKS", "MEN UNDERWEAR"], ["WOMEN", "WOMEN OUTFITS", "WOMEN SOCKS", "WOMEN UNDERWEAR"], ["ACCESSORIES", "BAGS & ACCESSORIES", "APPEARANCE OUTFIT"], ["N COOL", "N COOL MEN OUTFITS", "N COOL WOMEN OUTFITS"]] },
  { label: "ELECTRONICS", groups: [["SMART HOME", "SMART HOME DEVICES", "HOME APPLIANCES"], ["LIGHTING", "DESK LIGHTS", "FLOOR LIGHTS"], ["PERSONAL", "BEAUTY APPLIANCES", "SEASONAL APPLIANCES"], ["ENTERTAINMENT", "TV ACCESSORIES", "SMART DEVICES"]] },
];

const catalogTerms = [
  "Fluffy Pillow N-Cool P2402",
  "Box Pad N-Cool",
  "Dining Table N-Collection",
  "Hotel Style Pillow",
  "Body Wash Brush",
  "Kitchen Utensils",
  "Bathroom Storage",
];

export default function HeaderSection() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState("");
  const suggestions = useMemo(() => query.trim() ? catalogTerms.filter((term) => term.toLowerCase().includes(query.toLowerCase())).slice(0, 5) : [], [query]);

  const submitSearch = (event) => {
    event.preventDefault();
    document.querySelector("[data-pwc-section='features']")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="catalog-header" data-pwc-critical="header-1">
      <div className="browser-note">Compatible with Google Chrome. Please ensure your browser is updated to the latest version.</div>
      <div className="header-main page-shell">
        <button className="mobile-menu-toggle" type="button" aria-label="Buka menu" aria-expanded={mobileOpen} onClick={() => setMobileOpen((value) => !value)}>
          <span /><span /><span />
        </button>
        <a className="brand" href="/" aria-label="Nitori Indonesia">
          <img src="/assets/images/NITORI_RGB_734x150.png" alt="NITORI" />
        </a>
        <form className="catalog-search" role="search" onSubmit={submitSearch}>
          <input value={query} onChange={(event) => setQuery(event.target.value)} aria-label="Cari katalog" placeholder="What are you looking for?" />
          <button type="submit" aria-label="Cari">
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m15.5 15.5 5 5" /></svg>
          </button>
          {suggestions.length > 0 && (
            <div className="search-suggestions">
              <span className="suggestion-label">Hasil katalog</span>
              {suggestions.map((item) => <button key={item} type="submit">{item}</button>)}
            </div>
          )}
        </form>
        <div className="header-tools">
          <div className="language"><img src="/assets/images/US_FLAG_28x21px-01.jpg" alt="" /> English <span className="caret" /></div>
          <a className="shipping" href="#information"><span className="truck">▱</span><span><strong>Shipping Info.</strong><small>Delivery Method</small></span></a>
          <a className="store-link" href="#stores"><span className="pin">⌖</span><span><strong>Store Location</strong><small>Find a store</small></span></a>
        </div>
      </div>

      <div className={`navigation-wrap ${mobileOpen ? "is-mobile-open" : ""}`}>
        <nav className="site-navigation page-shell" aria-label="Main" data-pwc-critical="navigation-1">
          <ul className="primary-nav">
            {menus.map((menu, index) => {
              const isOpen = openMenu === index;
              return (
                <li key={menu.label} className={isOpen ? "is-open" : ""}>
                  <button
                    type="button"
                    data-pwc-interaction={`interaction-${index + 1}`}
                    aria-expanded={isOpen}
                    onClick={() => setOpenMenu(isOpen ? null : index)}
                  >
                    {menu.label}<span className="chevron">⌄</span>
                  </button>
                  {isOpen && (
                    <div className="mega-menu" data-pwc-controlled={`interaction-${index + 1}`}>
                      <div className="mega-columns">
                        {menu.groups.map((group) => (
                          <div key={group[0]}>
                            <strong>{group[0]}</strong>
                            {group.slice(1).map((item) => <a key={item} href={`#${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>{item}</a>)}
                          </div>
                        ))}
                      </div>
                      <div className="mega-image"><img src={`/assets/images/${index % 2 === 0 ? "Mega_Menu-08_300x300.jpg" : "Mega_Menu_P2-08_300x300.jpg"}`} alt="Koleksi Nitori" /></div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="secondary-nav">
            <a href="#furniture-sale">OUTLET: SUPER DISCOUNTED FURNITURE SALE</a>
            <a className="teal" href="#weekly-best">BEST SELLING</a>
            <a className="red" href="#clearance">WAREHOUSE CLEARANCE</a>
            <a className="red" href="#special">OCT SPECIAL</a>
            <a className="location-inline" href="#stores">● Store Location</a>
          </div>
        </nav>
      </div>
    </header>
  );
}
