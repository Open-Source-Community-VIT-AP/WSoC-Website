import styled from 'styled-components';

export const ArchiveContainer = styled.div`
    min-height: 40vh;
    display: flex;
    flex-direction: column;
    max-width: 1400px;
    margin: auto;
    padding: 0 24px;
    margin-bottom: 50px;
    
`

export const ArchiveHeading = styled.h2`
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