const sitemap = ['Case Studies', 'Services', 'About', 'Career', 'Blog', 'News', 'Vacancies'];
const social = ['Instagram', 'LinkedIn', 'YouTube', 'Facebook', 'Twitter'];

// Visual only.
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-cols">
        <div className="f-sitemap"><h4>Sitemap</h4>{sitemap.map((l) => <a key={l} href="#">{l}</a>)}</div>
        <div className="f-social"><h4>Follow Us On</h4>{social.map((l, i) => <a key={l} href="#" className={i > 2 ? 'm-only' : ''}>{l}</a>)}</div>
        <div className="f-office"><h4>Office</h4><p>Alibeyov Gardashlari 27,<br />Sabail, Sabah Residence</p></div>
        <div className="f-partner"><h4>For Partnerships</h4><a href="#">partnership@wemark.az</a><a href="#">+994 51 555 55 55</a></div>
        <a className="f-top-arrow" href="#" aria-label="Back to top">↑</a>
      </div>
      <div className="f-lang-m">🌐 AZERBAIJANI <span>|</span> ENGLISH</div>
      <div className="f-word" aria-hidden>wemark</div>
      <div className="f-bottom">
        <span>COPYRIGHT © 2024 WEMARK</span>
        <a href="#" className="d-only">TERMS &amp; PRIVACY</a>
        <span className="f-lang-d">🌐 AZƏRBAYCAN DILI</span>
        <a href="#" className="m-only">BACK TO TOP ↑</a>
      </div>
    </footer>
  );
}
