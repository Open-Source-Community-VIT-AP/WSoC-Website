import React from 'react'
import styled from 'styled-components';
import Card from './Card';

export const SponsorSec = styled.div`
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    max-width: 1400px;
    justify-content: space-evenly;
    margin: auto;
    padding: 0 24px;
`

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    min-height: 50vh;
    width: 100%;
    margin-bottom: 100px;
`

export const Heading = styled.div`
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

function Sponsors() {
    return (
        <SponsorSec id="sponsors">
            <Heading>Sponsors</Heading>
        <Container>
            <Card imgurl="https://i.ibb.co/r3SgX1q/taskade.png" redirect="https://www.taskade.com/"/>
            <Card imgurl="https://i.ibb.co/qN1Ln8t/Egghead-io.png" redirect="https://egghead.io/"/>
            <Card imgurl="https://i.ibb.co/Wtm5SVC/balsamiq.png" redirect="https://balsamiq.com/"/>
        </Container>
        </SponsorSec>
    )
}

export default Sponsors
