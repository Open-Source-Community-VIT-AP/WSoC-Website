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
      width: '140px',
      paddingLeft: '0',
      textAlign: 'left',
      
    },
    '.MuiTimelineContent-root': {
      flex: '1',
      maxWidth: '570px',
      marginBottom: '40px',
      padding:'0 15px',
    },
    '.MuiTypography-root': {
      fontFamily: 'Montserrat',
    },
    '.MuiTimeline-root': {
      padding: '0',
    },
  },
})(() => null);


function MuiTimeline() {
    return (
    <Timeline >
    <GlobalCss />
        <TimelineItem>
          <TimelineOppositeContent >
            <Typography color="textSecondary">15<sup>th</sup> August</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="h1">
              Applications Open
            </Typography>
            <Typography>Test Repositories are made public and shortlisting process begins.</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent >
            <Typography color="textSecondary">31<sup>st</sup> August</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="h1">
              Shortlist Announcement
            </Typography>
            <Typography>Results of shortlisting process are announced & students will be intimated regarding the further process.</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent >
            <Typography color="textSecondary">1<sup>st</sup> September</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="h1">
              Program Begins
            </Typography>
            <Typography>Code session of WSoC starts & students work on their Winter Season of Code 2021 projects</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent >
            <Typography color="textSecondary">Oct-Nov</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="h1">
              Evaluation
            </Typography>
            <Typography>Two phases of evaluation in order to check into the progress of the project, and ensure that there are no issues in the building of the project successfully.</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent >
            <Typography color="textSecondary">15<sup>th</sup> December</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="h1">
              Final Project Submission
            </Typography>
            <Typography> Projects are submitted, and evaluated by a panel of experienced judges who evaluate the project based on a number of criteria.  </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent >
            <Typography color="textSecondary">31<sup>st</sup> December</Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="h1">
              Publishing of the Results
            </Typography>
            <Typography> The season of code comes to an end, with the best project, and team announced to the public.</Typography>
          </TimelineContent>
        </TimelineItem>
        
        </Timeline>
    )
}

export default MuiTimeline
