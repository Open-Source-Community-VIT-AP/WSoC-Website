import styled from 'styled-components';
import{ Link as LinkS }from 'react-scroll'
import {FaTimes} from 'react-icons/fa'

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #160041;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    top: ${({ isOpen }) => (isOpen ? 0 : '-100%')};
    /* transform: ${({ isOpen }) => (isOpen ? 'translateY(100%)' : 'translateY(-100%)')}; */

`

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`

export const Icon = styled.div`
    position : absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`
export const SidebarWrapper = styled.div`
    color: #fff;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6,80px);
    align-items: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6,60px);
    }
`

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;
    font-weight: 500;
    letter-spacing: 0.5px;

    &:hover {
        color: #41E5FF;
        transition: 0.2s ease-in-out;
    }
`

export const SideBtnWrap= styled.div`
    display: flex;
    justify-content: center;
`

export const SidebarBtn = styled.a`
    border-radius: 5px;
    background: #41E5FF;
    white-space: nowrap;
    padding: 16px 64px;
    color: #160041;
    font-size: 18px;
    outline: none;
    border:none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-weight: 500;
    letter-spacing: 0.5px;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #18A0FB;
    }
`
