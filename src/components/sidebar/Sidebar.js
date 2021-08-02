import React from "react";
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarBtn } from "./SidebarElements";

function Sidebar({isOpen, toggle}) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle} >About</SidebarLink>
          <SidebarLink to="projects" onClick={toggle} >Projects</SidebarLink>
          <SidebarLink to="timeline" onClick={toggle} >Timeline</SidebarLink>
          <SidebarLink to="archive" onClick={toggle} >Archive</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarBtn to="register"  onClick={toggle} >Register</SidebarBtn>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;
