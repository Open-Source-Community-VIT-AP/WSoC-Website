import React from "react";
import logo from "../../assets/wsoclogo.png";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterInnerContainer,
  WsocLogo,
  FooterBottom,
  FooterClubs,
  ClubName,
  SocialIcons,
  FooterLink,
  FooterCopyright,
} from "./FooterElements";

function Footer() {
  return (
    <>
      <FooterContainer>
        <FooterInnerContainer>
          <WsocLogo src={logo} />
          <FooterBottom>
            <FooterClubs>
              <ClubName>Open Source Comunity: VIT-AP</ClubName>
              <SocialIcons>
                <FooterLink>
                  <FaInstagram />
                </FooterLink>
                <FooterLink> <FaFacebook /> </FooterLink>
                <FooterLink> <FaYoutube /> </FooterLink>
                <FooterLink> <FaLinkedinIn /> </FooterLink>
              </SocialIcons>
            </FooterClubs>
            <FooterClubs>
              <ClubName>Developer Student Clubs: VIT-AP</ClubName>
              <SocialIcons>
                 <FooterLink> <FaInstagram /> </FooterLink>
                 <FooterLink> <FaFacebook /> </FooterLink>
                 <FooterLink> <FaYoutube /> </FooterLink>
                 <FooterLink> <FaLinkedinIn /> </FooterLink>
              </SocialIcons>
            </FooterClubs>
          </FooterBottom>
          <FooterCopyright></FooterCopyright>
        </FooterInnerContainer>
      </FooterContainer>
    </>
  );
}

export default Footer;
