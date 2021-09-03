import React from 'react'
import styled from 'styled-components'
import Shortlist from './Shortlist'

const RegisterContainer = styled.div`
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    max-width: 1400px;
    margin: auto;
    padding: 0 24px;
`

const ShortlistHeading = styled.h2`
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
const Para = styled.p`
    max-width: 1165px;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    letter-spacing: 0.02em;

    @media screen and (max-width: 768px) {
        font-size: 17px;
    }
`


function Register() {
    return (
        <RegisterContainer id ="shortlist">
            <ShortlistHeading>Shortlist</ShortlistHeading>
            {/* <Shortlist/> */}
            <Para>
            Shortlisted candidates will be announced soon
            </Para>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </RegisterContainer>
    )
}

export default Register
