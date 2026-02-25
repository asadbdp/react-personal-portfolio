// src/components/Preloader.jsx
import React, { useEffect, useRef, useState } from "react";
import anime from "animejs/lib/anime.es.js"; // works with animejs@3.2.1
import ProgressBar from "progressbar.js";

export default function Preloader() {
  const progressRef = useRef(null);         // target for ProgressBar.Line
  const contentRef = useRef(null);          // .art-preloader-content
  const wrapperRef = useRef(null);          // .art-preloader wrapper
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // create the progress bar
    const bar = new ProgressBar.Line(progressRef.current, {
      strokeWidth: 1.7,
      easing: "easeInOut",
      duration: 1400,
      delay: 750,
      trailWidth: 1.7,
      svgStyle: {
        width: "100%",
        height: "100%",
      },
      step: (state, b) => {
        b.setText(Math.round(b.value() * 100) + " %");
      },
    });

    // animate text & fill to 100%
    bar.animate(1); // animate to 100%

    // animate content (fade in)
    if (contentRef.current) {
      anime({
        targets: contentRef.current,
        opacity: [0, 1],
        delay: 200,
        duration: 600,
        easing: "linear",
      });
    }

    // hide whole preloader after a short delay
    // replicate original timing: hide after ~2200ms
    const hideTimeout = setTimeout(() => {
      if (wrapperRef.current) {
        anime({
          targets: wrapperRef.current,
          opacity: [1, 0],
          duration: 400,
          easing: "linear",
          complete() {
            setHidden(true); // remove from DOM
          },
        });
      } else {
        setHidden(true);
      }
    }, 2200); // same delay as original

    return () => {
      clearTimeout(hideTimeout);
      try {
        bar.destroy && bar.destroy();
      } catch (e) {}
    };
  }, []);

  // If hidden, don't render the DOM
  if (hidden) return null;

  // markup mirrors original template structure (IDs/classes used by css)
  return (
    <div className="art-preloader" ref={wrapperRef}>
      <div className="art-preloader-content" ref={contentRef}>
        <h4>Asaduzzaman</h4>
        <div id="preloader" className="art-preloader-load" ref={progressRef}></div>
      </div>
    </div>
  );
}
