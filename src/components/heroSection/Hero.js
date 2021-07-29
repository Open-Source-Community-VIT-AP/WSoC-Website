import React from 'react'
import heroimg from '../../assets/heroimg.png'
import { HeroContainer, HeroText, HeroImage } from '../../components/heroSection/HeroElements'

function hero() {
    return (
        <>
            <HeroContainer id ="home">
                <HeroText>
                    Winter Season <br/> of Code <br/> 2021
                </HeroText>
                <HeroImage src= {heroimg} ></HeroImage>  
            </HeroContainer>  
        </>
    )
}

export default hero
