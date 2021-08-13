import React from 'react'
import ProjectCard from './ProjectCard'
import img from '../../assets/projectimg1.png'
import img2101 from '../../assets/2101.jpg'
import img2102 from '../../assets/2102.png'
import img2103 from '../../assets/2103.svg'
import img2104 from '../../assets/2104.png'
import img2105 from '../../assets/2105.png'

import { ProjectContainer, ProjectInner , BigText , ProjectsHeading} from './ProjectElements'

function Projects() {
    return (
        <>
          <ProjectContainer id ="projects">
              <ProjectsHeading>
                  Projects
              </ProjectsHeading>
            <ProjectInner>
                <ProjectCard 
                    src={img2101}
                    text="Project 1 : ClubSpot"
                    label="WSOC2101"
                    path="#"
                />
                <ProjectCard 
                    src={img2102}
                    text="Project 2 : SureNet "
                    label="WSOC2102"
                    path="#"
                />
                <ProjectCard 
                    src={img2103}
                    text="Project 3 : Decentralized Identity Management Platform"
                    label="WSOC2103"
                    path="#"
                />
                <ProjectCard 
                    src={img2104}
                    text="Project 4 : SOUL"
                    label="WSOC2104"
                    path="#"
                />
                <ProjectCard 
                    src={img2105}
                    text="Project 5: Précis"
                    label="WSOC2105"
                    path="#"
                />
                

                {/* <BigText>Coming Soon</BigText> */}
            </ProjectInner>    
          </ProjectContainer>  
        </>
    )
}

export default Projects
