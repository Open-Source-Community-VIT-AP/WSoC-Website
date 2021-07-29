import React from 'react'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { Typography, withStyles } from '@material-ui/core';
import { TimelineOppositeContent } from '@material-ui/lab';

const GlobalCss = withStyles({
  '@global': {
    '.MuiTimelineOppositeContent-root': {
      flex: 'none',
      marginRight:'0',
      paddingLeft: '0',
    },
    '.MuiTimelineContent-root': {
      flex: '1',
      maxWidth: '570px',
      marginBottom: '40px',
      padding:'0 17px',
    },
    '.MuiTypography-root': {
      fontFamily: 'Montserrat',
    },
  },
})(() => null);


function MuiTimeline() {
    return (
    <Timeline >
    <GlobalCss />
        <TimelineItem>
          <TimelineOppositeContent >
            <Typography color="textSecondary">15th August</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="h1">
              Amet minim 
            </Typography>
            <Typography>mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent >
            <Typography color="textSecondary">15th August</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="h1">
              Amet minim 
            </Typography>
            <Typography>mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent >
            <Typography color="textSecondary">15th August</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="h1">
              Amet minim 
            </Typography>
            <Typography>mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent >
            <Typography color="textSecondary">15th August</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="h1">
              Amet minim 
            </Typography>
            <Typography>mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</Typography>
          </TimelineContent>
        </TimelineItem>
        
        </Timeline>
    )
}

export default MuiTimeline
