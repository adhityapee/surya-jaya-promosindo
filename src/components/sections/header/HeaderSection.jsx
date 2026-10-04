import { useEffect, useMemo, useRef, useState } from "react";
import { CaretDown } from "@phosphor-icons/react/CaretDown";
import { Check } from "@phosphor-icons/react/Check";
import { GlobeHemisphereWest } from "@phosphor-icons/react/GlobeHemisphereWest";
import { Info } from "@phosphor-icons/react/Info";
import { MagnifyingGlass } from "@phosphor-icons/react/MagnifyingGlass";
import { Package } from "@phosphor-icons/react/Package";
import { Truck } from "@phosphor-icons/react/Truck";
import { WhatsappLogo } from "@phosphor-icons/react/WhatsappLogo";
import { X } from "@phosphor-icons/react/X";
import "./styles.css";

const whatsappMessage = "Halo Surya Jaya Promosindo, saya ingin berkonsultasi mengenai pemesanan souvenir custom. Produk yang saya butuhkan: [nama produk]. Jumlah: [jumlah pcs]. Mohon informasinya, terima kasih.";
const whatsappUrl = "https://wa.me/6285740386268?text=" + encodeURIComponent(whatsappMessage);

const menus = [
  {
    label: "TUMBLER & MUG",
    image: "/assets/images/categories/tumbler-mug.webp",
    groups: [["TUMBLER", "BOTOL VAKUM", "TUMBLER SEDOTAN", "BOTOL SPORT"], ["MUG", "MUG KERAMIK", "MUG ENAMEL", "TRAVEL MUG"], ["TEKNIK CETAK", "UV PRINT", "SUBLIMASI", "LASER GRAVIR"], ["COCOK UNTUK", "SOUVENIR KANTOR", "HADIAH KLIEN", "MERCHANDISE EVENT"]],
  },
  {
    label: "PULPEN & NOTEBOOK",
    image: "/assets/images/categories/pulpen-notebook.webp",
    groups: [["PULPEN", "PULPEN PROMOSI", "PULPEN METAL", "PULPEN STYLUS"], ["NOTEBOOK", "NOTEBOOK HARDCOVER", "NOTEBOOK SPIRAL", "ORGANIZER 6-IN-1"], ["PAKET ALAT TULIS", "GIFT SET NOTEBOOK", "SEMINAR KIT", "WELCOME KIT"], ["FINISHING", "UV PRINT", "LASER GRAVIR", "EMBOSS COVER"]],
  },
  {
    label: "TAS & GOODIE BAG",
    image: "/assets/images/categories/tote-goodie-bag.webp",
    groups: [["TOTE BAG", "TOTE BAG KANVAS", "COTTON DRILL", "TAS LIPAT"], ["GOODIE BAG", "SPUNBOND", "POLYESTER", "DRAWSTRING BAG"], ["KEMASAN", "PAPER BAG", "HARD BOX", "POUCH"], ["KEBUTUHAN", "EVENT & SEMINAR", "KEMASAN RETAIL", "SOUVENIR PERUSAHAAN"]],
  },
  {
    label: "LANYARD & ID CARD",
    image: "/assets/images/categories/lanyard-id-card.webp",
    groups: [["LANYARD", "LANYARD TISSUE", "LANYARD POLYESTER", "LANYARD NYLON"], ["ID CARD", "KARTU PVC", "HOLDER HORIZONTAL", "HOLDER AKRILIK"], ["AKSESORIS", "BADGE REEL", "CARD HOLDER", "EVENT CREDENTIAL"], ["KEGUNAAN", "IDENTITAS KARYAWAN", "EVENT & PANITIA", "VISITOR PASS"]],
  },
  {
    label: "GADGET",
    image: "/assets/images/categories/gadget-usb.webp",
    groups: [["KIPAS PORTABLE", "KIPAS MINI", "KIPAS LED", "KIPAS MEJA"], ["POWER BANK", "POWER BANK MAGNETIC", "KABEL TERINTEGRASI", "POWER BANK SLIM"], ["KARTU ELEKTRONIK", "BRIZZI", "TAPCASH", "E-MONEY & FLAZZ"], ["AKSESORIS GADGET", "KABEL DATA", "PHONE GRIP", "FLASHDISK"]],
  },
  {
    label: "GIFT SET & HAMPERS",
    image: "/assets/images/categories/gift-set-hampers.webp",
    groups: [["CORPORATE GIFT", "EXECUTIVE GIFT SET", "HADIAH KLIEN", "EMPLOYEE WELCOME KIT"], ["HAMPERS", "COFFEE DESK SET", "TEA HAMPER", "ECO CORPORATE SET"], ["PACKAGING", "CUSTOM HARD BOX", "SLEEVE BOX", "KARTU UCAPAN"], ["MOMEN", "ONBOARDING", "ANNIVERSARY", "HARI RAYA & AKHIR TAHUN"]],
  },
  {
    label: "EVENT KIT",
    image: "/assets/images/categories/seminar-event-kit.webp",
    groups: [["SEMINAR", "SEMINAR KIT", "FOLDER DOKUMEN", "LANYARD & ID CARD"], ["PAMERAN", "SHOPPING BAG", "BROSUR", "DISPLAY PROMOSI"], ["KOMUNITAS", "KAOS KOMUNITAS", "PIN CUSTOM", "STIKER"], ["AWARD", "PLAKAT AKRILIK", "MEDALI", "TROFI"]],
  },
  {
    label: "APPAREL CUSTOM",
    image: "/assets/images/categories/apparel-custom.webp",
    groups: [["PAKAIAN", "KAOS CUSTOM", "POLO SHIRT", "KEMEJA KERJA"], ["OUTER", "JAKET", "HOODIE", "ROMPI"], ["HEADWEAR", "TOPI BORDIR", "TOPI SABLON", "BUCKET HAT"], ["FINISHING", "SABLON", "BORDIR KOMPUTER", "DIRECT TO FILM"]],
  },
  {
    label: "SOUVENIR CUSTOM",
    image: "/assets/images/categories/gantungan-kunci-pin.webp",
    groups: [["GANTUNGAN KUNCI", "AKRILIK", "METAL", "KARET PVC"], ["SOUVENIR HARIAN", "KOREK API", "JAM DINDING", "PAYUNG"], ["DESK ITEM", "KALENDER", "MOUSE PAD", "CARD HOLDER"], ["LAYANAN CUSTOM", "FULL COLOR", "BENTUK KHUSUS", "PESANAN PARTAI BESAR"]],
  },
  {
    label: "CETAK PROMOSI",
    image: "/assets/images/categories/kalender-custom.webp",
    groups: [["MEDIA CETAK", "BROSUR", "FLYER", "KATALOG"], ["DISPLAY PROMOSI", "X-BANNER", "ROLL BANNER", "POSTER"], ["IDENTITAS BISNIS", "KARTU NAMA", "LETTERHEAD", "AMPLOP"], ["LABEL & STIKER", "VINYL", "TRANSPARAN", "DIE CUT"]],
  },
];

const catalogTerms = [
  "Tumbler dan mug custom",
  "Pulpen dan notebook custom",
  "Tote bag dan goodie bag",
  "Lanyard dan ID card",
  "Gift set dan hampers",
  "Gadget custom",
  "Seminar dan event kit",
  "Cetak promosi",
];

const languages = [
  { code: "id", short: "ID", label: { id: "Indonesia", en: "Indonesian" }, description: { id: "Bahasa Indonesia", en: "Bahasa Indonesia" } },
  { code: "en", short: "EN", label: { id: "Inggris", en: "English" }, description: { id: "English", en: "English" } },
];

const englishMenuTerms = {
  "BOTOL VAKUM": "VACUUM BOTTLES", "TUMBLER SEDOTAN": "STRAW TUMBLERS", "BOTOL SPORT": "SPORT BOTTLES", "MUG KERAMIK": "CERAMIC MUGS", "MUG ENAMEL": "ENAMEL MUGS", "TEKNIK CETAK": "PRINTING METHODS", SUBLIMASI: "SUBLIMATION", "LASER GRAVIR": "LASER ENGRAVING", "COCOK UNTUK": "IDEAL FOR", "SOUVENIR KANTOR": "OFFICE MERCHANDISE", "HADIAH KLIEN": "CLIENT GIFTS", "MERCHANDISE EVENT": "EVENT MERCHANDISE",
  PULPEN: "PENS", "PULPEN PROMOSI": "PROMOTIONAL PENS", "PULPEN METAL": "METAL PENS", "PULPEN STYLUS": "STYLUS PENS", "NOTEBOOK HARDCOVER": "HARDCOVER NOTEBOOKS", "NOTEBOOK SPIRAL": "SPIRAL NOTEBOOKS", "ORGANIZER 6-IN-1": "6-IN-1 ORGANIZERS", "PAKET ALAT TULIS": "STATIONERY SETS", "GIFT SET NOTEBOOK": "NOTEBOOK GIFT SETS", "FINISHING": "FINISHING OPTIONS", "EMBOSS COVER": "COVER EMBOSSING",
  "TOTE BAG KANVAS": "CANVAS TOTE BAGS", "COTTON DRILL": "COTTON DRILL", "TAS LIPAT": "FOLDABLE BAGS", "GOODIE BAG": "GOODIE BAGS", SPUNBOND: "SPUNBOND", POLYESTER: "POLYESTER", "KEMASAN": "PACKAGING", "KEBUTUHAN": "USE CASES", "EVENT & SEMINAR": "EVENTS & SEMINARS", "KEMASAN RETAIL": "RETAIL PACKAGING", "SOUVENIR PERUSAHAAN": "CORPORATE MERCHANDISE",
  "LANYARD TISSUE": "TISSUE LANYARDS", "LANYARD POLYESTER": "POLYESTER LANYARDS", "LANYARD NYLON": "NYLON LANYARDS", "KARTU PVC": "PVC CARDS", "HOLDER HORIZONTAL": "HORIZONTAL HOLDERS", "HOLDER AKRILIK": "ACRYLIC HOLDERS", AKSESORIS: "ACCESSORIES", "CARD HOLDER": "CARD HOLDERS", "EVENT CREDENTIAL": "EVENT CREDENTIALS", KEGUNAAN: "USE CASES", "IDENTITAS KARYAWAN": "EMPLOYEE IDENTIFICATION", "EVENT & PANITIA": "EVENTS & COMMITTEES", "VISITOR PASS": "VISITOR PASSES",
  "KIPAS PORTABLE": "PORTABLE FANS", "KIPAS MINI": "MINI FANS", "KIPAS LED": "LED FANS", "KIPAS MEJA": "DESK FANS", "POWER BANK MAGNETIC": "MAGNETIC POWER BANKS", "KABEL TERINTEGRASI": "BUILT-IN CABLES", "POWER BANK SLIM": "SLIM POWER BANKS", "KARTU ELEKTRONIK": "ELECTRONIC CARDS", "E-MONEY & FLAZZ": "E-MONEY & FLAZZ", "AKSESORIS GADGET": "GADGET ACCESSORIES", "KABEL DATA": "DATA CABLES", "PHONE GRIP": "PHONE GRIPS",
  "CORPORATE GIFT": "CORPORATE GIFTS", "EXECUTIVE GIFT SET": "EXECUTIVE GIFT SETS", "EMPLOYEE WELCOME KIT": "EMPLOYEE WELCOME KITS", HAMPERS: "HAMPERS", "COFFEE DESK SET": "COFFEE DESK SETS", "TEA HAMPER": "TEA HAMPERS", "ECO CORPORATE SET": "ECO CORPORATE SETS", PACKAGING: "PACKAGING", "CUSTOM HARD BOX": "CUSTOM HARD BOXES", "KARTU UCAPAN": "GREETING CARDS", MOMEN: "OCCASIONS", ANNIVERSARY: "ANNIVERSARIES", "HARI RAYA & AKHIR TAHUN": "HOLIDAYS & YEAR-END",
  SEMINAR: "SEMINARS", "FOLDER DOKUMEN": "DOCUMENT FOLDERS", PAMERAN: "EXHIBITIONS", "SHOPPING BAG": "SHOPPING BAGS", BROSUR: "BROCHURES", KOMUNITAS: "COMMUNITIES", "KAOS KOMUNITAS": "COMMUNITY T-SHIRTS", "PIN CUSTOM": "CUSTOM PINS", STIKER: "STICKERS", "PLAKAT AKRILIK": "ACRYLIC PLAQUES", MEDALI: "MEDALS", TROFI: "TROPHIES",
  PAKAIAN: "CLOTHING", "KAOS CUSTOM": "CUSTOM T-SHIRTS", "KEMEJA KERJA": "WORK SHIRTS", OUTER: "OUTERWEAR", JAKET: "JACKETS", ROMPI: "VESTS", "TOPI BORDIR": "EMBROIDERED CAPS", "TOPI SABLON": "PRINTED CAPS", SABLON: "SCREEN PRINTING", "BORDIR KOMPUTER": "COMPUTER EMBROIDERY",
  "GANTUNGAN KUNCI": "KEYCHAINS", AKRILIK: "ACRYLIC", "KARET PVC": "PVC RUBBER", "SOUVENIR HARIAN": "EVERYDAY MERCHANDISE", "KOREK API": "LIGHTERS", "JAM DINDING": "WALL CLOCKS", PAYUNG: "UMBRELLAS", "DESK ITEM": "DESK ITEMS", KALENDER: "CALENDARS", "MOUSE PAD": "MOUSE PADS", "LAYANAN CUSTOM": "CUSTOM SERVICES", "BENTUK KHUSUS": "CUSTOM SHAPES", "PESANAN PARTAI BESAR": "BULK ORDERS",
  "MEDIA CETAK": "PRINTED MEDIA", KATALOG: "CATALOGS", "DISPLAY PROMOSI": "PROMOTIONAL DISPLAYS", "IDENTITAS BISNIS": "BUSINESS IDENTITY", "KARTU NAMA": "BUSINESS CARDS", AMPLOP: "ENVELOPES", "LABEL & STIKER": "LABELS & STICKERS", TRANSPARAN: "TRANSPARENT",
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
    contact: "Lihat lokasi toko",
    phoneLabel: "Telepon 0857 4038 6268",
    whatsappLabel: "Chat WhatsApp",
    whatsappAria: "Hubungi Surya Jaya Promosindo melalui WhatsApp",
    menuLabels: ["TUMBLER & MUG", "PULPEN & NOTEBOOK", "TAS & GOODIE BAG", "LANYARD & ID CARD", "GADGET", "GIFT SET & HAMPERS", "EVENT KIT", "APPAREL CUSTOM", "SOUVENIR CUSTOM", "CETAK PROMOSI"],
    secondary: ["KATALOG SOUVENIR CUSTOM", "PALING DIMINATI", "CORPORATE GIFT", "PAKET EVENT", "Lokasi Toko"],
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
    contact: "View store locations",
    phoneLabel: "Call 0857 4038 6268",
    whatsappLabel: "WhatsApp Us",
    whatsappAria: "Contact Surya Jaya Promosindo on WhatsApp",
    menuLabels: ["TUMBLERS & MUGS", "PENS & NOTEBOOKS", "BAGS & GOODIE BAGS", "LANYARDS & ID CARDS", "GADGETS", "GIFT SETS & HAMPERS", "EVENT KITS", "CUSTOM APPAREL", "CUSTOM MERCHANDISE", "PROMOTIONAL PRINT"],
    secondary: ["CUSTOM MERCHANDISE CATALOG", "MOST POPULAR", "CORPORATE GIFTS", "EVENT PACKAGES", "Store Locations"],
  },
};

export default function HeaderSection({ hideStoreLocationLink = false }) {
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
          <a className="header-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label={copy.whatsappAria}>
            <WhatsappLogo size={21} weight="fill" aria-hidden="true" />
            <span>{copy.whatsappLabel}</span>
          </a>
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
          <div className="order-panel-footer">
            <p>{copy.orderFootnote}</p>
            <div className="order-panel-actions">
              <a href="tel:+6285740386268">{copy.phoneLabel}</a>
              <a href="/id/pages/lokasi-toko" onClick={() => setOpenUtility(null)}>{copy.contact}</a>
            </div>
          </div>
        </aside>
      )}

      <div className={`navigation-wrap ${mobileOpen ? "is-mobile-open" : ""}`}>
        <div className="mobile-utility-bar page-shell">
          <button type="button" aria-expanded={openUtility === "language"} aria-controls="language-panel" onClick={() => toggleUtility("language")}><GlobeHemisphereWest size={20} weight="regular" aria-hidden="true" />{copy.currentLanguage}<CaretDown size={13} weight="bold" aria-hidden="true" /></button>
          <button type="button" aria-expanded={openUtility === "order"} aria-controls="order-panel" onClick={() => toggleUtility("order")}><Truck size={22} weight="regular" aria-hidden="true" />{copy.orderTitle}</button>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label={copy.whatsappAria}><WhatsappLogo size={20} weight="fill" aria-hidden="true" />WhatsApp</a>
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
                      <div className="mega-image"><img src={menu.image} alt={`${copy.inspiration} ${copy.menuLabels[index].toLowerCase()}`} /></div>
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
            {!hideStoreLocationLink && <a className="location-inline" href="/id/pages/lokasi-toko">{copy.secondary[4]}</a>}
          </div>
        </nav>
      </div>
      </header>
    </>
  );
}
