import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import LogoImg from '../../assets/images/logo2.png'
import { Menu } from "../../components/menu/Menu";
import { Social } from "../../components/social/Social";

const headerMenu = ["Home", "Skills", "Projects", "Testimonials", "Contacts"]


export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction="column" align="center" gap="30px">
                <Logo src={LogoImg} />
                <Menu menuItems={headerMenu} />
                <Social />
                <Hr />
                <Copyright>© Copyright 2024 Bohon.by | All rights reserved</Copyright>
            </FlexWrapper>
        </StyledFooter>
            
    );
};

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 0;
    background-color: #211E39;

    a {
        text-decoration: none;
        color: #9692A1;
    }
`
const Logo = styled.img`
    width: min-content;
`

const Hr = styled.hr`
 width: 80%;
 border: 0;
 border-bottom: 1px solid #9692a155;
`

const Copyright = styled.small`
    color: #9692A1;
`


