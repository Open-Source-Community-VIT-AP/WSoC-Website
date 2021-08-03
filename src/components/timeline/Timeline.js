import React from 'react'
import MuiTimeline from './MuiTimeline'
import { TimelineContainer, TimelineHeading, InnerTimelineContainer, TimelineImg } from './TimelineElements'
import timelineimg from '../../assets/timelineimg.png'

function Timeline() {
    return (
        <>
          <TimelineContainer id = "timeline">
              <TimelineHeading >Timeline </TimelineHeading>
              <InnerTimelineContainer>

                <MuiTimeline/>
                <TimelineImg src={timelineimg}/>  

              </InnerTimelineContainer>
          </TimelineContainer>
        </>
    )
}

export default Timeline
