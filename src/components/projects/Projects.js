import React from 'react'
import ProjectCard from './ProjectCard'
import img from '../../assets/projectimg1.png'

import { ProjectContainer, ProjectInner, ProjectsHeading} from './ProjectElements'

function Projects() {
    return (
        <>
          <ProjectContainer id ="projects">
              <ProjectsHeading>
                  Projects
              </ProjectsHeading>
            <ProjectInner>
                <ProjectCard 
                    src={img}
                    text="Project 1: Productivity Manager"
                    label="WSOC2001"
                    path="#"
                />
                <ProjectCard 
                    src={img}
                    text="Project 1: Productivity Manager"
                    label="WSOC2001"
                    path="#"
                />
                <ProjectCard 
                    src={img}
                    text="Project 1: Productivity Manager"
                    label="WSOC2001"
                    path="#"
                />
                <ProjectCard 
                    src={img}
                    text="Project 1: Productivity Manager"
                    label="WSOC2001"
                    path="#"
                />
                <ProjectCard 
                    src={img}
                    text="Project 1: Productivity Manager"
                    label="WSOC2001"
                    path="#"
                />
                <ProjectCard 
                    src={img}
                    text="Project 1: Productivity Manager"
                    label="WSOC2001"
                    path="#"
                />
            </ProjectInner>    
          </ProjectContainer>  
        </>
    )
}

export default Projects
