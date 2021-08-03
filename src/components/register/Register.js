import React from 'react'
import styled from 'styled-components'

const RegisterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    max-width: 1400px;
    margin: auto;
    padding: 0 24px;
    border: none;
    outline: none;
`

function Register() {
    return (
        <RegisterContainer id ="register">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdtdKMLi9nQugUGedzFTJ0-SbJU16BBpo4_zF9MWa7xRFVc4Q/viewform?embedded=true" width="640" height="1193" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </RegisterContainer>
    )
}

export default Register
