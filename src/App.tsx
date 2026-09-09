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

function App() {

    const [loaderVisible, setLoaderVisible] = useState(true);
  const [loaderMounted, setLoaderMounted] = useState(true);

  useEffect(() => {
    const hideLoader = () => {
      setLoaderVisible(false); // starts the opacity fade
      window.setTimeout(() => {
        setLoaderMounted(false); // removes it from the DOM once the fade finishes
      }, FADE_DURATION);
    };

    if (document.readyState === "complete") {
      // Page (including images/fonts) already finished loading before this ran
      hideLoader();
    } else {
      window.addEventListener("load", hideLoader);
      return () => window.removeEventListener("load", hideLoader);
    }
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
