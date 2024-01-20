import React from "react";
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';
import styled from "styled-components";
import { Button } from "../../components/button/Button";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { theme } from "../../styles/Theme";
import { MobileMenu } from "../../components/menu/MobileMenu";

const headerMenu = ["Home", "Skills", "Projects", "Testimonials", "Contacts"]

export const Header = (props: { isMobile?: boolean }) => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify="space-between">
                    <Logo />
                    <MenuWrapper>
                        <Menu menuItems={headerMenu} />
                        <MobileMenu menuItems={headerMenu} />
                        <ButtonWrapper>
                            <Button TextButton={"Contact me"} />
                        </ButtonWrapper>
                    </MenuWrapper>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};


const StyledHeader = styled.header`
    background-color: ${theme.colors.primeryBg};
    padding: 20px 0;
`
const MenuWrapper = styled.div`
    display: flex;
    flex-direction: row; 
    gap: 60px;
    align-items: center;
`

const ButtonWrapper = styled.div`
    display: block;

    @media ${theme.media.tablet} {
        display: none;
    }
`