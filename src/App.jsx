import React, { useEffect } from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Timeline from "./components/timeline/Timeline";
import SearchSection from "./components/search/SearchSection";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/theme/ThemeToggle";
import ErrorBoundary from "./components/common/ErrorBoundary";
import reportWebVitals from "./utils/performanceMonitor";
import { createComponentObserver } from "./utils/performanceMonitor";

const App = () => {
  useEffect(() => {
    // Initialize performance monitoring
    reportWebVitals(console.log);

    // Create performance observer for key components
    const observers = [
      createComponentObserver('Header'),
      createComponentObserver('Portfolio'),
      createComponentObserver('Contact')
    ];

    // Cleanup observers
    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <ErrorBoundary>
    <ThemeProvider>
        <div className="app-container">
          <ErrorBoundary>
      <Header />
          </ErrorBoundary>
          
          <ErrorBoundary>
      <SearchSection />
          </ErrorBoundary>
          
          <ErrorBoundary>
      <Nav />
          </ErrorBoundary>
          
          <ErrorBoundary>
      <About />
          </ErrorBoundary>
          
          <ErrorBoundary>
      <Skills />
          </ErrorBoundary>
          
          <ErrorBoundary>
      <Timeline />
          </ErrorBoundary>
          
          <ErrorBoundary>
      <Experience />
          </ErrorBoundary>
          
          <ErrorBoundary>
      <Portfolio />
          </ErrorBoundary>
          
          <ErrorBoundary>
      <Contact />
          </ErrorBoundary>
          
          <ErrorBoundary>
      <Footer />
          </ErrorBoundary>
          
          <ErrorBoundary>
      <ThemeToggle />
          </ErrorBoundary>
        </div>
    </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
