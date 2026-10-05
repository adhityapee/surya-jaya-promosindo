export default function MarketplaceMark({ marketplace, compact = false }) {
  const className = "marketplace-mark marketplace-mark--" + marketplace.id + (compact ? " marketplace-mark--compact" : "");

  return (
    <span className={className} aria-hidden="true">
      <img src={"/assets/images/marketplaces/" + marketplace.id + ".svg"} alt="" />
      <span className="marketplace-mark__name">{marketplace.name}</span>
    </span>
  );
}
