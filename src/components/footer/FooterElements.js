import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: #160041;
    width: 100%;
    color: white;
    min-height: 50vh;
`

export const FooterInnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1400px;
    justify-content: space-between;
    margin: auto;
    padding: 0 24px;
    
`

export const WsocLogo = styled.img`
    max-width: 370px;
    display: flex;
    margin: 60px 0px;
    align-self: center;

    @media screen and (max-width: 450px) {
        max-width: 200px;
    }
`

export const FooterBottom = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    
`

export const FooterClubs = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    margin: auto;
    height: 150px;
    max-width: 310px;

`

export const ClubName = styled.p`
    font-size: 18px;
    font-weight: 600;

    @media screen and (max-width: 450px) {
        font-size: 14px;
    }

`

export const SocialIcons = styled.div`
    font-size: 16px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
`
export const FooterLink = styled.a`
    color: black;
    background: white;
    padding: 8px 8px 4px 8px;
    border-radius: 50px;
    transition: 0.2s ease-in-out;

    &:hover {
        transform: scale(1.2);
        background: #41E5FF;
        color: black;
        transition: 0.2s ease-in-out;
        box-shadow: rgba(255, 255, 255, 0.25) 0px 50px 100px -20px, rgba(255, 255, 255, 0.3) 0px 30px 60px -30px, rgba(255, 255, 255, 0.35) 0px -2px 6px 0px inset;
    }
`

    
export const FooterCopyright = styled.p`
    font-size: 12px;

`