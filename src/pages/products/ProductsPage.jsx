import { useEffect } from "react";
import HeaderSection from "../../components/sections/header/HeaderSection.jsx";
import Section from "../../components/sections/section/Section.jsx";
import Section2Section from "../../components/sections/section-2/Section2Section.jsx";
import Section4Section from "../../components/sections/section-4/Section4Section.jsx";
import FeaturesSection from "../../components/sections/features/FeaturesSection.jsx";
import Section5Section from "../../components/sections/section-5/Section5Section.jsx";
import Features2Section from "../../components/sections/features-2/Features2Section.jsx";
import Section7Section from "../../components/sections/section-7/Section7Section.jsx";
import Section8Section from "../../components/sections/section-8/Section8Section.jsx";
import Section9Section from "../../components/sections/section-9/Section9Section.jsx";
import Features3Section from "../../components/sections/features-3/Features3Section.jsx";
import Section10Section from "../../components/sections/section-10/Section10Section.jsx";
import Features4Section from "../../components/sections/features-4/Features4Section.jsx";
import Section11Section from "../../components/sections/section-11/Section11Section.jsx";
import Features5Section from "../../components/sections/features-5/Features5Section.jsx";
import Section12Section from "../../components/sections/section-12/Section12Section.jsx";
import FooterSection from "../../components/sections/footer/FooterSection.jsx";

export default function ProductsPage() {
  useEffect(() => {
    document.title = "Katalog Produk | Surya Jaya Promosindo";
  }, []);

  return (
    <>
      <div data-pwc-section="header"><HeaderSection /></div>
      <h1 className="visually-hidden">Katalog souvenir custom Surya Jaya Promosindo</h1>
      <div data-pwc-section="section"><Section /></div>
      <div data-pwc-section="section-2"><Section2Section /></div>
      <div data-pwc-section="section-4"><Section4Section /></div>
      <div data-pwc-section="features"><FeaturesSection /></div>
      <div data-pwc-section="section-5"><Section5Section /></div>
      <div data-pwc-section="features-2"><Features2Section /></div>
      <div data-pwc-section="section-7"><Section7Section /></div>
      <div data-pwc-section="section-8"><Section8Section /></div>
      <div data-pwc-section="section-9"><Section9Section /></div>
      <div data-pwc-section="features-3"><Features3Section /></div>
      <div data-pwc-section="section-10"><Section10Section /></div>
      <div data-pwc-section="features-4"><Features4Section /></div>
      <div data-pwc-section="section-11"><Section11Section /></div>
      <div data-pwc-section="features-5"><Features5Section /></div>
      <div data-pwc-section="section-12"><Section12Section /></div>
      <div data-pwc-section="footer"><FooterSection /></div>
    </>
  );
}
