import React from "react";

const timelineData = [
  {
    date: "October 2022 - June 2023",
    company: "MHIPCOR",
    position: "IT-Staff"
  },
  {
    date: "March 2022 - June 2022",
    company: "LEENTech Network Solutions",
    position: "Web Developer || Internship"
  },
  // Add more timelineData as needed
];

const HorizontalTimeline = () => {
  return (
    <div className="timeline-container">
      <div className="timeline-item upper-right">
        <div className="timeline-content">
        <div className="timeline-marker-red"></div>
          <div className="date">{timelineData[0].date}</div>
          <div className="event">{timelineData[0].company}</div>
          <div className="position">{timelineData[0].position}</div>
        </div>
      </div>
      <div className="timeline-line"></div>

      <div className="timeline-item lower-left">
        <div className="timeline-content">
        <div className="timeline-marker-blue"></div>
          <div className="date">{timelineData[1].date}</div>
          <div className="event">{timelineData[1].company}</div>
          <div className="position">{timelineData[1].position}</div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalTimeline;
