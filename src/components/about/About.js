import React from 'react'
import aboutimg from '../../assets/aboutimg.png'
import { AboutContainer, TextContainer, Heading, Para, AboutImage } from './AboutElements'

function About() {
    return (
        <>
            <AboutContainer id = "about">
                <TextContainer>
                    <Heading>
                        What is WSoC ?
                    </Heading>
                    <Para>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit reiciendis magnam vitae harum, laboriosam aliquam eum aperiam doloribus pariatur libero quas quisquam itaque rem quaerat dolores laudantium blanditiis atque mollitia. Dolorem omnis perferendis tempora asperiores vel voluptate magni laudantium cum dolores, fuga inventore! Eum vero autem impedit, excepturi officiis iusto.
                    </Para>
                </TextContainer>
                <AboutImage src ={aboutimg}></AboutImage>
            </AboutContainer>
        </>
    )
}

export default About
