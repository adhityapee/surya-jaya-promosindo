export function PromoBanner({ image, alt, href = "#categories", id, eyebrow, title, description, cta, showLogo = false, badgeMark }) {
  const hasCopy = Boolean(title);
  return (
    <section className={`promo-banner content-shell ${hasCopy ? "promo-banner--story" : ""}`} id={id}>
      <a className="promo-banner__frame" href={href} aria-label={alt}>
        <img src={image} alt={alt} />
        {badgeMark && (
          <span
            className="promo-banner__badge-mark"
            style={{
              "--badge-top": badgeMark.top,
              "--badge-left": badgeMark.left,
              "--badge-size": badgeMark.size,
              "--badge-mobile-left": badgeMark.mobileLeft,
              "--badge-mobile-bottom": badgeMark.mobileBottom,
              "--badge-mobile-size": badgeMark.mobileSize,
            }}
            aria-hidden="true"
          >
            <img src="/assets/images/surya-jaya-promosindo-logo.webp" alt="" />
          </span>
        )}
        {hasCopy && (
          <span className="promo-banner__copy">
            {showLogo && <img className="promo-banner__logo" src="/assets/images/surya-jaya-promosindo-logo.webp" alt="" />}
            {eyebrow && <small>{eyebrow}</small>}
            <strong>{title}</strong>
            {description && <span>{description}</span>}
            {cta && <em>{cta}<span aria-hidden="true">→</span></em>}
          </span>
        )}
      </a>
    </section>
  );
}

export default function Section5Section() {
  return (
    <PromoBanner
      id="special"
      image="/assets/images/banners/pulpen-notebook-office-banner.webp"
      alt="Pulpen dan notebook custom digunakan saat meeting di kantor"
      href="#weekly-best"
      eyebrow="PULPEN & NOTEBOOK CUSTOM"
      title="Ide besar dimulai dari catatan kecil"
      description="Untuk meeting, seminar, onboarding, dan hadiah perusahaan yang terasa lebih personal."
      cta="Lihat 7 pilihan produk"
      showLogo
    />
  );
}