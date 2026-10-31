
import SeoMetadata from "../../components/SeoMetadata.jsx";
import HeaderSection from "../../components/sections/header/HeaderSection.jsx";
import Section from "../../components/sections/section/Section.jsx";
import Section2Section from "../../components/sections/section-2/Section2Section.jsx";
import ClientCatalog, { CatalogCategories } from "../../components/ClientCatalog.jsx";
import FooterSection from "../../components/sections/footer/FooterSection.jsx";

export default function ProductsPage() {
  const query = new URLSearchParams(window.location.search).get("q")?.trim() || "";
  return (
    <>
      <SeoMetadata
        title={query ? `Pencarian ${query} | Katalog Produk SJP` : "Katalog Produk Souvenir Custom | Surya Jaya Promosindo"}
        description="Pilihan pulpen plastik, gel dan metal, agenda, tumbler, tote bag, payung, kipas portable, serta kartu Flazz, e-money, TapCash dan BRIZZI custom."
        path="/products"
      />
      <div data-pwc-section="header"><HeaderSection /></div>
      <main className={`products-page${query ? " products-page--search" : ""}`} id={query ? "search-results" : undefined}>
        {query ? <div className="client-search-heading content-shell"><h1>Hasil pencarian “{query}”</h1></div> : <>
          <h1 className="visually-hidden">Katalog produk souvenir custom Surya Jaya Promosindo</h1>
          <div data-pwc-section="section"><Section /></div>
          <div data-pwc-section="section-2"><Section2Section /></div>
          <div data-pwc-section="section-4"><CatalogCategories /></div>
        </>}
      <ClientCatalog query={query} />
      </main>
      <div data-pwc-section="footer"><FooterSection /></div>
    </>
  );
}
