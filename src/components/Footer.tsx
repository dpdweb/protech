export default function Footer() {
  return (
    <footer className="site-footer">
      <a className="site-footer__logo" href="#top" aria-label="ProTechX Systems home">
        <img src="/img/02-primary-light-1.png" alt="ProTechX Systems" />
      </a>
      <nav className="site-footer__nav" aria-label="Footer">
        <a href="#services">Services Overview</a>
        <a href="#contact">Contact us</a>
        <a href="#top">Back to top</a>
      </nav>
    </footer>
  );
}
