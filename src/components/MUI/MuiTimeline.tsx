import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";

const MuiTimeline = () => {
  return (
    <Timeline>
      <TimelineItem>
        <TimelineOppositeContent>1989-2012</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Kalaburagi</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>2012-2015</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Dharwad</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>2015-Present</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="success" variant="outlined" />
          {/* <TimelineConnector /> */}
        </TimelineSeparator>
        <TimelineContent>Bengaluru</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default MuiTimeline;
