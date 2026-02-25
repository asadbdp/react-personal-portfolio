import React, { useEffect, useRef } from "react";

const CircleProgress = ({ value = 100, label = ""}) => {
  const circleRef = useRef(null);

  useEffect(() => {
    const circle = circleRef.current;
    if (circle) {
      const radius = 46.5; // from your HTML
      const circumference = 2 * Math.PI * radius;

      circle.style.strokeDasharray = `${circumference}, ${circumference}`;
      circle.style.strokeDashoffset = circumference;

      // animate progress
      requestAnimationFrame(() => {
        const offset = circumference - (value / 100) * circumference;
        circle.style.strokeDashoffset = offset;
      });
    }
  }, [value]);

  return (
    <div className="art-lang-skills-item">
      <div id="circleprog1" className="art-cirkle-progress" style={{ position: "relative" }}>
        <svg viewBox="0 0 100 100" style={{display: "block", width: "100%" }}>
          {/* Background circle */}
          <path
            d="M 50,50 m 0,-46.5 a 46.5,46.5 0 1 1 0,93 a 46.5,46.5 0 1 1 0,-93"
            stroke="#eee"
            strokeWidth="7"
            fillOpacity="0"
          />
          {/* Progress circle */}
          <path
            ref={circleRef}
            d="M 50,50 m 0,-46.5 a 46.5,46.5 0 1 1 0,93 a 46.5,46.5 0 1 1 0,-93"
            stroke="#555"
            strokeWidth="7"
            fillOpacity="0"
            style={{
              strokeDasharray: "292.273, 292.273",
              strokeDashoffset: "292.273",
              transition: "stroke-dashoffset 0s ease",
            }}
          />
        </svg>
        {/* percentage text */}
        <div
          className="progressbar-text"
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            color: "rgb(85, 85, 85)",
          }}
        >
          {value}
        </div>
      </div>
      {/* label */}
      <h6>{label}</h6>
      
    </div>
  );
};

export default CircleProgress;



