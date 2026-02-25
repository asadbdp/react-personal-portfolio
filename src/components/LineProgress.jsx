import React from "react";

const ProgressBar = ({ label, progress }) => {
  const value = Math.min(Math.max(Number(progress) || 0, 0), 100);
  const dashArray = 100;
  const dashOffset = dashArray - value;

  return (
    <div className="art-hard-skills-item">
      <div className="art-skill-heading">
        <h6>{label}</h6>
      </div>

      <div className="art-line-progress">
        <div id="lineprog1" style={{ position: "relative" }}>
          <svg
            viewBox="0 0 100 1.72"
            preserveAspectRatio="none"
            style={{ width: "100%", height: "100%" }}
          >
            {/* background line */}
            <path
              d="M 0,0.86 L 100,0.86"
              stroke="#eee"
              strokeWidth="1.72"
              fillOpacity="0"
            />
            {/* progress line */}
            <path
              d="M 0,0.86 L 100,0.86"
              stroke="#555"
              strokeWidth="1.72"
              fillOpacity="0"
              style={{
                strokeDasharray: `${dashArray}, ${dashArray}`,
                strokeDashoffset: dashOffset,
                transition: "stroke-dashoffset 1s ease",
              }}
            />
          </svg>
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
            {value} %
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
