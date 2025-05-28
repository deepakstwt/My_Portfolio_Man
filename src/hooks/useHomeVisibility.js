import { useState, useEffect } from "react";

const useHomeVisibility = () => {
  const [isHomeActive, setIsHomeActive] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");
      if (homeSection) {
        const rect = homeSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Check if home section is in view (at least 50% visible)
        const isVisible = rect.top < windowHeight * 0.5 && rect.bottom > windowHeight * 0.5;
        setIsHomeActive(isVisible);
      }
    };

    // Initial check
    handleScroll();

    // Add scroll listener with throttling for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });
    
    // Cleanup
    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, []);

  return isHomeActive;
};

export default useHomeVisibility; 