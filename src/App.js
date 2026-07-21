import { useEffect } from "react";
import AOS from "aos";
import "./App.css";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Projects from "./component/Projects";
import ScrollToTop from "./component/ScrollToTop";
import "aos/dist/aos.css";
import About from "./component/About";
import Footer from "./component/Footer";

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);
  return (
    <>
      {/* <Header /> */}
      <Hero />
      <About /> <Projects /><Footer /><ScrollToTop />
    </>
  );
}

export default App;
