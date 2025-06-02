import { getCLS, getFID, getLCP } from 'web-vitals';

const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    getCLS(onPerfEntry);  // Cumulative Layout Shift
    getFID(onPerfEntry);  // First Input Delay
    getLCP(onPerfEntry);  // Largest Contentful Paint
  }
};

// Custom performance observer for component-level metrics
export const createComponentObserver = (componentName) => {
  if (!window.PerformanceObserver) return null;
  
  const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach(entry => {
      console.log(`${componentName} Performance Metrics:`, {
        name: entry.name,
        duration: entry.duration,
        startTime: entry.startTime,
        entryType: entry.entryType
      });
    });
  });

  observer.observe({ entryTypes: ['measure', 'paint', 'layout-shift'] });
  return observer;
};

export default reportWebVitals; 