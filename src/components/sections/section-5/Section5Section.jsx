export function PromoBanner({ image, alt, href = "#categories", id }) {
  return (
    <section className="promo-banner content-shell" id={id}>
      <a href={href} aria-label={alt}><img src={image} alt={alt} /></a>
    </section>
  );
}

export default function Section5Section() {
  return <PromoBanner id="special" image="/assets/images/IDN_-ECID-NCOOL.jpg" alt="N-Cool Series — pilih tingkat kesejukan sesuai preferensi Anda" href="#n-cool" />;
}
