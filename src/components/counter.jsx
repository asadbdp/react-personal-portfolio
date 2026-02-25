import React, { useEffect, useRef } from "react";
import anime from "animejs";

const Counters = () => {
  const countersRef = useRef([]);

  useEffect(() => {
    // Fade-in effect for all counter frames
    anime({
      targets: ".art-counter-frame",
      opacity: [0, 1],
      duration: 800,
      delay: 300,
      easing: "linear",
    });

    // Count-up effect
    countersRef.current.forEach((el) => {
      const endValue = parseInt(el.getAttribute("data-value"), 10);
      let start = 0;
      const duration = 2000;
      const stepTime = 10;
      const increment = (endValue - start) / (duration / stepTime);

      const interval = setInterval(() => {
        start += increment;
        if (start >= endValue) {
          start = endValue;
          clearInterval(interval);
        }
        el.textContent = Math.ceil(start);
      }, stepTime);
    });
  }, []);

  return (
    <div className="container-fluid">
      {/* row */}
      <div className="row p-30-0">
        {/* 1 */}
        <div className="col-md-3 col-6">
          <div className="art-counter-frame">
            <div className="art-counter-box">
              <span
                ref={(el) => (countersRef.current[0] = el)}
                className="art-counter"
                data-value="3"
              >
                0
              </span>
              <span className="art-counter-plus">+</span>
            </div>
            <h6>Years Experience</h6>
          </div>
        </div>

        {/* 2 */}
        <div className="col-md-3 col-6">
          <div className="art-counter-frame">
            <div className="art-counter-box">
              <span
                ref={(el) => (countersRef.current[1] = el)}
                className="art-counter"
                data-value="100"
              >
                0
              </span>
            </div>
            <h6>Completed Projects</h6>
          </div>
        </div>

        {/* 3 */}
        <div className="col-md-3 col-6">
          <div className="art-counter-frame">
            <div className="art-counter-box">
              <span
                ref={(el) => (countersRef.current[2] = el)}
                className="art-counter"
                data-value="30"
              >
                0
              </span>
            </div>
            <h6>Happy Customers</h6>
          </div>
        </div>

        {/* 4 */}
        <div className="col-md-3 col-6">
          <div className="art-counter-frame">
            <div className="art-counter-box">
              <span
                ref={(el) => (countersRef.current[3] = el)}
                className="art-counter"
                data-value="5"
              >
                0
              </span>
              <span className="art-counter-plus">+</span>
            </div>
            <h6>Honors and Awards</h6>
          </div>
        </div>
      </div>
      {/* row end */}
    </div>
  );
};

export default Counters;
