export function PromoBanner({ image, alt, href = "#categories", id, eyebrow, title, description, cta }) {
  const hasCopy = Boolean(title);
  return (
    <section className={`promo-banner content-shell ${hasCopy ? "promo-banner--story" : ""}`} id={id}>
      <a className="promo-banner__frame" href={href} aria-label={alt}>
        <img src={image} alt={alt} />
        {hasCopy && (
          <span className="promo-banner__copy">
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
    />
  );
}