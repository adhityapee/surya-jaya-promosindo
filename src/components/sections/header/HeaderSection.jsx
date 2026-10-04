import { useEffect, useMemo, useRef, useState } from "react";
import "./styles.css";

const menus = [
  { label: "TUMBLER & MUG", groups: [["TUMBLER", "TUMBLER STAINLESS", "TUMBLER PLASTIK", "BOTOL MINUM"], ["MUG", "MUG KERAMIK", "MUG ENAMEL", "MUG STAINLESS"], ["TEKNIK CETAK", "UV PRINT", "SUBLIMASI", "LASER GRAVIR"], ["KEBUTUHAN", "SOUVENIR KANTOR", "MERCHANDISE EVENT", "HAMPERS"]] },
  { label: "APPAREL", groups: [["PAKAIAN", "KAOS CUSTOM", "POLO SHIRT", "KEMEJA KERJA"], ["OUTER", "JAKET", "HOODIE", "ROMPI"], ["HEADWEAR", "TOPI BORDIR", "TOPI SABLON", "BUCKET HAT"], ["FINISHING", "SABLON", "BORDIR KOMPUTER", "DIRECT TO FILM"]] },
  { label: "TAS", groups: [["TOTE BAG", "TOTE BAG KANVAS", "GOODIE BAG", "SPUNBOND"], ["TAS KERJA", "BACKPACK", "LAPTOP BAG", "SELEMPANG"], ["POUCH", "POUCH KANVAS", "POUCH TRAVEL", "DOMPET KARTU"], ["CUSTOM", "LOGO SATU WARNA", "FULL COLOR", "CUSTOM PACKAGING"]] },
  { label: "ALAT TULIS", groups: [["PENA", "PULPEN PROMOSI", "PENA METAL", "PENA ECO"], ["BUKU", "NOTEBOOK", "AGENDA", "MEMO PAD"], ["MEJA KERJA", "MOUSE PAD", "DESK CALENDAR", "CARD HOLDER"], ["PAKET", "SEMINAR KIT", "ONBOARDING KIT", "OFFICE SET"]] },
  { label: "AKSESORIS", groups: [["GANTUNGAN KUNCI", "AKRILIK", "METAL", "KARET PVC"], ["PIN & BADGE", "PIN PENITI", "PIN MAGNET", "NAME TAG"], ["LANYARD", "TISSUE LANYARD", "POLYESTER LANYARD", "ID CARD"], ["TEKNOLOGI", "FLASHDISK", "PHONE STAND", "KABEL DATA"]] },
  { label: "HAMPERS", groups: [["CORPORATE GIFT", "WELCOME KIT", "CLIENT GIFT", "EMPLOYEE GIFT"], ["SEASONAL", "LEBARAN", "NATAL & TAHUN BARU", "ANNIVERSARY"], ["FOODWARE", "LUNCH BOX", "CUTLERY SET", "THERMOS"], ["PACKAGING", "HARD BOX", "SLEEVE BOX", "KARTU UCAPAN"]] },
  { label: "EVENT", groups: [["SEMINAR", "SEMINAR KIT", "ID CARD", "FOLDER DOKUMEN"], ["PAMERAN", "SHOPPING BAG", "BROSUR", "DISPLAY PROMOSI"], ["KOMUNITAS", "KAOS KOMUNITAS", "STIKER", "PIN CUSTOM"], ["AWARD", "PLAKAT AKRILIK", "MEDALI", "TROFI"]] },
  { label: "RUMAH & GAYA", groups: [["PAYUNG", "PAYUNG LIPAT", "PAYUNG GOLF", "PAYUNG OTOMATIS"], ["HANDUK", "HANDUK BORDIR", "HANDUK OLAHRAGA", "HANDUK HOTEL"], ["RUMAH", "JAM DINDING", "BANTAL CUSTOM", "APRON"], ["TRAVEL", "TRAVEL POUCH", "NECK PILLOW", "LUGGAGE TAG"]] },
  { label: "KEMASAN", groups: [["PAPER BAG", "KRAFT PAPER BAG", "ART CARTON BAG", "LAMINASI"], ["BOX", "HARD BOX", "CORRUGATED BOX", "FOLDING BOX"], ["POUCH", "ZIPPER POUCH", "DRAWSTRING BAG", "ECO POUCH"], ["PELENGKAP", "STIKER LABEL", "THANK YOU CARD", "TISSUE PAPER"]] },
  { label: "CETAK PROMOSI", groups: [["MEDIA CETAK", "BROSUR", "FLYER", "KATALOG"], ["DISPLAY", "X-BANNER", "ROLL BANNER", "POSTER"], ["IDENTITAS", "KARTU NAMA", "LETTERHEAD", "AMPLOP"], ["STIKER", "VINYL", "TRANSPARAN", "DIE CUT"]] },
];

const catalogTerms = [
  "Tumbler stainless custom",
  "Mug keramik full color",
  "Tote bag kanvas",
  "Kaos sablon custom",
  "Lanyard dan ID card",
  "Seminar kit",
  "Hampers perusahaan",
];

export default function HeaderSection() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  const [query, setQuery] = useState("");
  const headerRef = useRef(null);
  const scrollSentinelRef = useRef(null);
  const closeTimerRef = useRef(null);
  const hoverOpenedMenuRef = useRef(null);
  const suggestions = useMemo(() => query.trim() ? catalogTerms.filter((term) => term.toLowerCase().includes(query.toLowerCase())).slice(0, 5) : [], [query]);

  useEffect(() => {
    const sentinel = scrollSentinelRef.current;
    if (!sentinel) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      const compact = !entry.isIntersecting;
      setIsCompact(compact);
      if (compact) {
        hoverOpenedMenuRef.current = null;
        setOpenMenu(null);
      }
    });
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const closeMenus = (event) => {
      if (!headerRef.current?.contains(event.target)) setOpenMenu(null);
    };
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };

    document.addEventListener("pointerdown", closeMenus);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeMenus);
      document.removeEventListener("keydown", closeOnEscape);
      window.clearTimeout(closeTimerRef.current);
    };
  }, []);

  const openDesktopMenu = (index, source) => {
    if (!window.matchMedia("(min-width: 761px)").matches) return;
    window.clearTimeout(closeTimerRef.current);
    if (source === "hover" && openMenu !== index) hoverOpenedMenuRef.current = index;
    setOpenMenu(index);
  };

  const scheduleMenuClose = () => {
    if (!window.matchMedia("(min-width: 761px)").matches) return;
    window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(() => {
      hoverOpenedMenuRef.current = null;
      setOpenMenu(null);
    }, 160);
  };

  const submitSearch = (event) => {
    event.preventDefault();
    document.querySelector("[data-pwc-section='features']")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <span className="header-scroll-sentinel" ref={scrollSentinelRef} aria-hidden="true" />
      <div className="browser-note">Katalog digital Surya Jaya Promosindo — solusi souvenir custom untuk perusahaan, komunitas, dan acara.</div>
      <header ref={headerRef} className={`catalog-header ${isCompact ? "is-compact" : ""}`} data-pwc-critical="header-1">
      <div className="header-main page-shell">
        <button
          className={`mobile-menu-toggle ${mobileOpen ? "is-active" : ""}`}
          type="button"
          aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={mobileOpen}
          onClick={() => {
            setMobileOpen((value) => !value);
            if (mobileOpen) setOpenMenu(null);
          }}
        >
          <span /><span /><span />
        </button>
        <a className="brand" href="/" aria-label="Surya Jaya Promosindo">
          <img src="/assets/images/surya-jaya-promosindo-logo.webp" alt="Logo Surya Jaya Promosindo" />
          <span>Surya Jaya<br />Promosindo</span>
        </a>
        <form className="catalog-search" role="search" onSubmit={submitSearch}>
          <input value={query} onChange={(event) => setQuery(event.target.value)} aria-label="Cari katalog" placeholder="Cari souvenir atau jenis cetak..." />
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
          <div className="language"><span className="language-dot" /> Indonesia <span className="caret" /></div>
          <a className="shipping" href="#information"><span className="truck">◇</span><span><strong>Info Pemesanan</strong><small>Konsultasi & produksi</small></span></a>
          <a className="store-link" href="#stores"><span className="pin">⌖</span><span><strong>Lokasi Workshop</strong><small>Temukan kami</small></span></a>
        </div>
      </div>

      <div className={`navigation-wrap ${mobileOpen ? "is-mobile-open" : ""}`}>
        <nav className="site-navigation page-shell" aria-label="Katalog utama" data-pwc-critical="navigation-1">
          <ul className="primary-nav">
            {menus.map((menu, index) => {
              const isOpen = openMenu === index;
              return (
                <li
                  key={menu.label}
                  className={isOpen ? "is-open" : ""}
                  onMouseEnter={() => openDesktopMenu(index, "hover")}
                  onMouseLeave={scheduleMenuClose}
                  onFocus={() => openDesktopMenu(index, "focus")}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) scheduleMenuClose();
                  }}
                >
                  <button
                    type="button"
                    data-pwc-interaction={`interaction-${index + 1}`}
                    aria-expanded={isOpen}
                    onClick={() => {
                      window.clearTimeout(closeTimerRef.current);
                      if (hoverOpenedMenuRef.current === index) {
                        hoverOpenedMenuRef.current = null;
                        setOpenMenu(index);
                        return;
                      }
                      setOpenMenu(isOpen ? null : index);
                    }}
                  >
                    {menu.label}<span className="chevron">⌄</span>
                  </button>
                  {isOpen && (
                    <div className="mega-menu" data-pwc-controlled={`interaction-${index + 1}`}>
                      <div className="mega-columns">
                        {menu.groups.map((group) => (
                          <div key={group[0]}>
                            <strong>{group[0]}</strong>
                            {group.slice(1).map((item) => <a key={item} tabIndex={isOpen ? 0 : -1} href={`#${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>{item}</a>)}
                          </div>
                        ))}
                      </div>
                      <div className="mega-image"><img src={`/assets/images/${index % 2 === 0 ? "Mega_Menu-08_300x300.jpg" : "Mega_Menu_P2-08_300x300.jpg"}`} alt={`Inspirasi ${menu.label.toLowerCase()}`} /></div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="secondary-nav">
            <a href="#categories">KATALOG SOUVENIR CUSTOM</a>
            <a className="teal" href="#weekly-best">PALING DIMINATI</a>
            <a className="red" href="#corporate-gift">CORPORATE GIFT</a>
            <a className="red" href="#special">PAKET EVENT</a>
            <a className="location-inline" href="#stores">● Konsultasi pesanan</a>
          </div>
        </nav>
      </div>
      </header>
    </>
  );
}
