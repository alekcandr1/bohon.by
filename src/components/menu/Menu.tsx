import React from "react";
import styled from "styled-components";

export const Menu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenu>
            <MenuItems>
                <ul>
                    {props.menuItems.map((item, index) => {
                        return <li key={index}>
                            <a href="">{item}</a>
                        </li>
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

`

const MenuItems = styled.nav`
    ul {
        display: flex;
        gap: 60px;
    }
    li {
        display: block;
    }
`