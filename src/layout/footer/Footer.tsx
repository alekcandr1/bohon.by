import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import LogoImg from '../../assets/images/logo2.png'
import { Menu } from "../../components/menu/Menu";
import { Social } from "../../components/social/Social";
import { Container } from "../../components/Container";
import { theme } from "../../styles/Theme";

const headerMenu = ["Home", "Skills", "Projects", "Testimonials", "Contacts"]


export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper direction="column" align="center" gap="30px">
                    <Logo src={LogoImg} />
                    <Menu line={true} menuItems={headerMenu} />
                    <Social />
                    <Hr />
                    <Copyright>© Copyright {new Date().getFullYear()} Bohon.by | All rights reserved</Copyright>
                </FlexWrapper>
            </Container>
        </StyledFooter>
            
    );
};

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 0;
    background-color: #211E39;

    a {
        text-decoration: none;
        color: ${theme.colors.gray};
    }
`
const Logo = styled.img`
    width: min-content;
`

const Hr = styled.hr`
    margin-top: 20px;
    width: 80%;
    border: 0;
    border-bottom: 1px solid #9692a155;
`

const Copyright = styled.small`
    color: ${theme.colors.gray};
    font-size: 0.9rem;
`


