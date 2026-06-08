import { useEffect, useRef } from 'react';

const REVEAL_SELECTOR = [
  '.home-section > .home-container',
  '.home-ai-final-cta > .home-container',
  '.home-offer-card',
  '.home-feature-card',
  '.home-portfolio-grid article',
  '.home-category-card',
  '.home-blog-card',
  '.elegant-section .elegant-container',
  '.elegant-card',
  '.elegant-product-card',
  '.product-gallery-card',
  '.planner-section .elegant-container',
  '.planner-step-card',
  '.planner-type-card',
  '.planner-service-card',
  '.planner-concept-card',
  '.planner-summary-card',
  '.planner-side-card',
  '.hero-poster-copy',
  '.hero-poster-panel',
  '.spatial-studio-copy',
  '.spatial-stage',
  '.canva-showcase-copy',
  '.canva-visual-stage',
].join(',');

const MAGNETIC_SELECTOR = [
  '.home-button',
  '.elegant-button',
  '.elegant-button-secondary',
  '.hero-poster-primary',
  '.hero-poster-secondary',
  '.planner-cta',
  '.home-card-link',
  '.home-inline-link',
  '.planner-card-actions a',
  '.planner-card-actions button',
  '.spatial-control-row button',
  '.spatial-hotspot-layer button',
  '.canva-direction-tabs button',
].join(',');

export function CreativeMotion() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(pointer: fine)').matches;

    document.body.classList.add('ac-motion-ready');
    if (finePointer && !reduceMotion) {
      document.body.classList.add('ac-has-cursor');
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;
    let ringX = pointerX;
    let ringY = pointerY;
    let animationFrame = 0;

    const animateCursor = () => {
      if (!dot || !ring || reduceMotion || !finePointer) return;
      ringX += (pointerX - ringX) * 0.18;
      ringY += (pointerY - ringY) * 0.18;
      dot.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0)`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      animationFrame = window.requestAnimationFrame(animateCursor);
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
    };

    const handlePointerDown = () => document.body.classList.add('ac-cursor-pressed');
    const handlePointerUp = () => document.body.classList.remove('ac-cursor-pressed');

    const updateScrollState = () => {
      const scrollMax = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const ratio = Math.min(window.scrollY / scrollMax, 1);
      document.documentElement.style.setProperty('--ac-scroll-ratio', ratio.toFixed(4));
      document.documentElement.style.setProperty('--ac-scroll-shift', `${Math.min(window.scrollY * 0.075, 58)}px`);
      if (scrollRef.current) {
        scrollRef.current.style.transform = `scaleY(${ratio})`;
      }
    };

    if (finePointer && !reduceMotion) {
      window.addEventListener('pointermove', handlePointerMove, { passive: true });
      window.addEventListener('pointerdown', handlePointerDown, { passive: true });
      window.addEventListener('pointerup', handlePointerUp, { passive: true });
    }
    window.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState, { passive: true });
    updateScrollState();
    animationFrame = window.requestAnimationFrame(animateCursor);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('ac-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -8% 0px' }
    );

    const revealedItems = new WeakSet<HTMLElement>();
    const magneticCleanups = new Map<HTMLElement, () => void>();

    const attachMagnetic = (item: HTMLElement) => {
      if (magneticCleanups.has(item)) return;
      let magneticFrame = 0;
      let nextX = 0;
      let nextY = 0;
      const move = (event: PointerEvent) => {
        if (reduceMotion || !finePointer) return;
        const rect = item.getBoundingClientRect();
        nextX = (event.clientX - rect.left - rect.width / 2) * 0.1;
        nextY = (event.clientY - rect.top - rect.height / 2) * 0.1;
        if (magneticFrame) return;
        magneticFrame = window.requestAnimationFrame(() => {
          item.style.setProperty('--ac-magnet-x', `${nextX}px`);
          item.style.setProperty('--ac-magnet-y', `${nextY}px`);
          magneticFrame = 0;
        });
      };
      const leave = () => {
        if (magneticFrame) {
          window.cancelAnimationFrame(magneticFrame);
          magneticFrame = 0;
        }
        item.style.setProperty('--ac-magnet-x', '0px');
        item.style.setProperty('--ac-magnet-y', '0px');
      };
      item.addEventListener('pointermove', move);
      item.addEventListener('pointerleave', leave);
      magneticCleanups.set(item, () => {
        item.removeEventListener('pointermove', move);
        item.removeEventListener('pointerleave', leave);
      });
    };

    const scanMotionTargets = () => {
      Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR)).forEach((item, index) => {
        if (revealedItems.has(item)) return;
        revealedItems.add(item);
        item.classList.add('ac-reveal');
        item.style.setProperty('--ac-reveal-delay', `${Math.min(index % 8, 7) * 55}ms`);
        observer.observe(item);
      });

      Array.from(document.querySelectorAll<HTMLElement>(MAGNETIC_SELECTOR)).forEach(attachMagnetic);
    };

    scanMotionTargets();

    const mutationObserver = new MutationObserver(() => {
      window.requestAnimationFrame(scanMotionTargets);
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      document.body.classList.remove('ac-motion-ready', 'ac-has-cursor', 'ac-cursor-pressed');
      window.cancelAnimationFrame(animationFrame);
      if (finePointer && !reduceMotion) {
        window.removeEventListener('pointermove', handlePointerMove);
        window.removeEventListener('pointerdown', handlePointerDown);
        window.removeEventListener('pointerup', handlePointerUp);
      }
      window.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
      observer.disconnect();
      mutationObserver.disconnect();
      magneticCleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return (
    <>
      <div className="ac-light-field" aria-hidden="true" />
      <div className="ac-gold-ribbon" aria-hidden="true" />
      <div className="ac-atelier-frame" aria-hidden="true" />
      <div className="ac-scroll-rail" aria-hidden="true">
        <span ref={scrollRef} />
      </div>
      <div className="ac-cursor-dot" ref={dotRef} aria-hidden="true" />
      <div className="ac-cursor-ring" ref={ringRef} aria-hidden="true" />
    </>
  );
}
