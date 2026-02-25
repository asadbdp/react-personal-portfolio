// Timeline.js
import React from "react";

const timelineItems = [
  { title: "Title 1", subtitle: "Template author", date: "Jan 2018 - May 2020", description: "Dolor sit amet, consectetur adipiscing elit.", linkText: "Diplome", linkHref: "files/certificate.jpg" },
  { title: "Title 2", subtitle: "Template author", date: "Jan 2020 - May 2021", description: "Consectetur adipisicing elit.", linkText: "", linkHref: "" },
];

function Timeline({ title, id }) {
  return (
    <div>
      <div className="art-section-title">
        <div className="art-title-frame">
          <h4>{title}</h4>
        </div>
      </div>

      <div className="art-timeline" id={id}>
        {timelineItems.map((item, idx) => (
          <div key={idx} className="art-timeline-item">
            <div className="art-timeline-mark-light"></div>
            <div className="art-timeline-mark"></div>
            <div className="art-a art-timeline-content">
              <div className="art-card-header">
                <div className="art-left-side">
                  <h5>{item.title}</h5>
                  <div className="art-el-suptitle mb-15">{item.subtitle}</div>
                </div>
                <div className="art-right-side">
                  <span className="art-date">{item.date}</span>
                </div>
              </div>
              <p>{item.description}</p>
              {item.linkText && <a data-fancybox="diplome" href={item.linkHref} className="art-link art-color-link art-w-chevron">{item.linkText}</a>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
