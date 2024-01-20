import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/Theme";

type MenuPropsType = {
    menuItems: Array<string>
    line?: boolean
}
 
export const Menu = (props: MenuPropsType) => {
    return (
        <StyledMenu line={props.line ? props.line : false}>
                <ul>
                    {props.menuItems.map((item, index) => {
                       return <React.Fragment key={index}>
                        <ListItem key={index}>
                            {index > 0 && props.line && <Line />}
                            <Link href="">{item}</Link>
                            
                        </ListItem>
                        </React.Fragment>
                    })}
                </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav<{line: boolean}>`
    display: flex;
    align-items: center;
    height: 100%;

    @media ${theme.media.tablet} {
        display: none;
    }

    ul {
        display: flex;
        gap: ${props => props.line ? "30px" : "60px"};
        height: 100%;
    }

`

const ListItem = styled.li`
    display: flex;
    align-items: center;
    height: 100%;
    justify-content: space-between;
    gap: 30px;

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

const Line = styled.span`
    display: flex;
    width: 1px;
    height: 20px;
    background-color: ${theme.colors.gray};

`

