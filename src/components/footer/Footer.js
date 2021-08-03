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
                <FooterLink target="_blank" href ="https://www.instagram.com/osc.vitap/">
                  <FaInstagram />
                </FooterLink>
                <FooterLink target="_blank" href ="https://www.facebook.com/vitaposc/"> <FaFacebook /> </FooterLink>
                <FooterLink target="_blank" href ="https://www.youtube.com/channel/UCL7e5F8GJIkLDKiu5pv2NAw"> <FaYoutube /> </FooterLink>
                <FooterLink target="_blank" href ="https://www.linkedin.com/company/oscvitap/"> <FaLinkedinIn /> </FooterLink>
              </SocialIcons>
            </FooterClubs>
            <FooterClubs>
              <ClubName>Developer Student Clubs: VIT-AP</ClubName>
              <SocialIcons>
                 <FooterLink target="_blank" href="https://www.instagram.com/dscvitap/"> <FaInstagram /> </FooterLink>
                 <FooterLink target="_blank" href ="https://www.youtube.com/channel/UC9cmRVxo5zegeCzBCMlcBcg"> <FaYoutube /> </FooterLink>
                 <FooterLink target="_blank" href="https://www.linkedin.com/company/dscvitap/"> <FaLinkedinIn /> </FooterLink>
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
