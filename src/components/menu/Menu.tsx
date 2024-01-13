import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/Theme";

export const Menu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenu>
            <MenuItems>
                <ul>
                    {props.menuItems.map((item, index) => {
                        return <ListItem key={index}>
                            <Link href="">{item}</Link>
                        </ListItem>
                    })}
                </ul>
            </MenuItems>

        </StyledMenu>
    );
};

const StyledMenu = styled.div`
    display: flex;
    gap: 60px;
    align-items: center;
    height: 100%;

`

const MenuItems = styled.nav`
    height: 100%;

    ul {
        display: flex;
        gap: 60px;
        height: 100%;
    }
`

const ListItem = styled.li`
    display: flex;
    align-items: center;
    height: 100%;
`

const Link = styled.a`
    display: flex;
    align-items: center;
    height: 100%;
    color: ${theme.colors.text};
    font-size: 1.05rem;
    font-style: normal; 
    font-weight: 500;
    line-height: normal;
    transition: color 0.2s ease;

    &:hover {
        color: ${theme.colors.One};
    }


`

