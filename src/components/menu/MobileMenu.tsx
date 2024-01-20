import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../styles/Theme";

type MenuPropsType = {
    menuItems: Array<string>
}
 
export const MobileMenu = (props: MenuPropsType) => {
    return (
        <StyledMobileMenu>

            <BurgerButton isOpen={false}>
                <span></span>
            </BurgerButton>

            <MenuItemsPopup isOpen={false}>
                <ul>
                        {props.menuItems.map((item, index) => {
                        return <React.Fragment key={index}>
                            <ListItem key={index}>
                                <Link href="">{item}</Link>
                                
                            </ListItem>
                            </React.Fragment>
                        })}
                </ul>

            </MenuItemsPopup>

        </StyledMobileMenu>
    );
};

const StyledMobileMenu = styled.nav`
    display: none;

    @media ${theme.media.tablet} {
        display: flex;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;
    }

`


const MenuItemsPopup = styled.div<{isOpen: boolean}>`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 99999;
    display: none;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.primeryBg};

    ${props => props.isOpen && css<{isOpen: boolean}>`
        display: flex;
    `}
`


const BurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;
    width: 200px;
    height: 200px;
    top: -100px;
    right: -100px;
    z-index: 999999;


    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.text};
        position: absolute;
        left: 40px;
        bottom: 50px;

        ${props => props.isOpen && css<{isOpen: boolean}>`
            background-color: rgba(255, 255, 255, 0);
        `}

        &::before {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.text};
            position: absolute;
            transform: translateY(-10px);
            
            ${props => props.isOpen && css<{isOpen: boolean}>`
            transform: rotate(-45deg) translateY(0px);

            `}

            
        }
        &::after {
            content: "";
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${theme.colors.text};
            position: absolute;
            right: 0;
            transform: translateY(10px);

            ${props => props.isOpen && css<{isOpen: boolean}>`
            transform: rotate(45deg) translateY(0px);
            width: 36px;


            `}

        }
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
    color: ${theme.colors.Two};
    font-size: 2rem;
    font-style: normal; 
    font-weight: 500;
    line-height: normal;
    transition: color 0.2s ease;

    &:hover {
        color: ${theme.colors.One};
    }
`

