import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Challenges from "./components/Challenges";
import ServicePanels from "./components/ServicePanels";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import CapabilitiesDiagram from "./components/CapabilitiesDiagram";
import SplitList from "./components/SplitList";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";
import { CAPABILITY_ITEMS, FAQ_ITEMS } from "./data/content";
import Loader from "./components/Loader";
import Automation from "./components/Automation";

const FADE_DURATION = 700;

// Waits for every currently-rendered <img> to finish loading — but skips
// loading="lazy" images, since those intentionally don't fetch until the
// user scrolls near them and would otherwise block the loader forever.
function waitForEagerImages(): Promise<void> {
  const images = Array.from(document.images).filter(
    (img) => img.loading !== "lazy"
  );

  const promises = images.map((img) => {
    if (img.complete) return Promise.resolve();
    return new Promise<void>((resolve) => {
      img.addEventListener("load", () => resolve(), { once: true });
      img.addEventListener("error", () => resolve(), { once: true }); // don't hang on a broken image
    });
  });

  return Promise.all(promises).then(() => undefined);
}

function waitForWindowLoad(): Promise<void> {
  if (document.readyState === "complete") return Promise.resolve();
  return new Promise((resolve) => {
    window.addEventListener("load", () => resolve(), { once: true });
  });
}

function App() {
  const [loaderVisible, setLoaderVisible] = useState(true);
  const [loaderMounted, setLoaderMounted] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const hideLoader = () => {
      if (cancelled) return;
      setLoaderVisible(false); // starts the opacity fade
      window.setTimeout(() => {
        if (!cancelled) setLoaderMounted(false); // removes it from the DOM once the fade finishes
      }, FADE_DURATION);
    };

    // Wait a frame so React has finished mounting/painting all <img> tags
    // before we start scanning document.images — otherwise we'd query an
    // empty or partially-rendered DOM and resolve instantly.
    const raf = requestAnimationFrame(() => {
      Promise.all([waitForWindowLoad(), waitForEagerImages()]).then(hideLoader);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {loaderMounted && <Loader visible={loaderVisible} />}

      <a className="sr-only" href="#main">
        Skip to main content
      </a>

      <Header />

      <main id="main">
        <Hero />
        <Challenges />
        <Automation />
        <ServicePanels />
        <Experience />
        <Projects />
        <CapabilitiesDiagram />

        <SplitList
          ariaLabel="Here when you need us"
          reverse
          heading={
            <>
              Here When You
              <br />
              <span className="text-[#cf262b]">Need Us</span>
            </>
          }
          subtitle="Help you navigate every step with confidence"
          items={CAPABILITY_ITEMS}
        />
        <SplitList
          ariaLabel="Frequently asked questions"
          heading={
            <>
              Frequently Asked
              <br />
              <span className="text-[#c12025]">Questions</span>
            </>
          }
          subtitle="Structured Thinking. Real-World Results."
          items={FAQ_ITEMS}
        />
      </main>

      <Footer />
      <FloatingActions />
    </>
  );
}

export default App;