import { useState, useEffect, useRef } from 'react';

const useIntersectionObserver = (options = {}, errorCallback) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [error, setError] = useState(null);
  const targetRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    try {
      if (!window.IntersectionObserver) {
        throw new Error('IntersectionObserver not supported');
      }

      const handler = (entries) => {
        const [entry] = entries;
        setIsIntersecting(entry.isIntersecting);
        
        // Performance marking for analytics
        if (entry.isIntersecting) {
          performance.mark(`${targetRef.current?.id || 'element'}-visible`);
        }
      };

      observerRef.current = new IntersectionObserver(handler, {
        root: options.root || null,
        rootMargin: options.rootMargin || '0px',
        threshold: options.threshold || 0,
      });

      const currentTarget = targetRef.current;
      if (currentTarget) {
        observerRef.current.observe(currentTarget);
      }

      return () => {
        if (observerRef.current && currentTarget) {
          observerRef.current.unobserve(currentTarget);
        }
      };
    } catch (err) {
      setError(err);
      if (errorCallback) {
        errorCallback(err);
      }
      // Fallback to simple visibility check
      const checkVisibility = () => {
        if (targetRef.current) {
          const rect = targetRef.current.getBoundingClientRect();
          setIsIntersecting(
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= window.innerHeight &&
            rect.right <= window.innerWidth
          );
        }
      };
      window.addEventListener('scroll', checkVisibility);
      checkVisibility();
      return () => window.removeEventListener('scroll', checkVisibility);
    }
  }, [options.root, options.rootMargin, options.threshold, errorCallback]);

  return { ref: targetRef, isIntersecting, error };
}; 