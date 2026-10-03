export function PromoBanner({ image, alt, href = "#categories", id }) {
  return (
    <section className="promo-banner content-shell" id={id}>
      <a href={href} aria-label={alt}><img src={image} alt={alt} /></a>
    </section>
  );
}

export default function Section5Section() {
  return <PromoBanner id="special" image="/assets/images/IDN_-ECID-NCOOL.jpg" alt="Pilihan tumbler dan drinkware custom untuk kebutuhan promosi" href="#drinkware" />;
}
