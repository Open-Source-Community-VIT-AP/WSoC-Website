import styled from 'styled-components';

export const TimelineContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    max-width: 1400px;
    justify-content: space-evenly;
    margin: auto;
    padding: 0 24px;
`

export const TimelineHeading = styled.h2`
    font-family: Montserrat;
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

export const InnerTimelineContainer = styled.div`
    display: flex;

    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
    
`

export const TimelineImg = styled.img`
    max-width: 330px;
    align-self: flex-end;
    width: 90%;

    @media screen and (max-width: 600px) {
        display: none;
    }
    
`