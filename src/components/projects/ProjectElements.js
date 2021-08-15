import styled from 'styled-components';


// project card elements 

export const ProjectCardContainer = styled.div`
    display: flex;
    margin: 0 1.5rem;
    border-radius: 10px;
    /* width: 275px; */
    margin-bottom: 3rem;
`
export const BigText = styled.h1`
    max-width: 805px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 100px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    @media screen and (max-width: 768px) {
        font-size: 50px;
    } 

`

export const ProjectCardLink = styled.a`
  display: flex;
  flex-flow: column;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  text-decoration: none;
  transition: all 0.4s ease-in-out;
  width: 275px;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
  -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
  filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
}
  @media screen and (max-width: 350px) {
        width: 200px;
  }
`

export const ProjectCardFigure = styled.figure`
  position: relative;
  width: 100%;
  padding-top: 67%;
  overflow: hidden;

  &:after {
  content: attr(data-category);
  position: absolute;
  bottom: 0;
  margin-left: 10px;
  padding: 6px 8px;
  /* max-width: calc((100%) - 60px); */
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  background-color: #1f98f4;
  box-sizing: border-box;
  }

`
export const ProjectCardImg = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  max-width: 100%;
  margin: 0 auto;
  max-height: 100%;
  object-fit: cover;
  transition: all 0.2s linear;
  /* &:hover {
  transform: scale(1.1);
} */
`

export const ProjectCardInfo = styled.div`
  padding: 20px 30px 30px;
`

export const ProjectCardInfoText = styled.h5`
  color: #252e48;
  font-size: 18px;
  line-height: 24px;
`

// projects elements

export const ProjectContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    max-width: 1400px;
    justify-content: space-evenly;
    margin: auto;
    padding: 0 24px;
`

export const ProjectsHeading = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 70px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    margin-bottom: 30px;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }
`

export const ProjectInner = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
`