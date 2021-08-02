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
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeQdDYkoI7i5sGavDBeBmePGTsavMdvl3grAFPiynTSRwG9CQ/viewform?embedded=true" width="640" height="1182" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </RegisterContainer>
    )
}

export default Register
