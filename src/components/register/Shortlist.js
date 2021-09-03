import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import { MdExpandMore } from "react-icons/md";
import { ProjectInner } from "../projects/ProjectElements";
import ProjectCard from "../projects/ProjectCard";
import img from "../../assets/projectimg1.png";
import img2 from "../../assets/projectimg2.png";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightMedium,
  },
}));

function Shortlist() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<MdExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            ClubSpot - WSOC2101
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Name - Reg.no</Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>Name - Reg.no</Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>Name - Reg.no</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<MdExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            Identity - WSOC2102
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Name - Reg.no</Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>Name - Reg.no</Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>Name - Reg.no</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<MdExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>SOUL - WSOC2103</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Name - Reg.no</Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>Name - Reg.no</Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>Name - Reg.no</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Shortlist;
