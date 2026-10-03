import { useState } from "react";

const information = ["FAQs", "Shipping Information", "Buy online pick-up in store", "Payment Method", "Goods Inspection Policy", "Return Policy", "Terms of Use", "Privacy Policy"];
const indonesia = ["About Us", "Contact us", "NITORI's Philosophy", "Store Location", "Track Your Parcel"];
const global = ["Japan", "Malaysia", "Singapore", "Thailand", "Vietnam", "The Philippines", "Hong Kong", "Taiwan", "Korea", "Mainland China", "India"];

export default function FooterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  return (
    <footer className="site-footer" data-pwc-critical="footer-1" id="information">
      <div className="content-shell">
        <div className="footer-grid">
          <div><h3>Information</h3>{information.map((item) => <a href={`#${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} key={item}>{item}</a>)}</div>
          <div><h3>NITORI Indonesia</h3>{indonesia.map((item) => <a id={item === "Store Location" ? "stores" : undefined} href={`#${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} key={item}>{item}</a>)}</div>
          <div><h3>NITORI Global</h3>{global.map((item) => <a href={`#${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} key={item}>{item}</a>)}</div>
          <div><h3>Subscribe</h3><p>Sign-up for our latest happenings now!</p>{subscribed ? <p className="newsletter-success">Thank you for following NITORI.</p> : <form className="newsletter-form" onSubmit={(event) => { event.preventDefault(); if (email.trim()) setSubscribed(true); }}><input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email address" aria-label="Email address" required /><button type="submit">Sign up</button></form>}<img className="award" src="/assets/images/awardz00.jpg" alt="Ministry of Economy, Trade and Industry, Japan — PS Awards" /></div>
          <div><h3>Follow us</h3><div className="socials"><a href="#facebook" aria-label="Facebook">f</a><a href="#instagram" aria-label="Instagram">◎</a><a href="#tiktok" aria-label="TikTok">♪</a><a href="#youtube" aria-label="YouTube">▶</a></div></div>
        </div>
        <div className="consumer-info"><strong>Layanan Pengaduan Konsumen:</strong><br />PT. Nitori Retail Indonesia<br />Email: nrid_ec-inquiry@nitori.co.id<br />Direktorat Jenderal Perlindungan Konsumen dan Tertib Niaga<br />Kementerian Perdagangan Republik Indonesia<br />Whatsapp Ditjen PKTN: 0853-1111-1010</div>
        <div className="copyright">Copyright © 2026 NITORI Indonesia.</div>
      </div>
    </footer>
  );
}
