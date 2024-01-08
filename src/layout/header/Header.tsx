import React from "react";
import {Logo} from '../../components/logo/Logo';
import {Menu} from '../../components/menu/Menu';
import styled from "styled-components";
import { Button } from "../../components/button/Button";

const headerMenu = ["Home", "Skills", "Projects", "Testimonials", "Contacts"]

export const Header = () => {
    return (
        <StyledHeader>
            <Logo />
            <MenuWrapper>
                <Menu menuItems={headerMenu} />
                <Button TextButton={"Contact me"} />
            </MenuWrapper>
            
        </StyledHeader>
    );
};


const StyledHeader = styled.header`
    background-color: #f1f1f1;
    display: flex;
    justify-content: space-between;
`
const MenuWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
    align-items: center;
`