import { useEffect, useMemo, useRef, useState } from "react";
import { CaretDown } from "@phosphor-icons/react/CaretDown";
import { Check } from "@phosphor-icons/react/Check";
import { GlobeHemisphereWest } from "@phosphor-icons/react/GlobeHemisphereWest";
import { Info } from "@phosphor-icons/react/Info";
import { MagnifyingGlass } from "@phosphor-icons/react/MagnifyingGlass";
import { Package } from "@phosphor-icons/react/Package";
import { Truck } from "@phosphor-icons/react/Truck";
import { X } from "@phosphor-icons/react/X";
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

const languages = [
  { code: "id", short: "ID", label: { id: "Indonesia", en: "Indonesian" }, description: { id: "Bahasa Indonesia", en: "Bahasa Indonesia" } },
  { code: "en", short: "EN", label: { id: "Inggris", en: "English" }, description: { id: "English", en: "English" } },
];

const englishMenuTerms = {
  "BOTOL MINUM": "WATER BOTTLES", "MUG KERAMIK": "CERAMIC MUGS", "TEKNIK CETAK": "PRINTING METHODS", SUBLIMASI: "SUBLIMATION", "LASER GRAVIR": "LASER ENGRAVING", KEBUTUHAN: "USE CASES", "SOUVENIR KANTOR": "OFFICE MERCHANDISE", "MERCHANDISE EVENT": "EVENT MERCHANDISE",
  PAKAIAN: "CLOTHING", "KAOS CUSTOM": "CUSTOM T-SHIRTS", "KEMEJA KERJA": "WORK SHIRTS", OUTER: "OUTERWEAR", JAKET: "JACKETS", ROMPI: "VESTS", "TOPI BORDIR": "EMBROIDERED CAPS", "TOPI SABLON": "PRINTED CAPS", SABLON: "SCREEN PRINTING", "BORDIR KOMPUTER": "COMPUTER EMBROIDERY",
  "TOTE BAG KANVAS": "CANVAS TOTE BAGS", "TAS KERJA": "WORK BAGS", SELEMPANG: "SLING BAGS", "POUCH KANVAS": "CANVAS POUCHES", "DOMPET KARTU": "CARD WALLETS", "LOGO SATU WARNA": "ONE-COLOR LOGO",
  PENA: "PENS", "PULPEN PROMOSI": "PROMOTIONAL PENS", "PENA METAL": "METAL PENS", "PENA ECO": "ECO PENS", BUKU: "BOOKS", "MEJA KERJA": "DESK ACCESSORIES", PAKET: "SETS",
  "GANTUNGAN KUNCI": "KEYCHAINS", AKRILIK: "ACRYLIC", "KARET PVC": "PVC RUBBER", "PIN PENITI": "SAFETY PINS", "PIN MAGNET": "MAGNETIC PINS", TEKNOLOGI: "TECHNOLOGY", KABEL_DATA: "DATA CABLES",
  LEBARAN: "EID", "NATAL & TAHUN BARU": "CHRISTMAS & NEW YEAR", "KARTU UCAPAN": "GREETING CARDS",
  FOLDER_DOKUMEN: "DOCUMENT FOLDERS", PAMERAN: "EXHIBITIONS", BROSUR: "BROCHURES", KOMUNITAS: "COMMUNITIES", "KAOS KOMUNITAS": "COMMUNITY T-SHIRTS", STIKER: "STICKERS", "PLAKAT AKRILIK": "ACRYLIC PLAQUES", MEDALI: "MEDALS", TROFI: "TROPHIES",
  PAYUNG: "UMBRELLAS", "PAYUNG LIPAT": "FOLDING UMBRELLAS", "PAYUNG GOLF": "GOLF UMBRELLAS", "PAYUNG OTOMATIS": "AUTOMATIC UMBRELLAS", HANDUK: "TOWELS", "HANDUK BORDIR": "EMBROIDERED TOWELS", "HANDUK OLAHRAGA": "SPORT TOWELS", "HANDUK HOTEL": "HOTEL TOWELS", RUMAH: "HOME", "JAM DINDING": "WALL CLOCKS", "BANTAL CUSTOM": "CUSTOM CUSHIONS",
  LAMINASI: "LAMINATION", PELENGKAP: "ACCESSORIES", "STIKER LABEL": "LABEL STICKERS", "MEDIA CETAK": "PRINTED MEDIA", KATALOG: "CATALOGS", IDENTITAS: "BRAND IDENTITY", "KARTU NAMA": "BUSINESS CARDS", AMPLOP: "ENVELOPES", TRANSPARAN: "TRANSPARENT",
};

const translateMenuTerm = (term, language) => language === "en" ? (englishMenuTerms[term] || englishMenuTerms[term.replaceAll(" ", "_")] || term) : term;

const shippingPartners = ["JNE", "J&T Express", "SiCepat", "Wahana", "Ninja Xpress", "SPX Express", "GoSend", "GrabExpress", "Bluebird Kirim", "Anteraja"];

const headerCopy = {
  id: {
    browserNote: "Katalog digital Surya Jaya Promosindo: solusi souvenir custom untuk perusahaan, komunitas, dan acara.",
    searchPlaceholder: "Cari souvenir atau jenis cetak...",
    searchLabel: "Cari katalog",
    searchResults: "Hasil katalog",
    mobileOpen: "Buka menu",
    mobileClose: "Tutup menu",
    closePanel: "Tutup informasi",
    inspiration: "Inspirasi",
    navLabel: "Katalog utama",
    currentLanguage: "Indonesia",
    languageAria: "Pilih bahasa",
    languageTitle: "Pilih bahasa tampilan",
    orderTitle: "Info Pemesanan",
    orderSubtitle: "Pengiriman seluruh Indonesia",
    orderAria: "Buka informasi pemesanan dan pengiriman",
    orderEyebrow: "INFORMASI PEMESANAN",
    orderHeading: "Dari konsultasi sampai pesanan tiba",
    orderIntro: "Tim kami membantu pemilihan produk, proses custom, dan pengiriman sesuai kebutuhan perusahaan Anda.",
    steps: [
      { title: "1. Konsultasi pesanan", body: "Sampaikan jenis produk, jumlah, tenggat, dan referensi desain untuk mendapatkan rekomendasi." },
      { title: "2. Konfirmasi dan produksi", body: "Produksi dimulai setelah spesifikasi produk dan desain cetak disetujui bersama." },
      { title: "3. Pengiriman", body: "Pesanan dikemas dan diserahkan ke ekspedisi pilihan. Nomor pelacakan dibagikan setelah barang dikirim." },
    ],
    courierTitle: "Mitra pengiriman",
    courierNote: "Melayani pengiriman nasional. Pilihan instant dapat dikoordinasikan untuk wilayah dan ukuran pesanan yang memenuhi ketentuan.",
    orderFootnote: "Biaya pengiriman dihitung berdasarkan alamat tujuan, berat, dimensi, dan jumlah koli, lalu dikonfirmasi sebelum pengiriman.",
    contact: "Lihat informasi kontak",
    menuLabels: ["TUMBLER & MUG", "APPAREL", "TAS", "ALAT TULIS", "AKSESORIS", "HAMPERS", "EVENT", "RUMAH & GAYA", "KEMASAN", "CETAK PROMOSI"],
    secondary: ["KATALOG SOUVENIR CUSTOM", "PALING DIMINATI", "CORPORATE GIFT", "PAKET EVENT", "Konsultasi pesanan"],
  },
  en: {
    browserNote: "Surya Jaya Promosindo digital catalog: custom merchandise for companies, communities, and events.",
    searchPlaceholder: "Search products or printing methods...",
    searchLabel: "Search catalog",
    searchResults: "Catalog results",
    mobileOpen: "Open menu",
    mobileClose: "Close menu",
    closePanel: "Close information",
    inspiration: "Inspiration",
    navLabel: "Main catalog",
    currentLanguage: "English",
    languageAria: "Select language",
    languageTitle: "Select display language",
    orderTitle: "Order Information",
    orderSubtitle: "Nationwide delivery",
    orderAria: "Open ordering and delivery information",
    orderEyebrow: "ORDER INFORMATION",
    orderHeading: "From consultation to delivery",
    orderIntro: "Our team helps with product selection, customization, and delivery based on your company needs.",
    steps: [
      { title: "1. Order consultation", body: "Share the product type, quantity, deadline, and design reference to receive a recommendation." },
      { title: "2. Confirmation and production", body: "Production starts after the product specifications and print design are approved." },
      { title: "3. Delivery", body: "Orders are packed and handed to the selected courier. Tracking details are shared after dispatch." },
    ],
    courierTitle: "Delivery partners",
    courierNote: "Nationwide delivery is available. Instant services can be coordinated for eligible areas and order sizes.",
    orderFootnote: "Shipping fees are calculated from the destination, weight, dimensions, and number of packages, then confirmed before dispatch.",
    contact: "View contact information",
    menuLabels: ["TUMBLER & MUG", "APPAREL", "BAGS", "STATIONERY", "ACCESSORIES", "HAMPERS", "EVENT", "HOME & LIFESTYLE", "PACKAGING", "PROMOTIONAL PRINT"],
    secondary: ["CUSTOM MERCHANDISE CATALOG", "MOST POPULAR", "CORPORATE GIFTS", "EVENT PACKAGES", "Order consultation"],
  },
};

export default function HeaderSection() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  const [query, setQuery] = useState("");
  const [openUtility, setOpenUtility] = useState(null);
  const [language, setLanguage] = useState(() => {
    try { return window.localStorage.getItem("sjp-language") === "en" ? "en" : "id"; } catch { return "id"; }
  });
  const copy = headerCopy[language];
  const headerRef = useRef(null);
  const scrollSentinelRef = useRef(null);
  const closeTimerRef = useRef(null);
  const hoverOpenedMenuRef = useRef(null);
  const suggestions = useMemo(() => query.trim() ? catalogTerms.filter((term) => term.toLowerCase().includes(query.toLowerCase())).slice(0, 5) : [], [query]);

  useEffect(() => {
    document.documentElement.lang = language;
    try { window.localStorage.setItem("sjp-language", language); } catch { /* Storage may be disabled by the browser. */ }
  }, [language]);

  useEffect(() => {
    const sentinel = scrollSentinelRef.current;
    if (!sentinel) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      const compact = !entry.isIntersecting;
      setIsCompact(compact);
      if (compact) {
        hoverOpenedMenuRef.current = null;
        setOpenMenu(null);
        setOpenUtility(null);
      }
    });
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const closeMenus = (event) => {
      if (!headerRef.current?.contains(event.target)) {
        setOpenMenu(null);
        setOpenUtility(null);
      }
    };
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
        setOpenUtility(null);
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
    setOpenUtility(null);
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

  const toggleUtility = (panel) => {
    setOpenMenu(null);
    setOpenUtility((current) => current === panel ? null : panel);
  };

  const selectLanguage = (code) => {
    setLanguage(code);
    setOpenUtility(null);
  };

  const submitSearch = (event) => {
    event.preventDefault();
    document.querySelector("[data-pwc-section='features']")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <span className="header-scroll-sentinel" ref={scrollSentinelRef} aria-hidden="true" />
      <div className="browser-note">{copy.browserNote}</div>
      <header ref={headerRef} className={`catalog-header ${isCompact ? "is-compact" : ""}`} data-pwc-critical="header-1">
      <div className="header-main page-shell">
        <button
          className={`mobile-menu-toggle ${mobileOpen ? "is-active" : ""}`}
          type="button"
          aria-label={mobileOpen ? copy.mobileClose : copy.mobileOpen}
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
          <input value={query} onChange={(event) => setQuery(event.target.value)} aria-label={copy.searchLabel} placeholder={copy.searchPlaceholder} />
          <button type="submit" aria-label={copy.searchLabel}>
            <MagnifyingGlass size={24} weight="regular" aria-hidden="true" />
          </button>
          {suggestions.length > 0 && (
            <div className="search-suggestions">
              <span className="suggestion-label">{copy.searchResults}</span>
              {suggestions.map((item) => <button key={item} type="submit">{item}</button>)}
            </div>
          )}
        </form>
        <div className="header-tools">
          <button className={`language utility-trigger ${openUtility === "language" ? "is-open" : ""}`} type="button" aria-expanded={openUtility === "language"} aria-controls="language-panel" aria-label={copy.languageAria} onClick={() => toggleUtility("language")}>
            <GlobeHemisphereWest size={21} weight="regular" aria-hidden="true" />
            <span>{copy.currentLanguage}</span>
            <CaretDown className="utility-caret" size={14} weight="bold" aria-hidden="true" />
          </button>
          <button className={`shipping utility-trigger ${openUtility === "order" ? "is-open" : ""}`} type="button" aria-expanded={openUtility === "order"} aria-controls="order-panel" aria-label={copy.orderAria} onClick={() => toggleUtility("order")}>
            <Truck className="delivery-icon" size={29} weight="regular" aria-hidden="true" />
            <span><strong>{copy.orderTitle}</strong><small>{copy.orderSubtitle}</small></span>
          </button>
        </div>
      </div>

      {openUtility === "language" && (
        <div className="header-utility-panel language-panel" id="language-panel" role="menu" aria-label={copy.languageTitle}>
          <strong className="utility-panel-title">{copy.languageTitle}</strong>
          {languages.map((item) => (
            <button className={language === item.code ? "is-selected" : ""} type="button" role="menuitemradio" aria-checked={language === item.code} key={item.code} onClick={() => selectLanguage(item.code)}>
              <span className="language-code">{item.short}</span>
              <span><b>{item.label[language]}</b><small>{item.description[language]}</small></span>
              {language === item.code && <Check size={18} weight="bold" aria-hidden="true" />}
            </button>
          ))}
        </div>
      )}

      {openUtility === "order" && (
        <aside className="header-utility-panel order-panel" id="order-panel" aria-labelledby="order-panel-title">
          <button className="utility-panel-close" type="button" aria-label={copy.closePanel} onClick={() => setOpenUtility(null)}><X size={19} weight="bold" aria-hidden="true" /></button>
          <div className="order-panel-heading">
            <span className="order-panel-icon"><Truck size={29} weight="regular" aria-hidden="true" /></span>
            <div><small>{copy.orderEyebrow}</small><h2 id="order-panel-title">{copy.orderHeading}</h2><p>{copy.orderIntro}</p></div>
          </div>
          <div className="order-steps">
            {copy.steps.map((step, index) => {
              const StepIcon = index === 0 ? Info : index === 1 ? Package : Truck;
              return <article key={step.title}><StepIcon size={21} weight="regular" aria-hidden="true" /><div><h3>{step.title}</h3><p>{step.body}</p></div></article>;
            })}
          </div>
          <div className="courier-section">
            <strong>{copy.courierTitle}</strong>
            <p>{copy.courierNote}</p>
            <div className="courier-list" aria-label={copy.courierTitle}>{shippingPartners.map((partner) => <span key={partner}>{partner}</span>)}</div>
          </div>
          <div className="order-panel-footer"><p>{copy.orderFootnote}</p><a href="#information" onClick={() => setOpenUtility(null)}>{copy.contact}</a></div>
        </aside>
      )}

      <div className={`navigation-wrap ${mobileOpen ? "is-mobile-open" : ""}`}>
        <div className="mobile-utility-bar page-shell">
          <button type="button" aria-expanded={openUtility === "language"} aria-controls="language-panel" onClick={() => toggleUtility("language")}><GlobeHemisphereWest size={20} weight="regular" aria-hidden="true" />{copy.currentLanguage}<CaretDown size={13} weight="bold" aria-hidden="true" /></button>
          <button type="button" aria-expanded={openUtility === "order"} aria-controls="order-panel" onClick={() => toggleUtility("order")}><Truck size={22} weight="regular" aria-hidden="true" />{copy.orderTitle}</button>
        </div>
        <nav className="site-navigation page-shell" aria-label={copy.navLabel} data-pwc-critical="navigation-1">
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
                        setOpenUtility(null);
                        setOpenMenu(index);
                        return;
                      }
                      setOpenUtility(null);
                      setOpenMenu(isOpen ? null : index);
                    }}
                  >
                    {copy.menuLabels[index]}<CaretDown className="chevron" size={14} weight="bold" aria-hidden="true" />
                  </button>
                  {isOpen && (
                    <div className="mega-menu" data-pwc-controlled={`interaction-${index + 1}`}>
                      <div className="mega-columns">
                        {menu.groups.map((group) => (
                          <div key={group[0]}>
                            <strong>{translateMenuTerm(group[0], language)}</strong>
                            {group.slice(1).map((item) => <a key={item} tabIndex={isOpen ? 0 : -1} href={`#${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>{translateMenuTerm(item, language)}</a>)}
                          </div>
                        ))}
                      </div>
                      <div className="mega-image"><img src={`/assets/images/${index % 2 === 0 ? "Mega_Menu-08_300x300.jpg" : "Mega_Menu_P2-08_300x300.jpg"}`} alt={`${copy.inspiration} ${copy.menuLabels[index].toLowerCase()}`} /></div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="secondary-nav">
            <a href="#categories">{copy.secondary[0]}</a>
            <a className="teal" href="#weekly-best">{copy.secondary[1]}</a>
            <a className="red" href="#corporate-gift">{copy.secondary[2]}</a>
            <a className="red" href="#special">{copy.secondary[3]}</a>
            <a className="location-inline" href="#stores">{copy.secondary[4]}</a>
          </div>
        </nav>
      </div>
      </header>
    </>
  );
}
