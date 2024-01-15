import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/Theme";

type ButtonProps = {
    TextButton?: string
    bg?: string
    bgHover?: string
    color?: string
    decoration?: string
}

export const Button = (props: ButtonProps) => {
    return (
        <StyledButton href="#" bg={props.bg} bgHover={props.bgHover} color={props.color} decoration={props.decoration}>
            {props.TextButton || "Button"}
        </StyledButton>
    );
};


const StyledButton = styled.a<ButtonProps>`
    display: inline-block;
    padding: 16px 40px;
    width: max-content;
    border-radius: 100px;
    
    transition: background-color 0.3s ease;
    font-size: 1.05rem;

    background-color: ${props => props.bg || theme.colors.One};
    color: ${props => props.color || theme.colors.white};
    text-decoration: ${props => props.decoration || "none"};


    &:hover {
        background: ${props => props.bgHover || theme.colors.Two};
        text-decoration: none;

    }

    &:focus {
        border:0;
        outline: none;

    }

`


