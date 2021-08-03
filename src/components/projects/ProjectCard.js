import React from "react";
import { ProjectCardContainer, ProjectCardLink, ProjectCardFigure, ProjectCardImg, ProjectCardInfo, ProjectCardInfoText } from './ProjectElements'


function ProjectCard(props) {
  return (
    <>
      <ProjectCardContainer>
        <ProjectCardLink className="cards__item__link" target="_blank" href={props.path}>
          <ProjectCardFigure  data-category={props.label}>
            <ProjectCardImg  alt="Travel" src={props.src} />
          </ProjectCardFigure>
          <ProjectCardInfo >
            <ProjectCardInfoText >{props.text}</ProjectCardInfoText>
          </ProjectCardInfo>
        </ProjectCardLink>
      </ProjectCardContainer>
    </>
  );
}

export default ProjectCard;
