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

function App() {
  return (
    <>
      <a className="visually-hidden" href="#main">
        Skip to main content
      </a>

      <Header />

      <main id="main">
        <Hero />
        {/* <Challenges />
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
              Need <span className="accent">Us</span>
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
              <span className="accent" style={{ color: "#c12025" }}>
                Questions
              </span>
            </>
          }
          subtitle="Structured Thinking. Real-World Results."
          items={FAQ_ITEMS}
        /> */}
      </main>

      {/* <Footer />
      <FloatingActions /> */}
    </>
  );
}

export default App;
