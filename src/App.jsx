import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Timeline from "./components/timeline/Timeline";
import SearchSection from "./components/search/SearchSection";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/theme/ThemeToggle";

const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <SearchSection />
      <Nav />
      <About />
      <Skills />
      <Timeline />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
      <ThemeToggle />
    </ThemeProvider>
  );
};

export default App;
