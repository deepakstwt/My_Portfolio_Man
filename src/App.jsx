import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";

import Timeline from "./components/timeline/Timeline";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/theme/ThemeToggle";

import Cursor from "./components/cursor/Cursor";

const App = () => {
  return (
    <ThemeProvider>
        <div className="app-container">
      <Cursor />
      <Header />
      <Nav />
      <About />
      <Portfolio />
      <Timeline />
      <Experience />
      <Contact />
      <Footer />
      <ThemeToggle />
        </div>
    </ThemeProvider>
  );
};


export default App;
