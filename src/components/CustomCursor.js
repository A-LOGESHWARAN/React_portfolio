import { useEffect, useRef } from "react";

export const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let rafId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // Dot snaps instantly
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    };

    const animateRing = () => {
      // Ring follows with smooth lag
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(animateRing);
    };

    const onMouseEnterLink = () => {
      dot.classList.add("cursor-hover");
      ring.classList.add("cursor-hover");
    };
    const onMouseLeaveLink = () => {
      dot.classList.remove("cursor-hover");
      ring.classList.remove("cursor-hover");
    };

    const attachHoverListeners = () => {
      const targets = document.querySelectorAll("a, button, [class*='btn'], input, textarea, label");
      targets.forEach((el) => {
        el.addEventListener("mouseenter", onMouseEnterLink);
        el.addEventListener("mouseleave", onMouseLeaveLink);
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    rafId = requestAnimationFrame(animateRing);
    // Attach after a short delay to ensure DOM is ready
    const timer = setTimeout(attachHoverListeners, 500);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {/* Inner dot */}
      <div ref={dotRef} className="custom-cursor-dot" />
      {/* Outer ring */}
      <div ref={ringRef} className="custom-cursor-ring" />

      <style>{`
        *, *::before, *::after {
          cursor: none !important;
        }

        .custom-cursor-dot {
          position: fixed;
          top: 0;
          left: 0;
          width: 10px;
          height: 10px;
          background: #6c63ff;
          border-radius: 50%;
          pointer-events: none;
          z-index: 99999;
          box-shadow: 0 0 10px rgba(108, 99, 255, 0.9), 0 0 20px rgba(108, 99, 255, 0.5);
          transition: width 0.2s ease, height 0.2s ease, background 0.2s ease;
          will-change: transform;
        }

        .custom-cursor-ring {
          position: fixed;
          top: 0;
          left: 0;
          width: 36px;
          height: 36px;
          border: 2px solid rgba(108, 99, 255, 0.55);
          border-radius: 50%;
          pointer-events: none;
          z-index: 99998;
          box-shadow: 0 0 8px rgba(108, 99, 255, 0.25);
          transition: width 0.2s ease, height 0.2s ease, border-color 0.2s ease;
          will-change: transform;
        }

        /* Scale up on hover over interactive elements */
        .custom-cursor-dot.cursor-hover {
          width: 14px;
          height: 14px;
          background: #9b8cff;
          box-shadow: 0 0 16px rgba(155, 140, 255, 1), 0 0 30px rgba(108, 99, 255, 0.6);
        }

        .custom-cursor-ring.cursor-hover {
          width: 52px;
          height: 52px;
          border-color: rgba(155, 140, 255, 0.7);
          box-shadow: 0 0 14px rgba(108, 99, 255, 0.4);
        }
      `}</style>
    </>
  );
};
