import styled from 'styled-components';

export const HeroContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    max-width: 1400px;
    justify-content: space-evenly;
    /* align-items: center; */
    margin: auto;
    padding: 0 24px;
`

export const HeroText = styled.h1`
    max-width: 805px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 100px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    @media screen and (max-width: 768px) {
        font-size: 60px;
    }

    

`
export const HeroImage = styled.img`
    max-width: 1178px;
    align-self: flex-end;
    width: 100%;

`