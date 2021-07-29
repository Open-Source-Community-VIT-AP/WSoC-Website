import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  HamburgerIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

import logo from '../../assets/wsoc-01.svg'

function Navbar({ toggle }) {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="home" smooth={true} spy={true} exact="true" offset={-60} >
              <img src={logo} alt="logo" style={{width:'100%'}} />
          </NavLogo>

          <HamburgerIcon onClick = {toggle}>
            <FaBars />
          </HamburgerIcon>

          <NavMenu>
            <NavItem>
              <NavLink to="about" smooth={true} spy={true} exact="true" offset={-60} >About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="timeline"  smooth={true} spy={true} exact="true" offset={-60} >Timeline</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="projects"  smooth={true} spy={true} exact="true" offset={-60} >Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="archive"  smooth={true} spy={true} exact="true" offset={-60} >Archive</NavLink>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink href="#">Register</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
