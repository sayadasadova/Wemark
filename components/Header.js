const links = ['About', 'Services', 'Case Studies', 'Career', 'Blog', 'xSchool'];

// Visual only — no functionality required.
export default function Header() {
  return (
    <header className="header">
      <a className="logo" href="#">wemark</a>
      <nav className="nav">{links.map((l) => <a key={l} href="#">{l}</a>)}</nav>
      <a className="talk" href="#">Let’s Talk</a>
      <span className="menu-btn">Menu</span>
    </header>
  );
}
