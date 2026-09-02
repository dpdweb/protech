export default function Header() {
  return (
    <header className="site-header" id="top">
      <a className="site-header__logo" href="#top" aria-label="ProTechX Systems home">
        <img src="/img/logo.svg" alt="ProTechX Systems" />
      </a>
      <button className="site-header__toggle" type="button" aria-label="Open menu" aria-expanded="false">
        <img src="/img/hamburger.svg" alt="" aria-hidden="true" />
      </button>
    </header>
  );
}
