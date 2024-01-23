import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/Theme";

type ButtonProps = {
    TextButton?: string
    bg?: string
    bgHover?: string
    color?: string
    decoration?: string
    idForm?: string
    w?: string
}


export const Button = (props: ButtonProps) => {

    return props.idForm ? (
        <StyledButton
            as="button"
            type="submit"
            bg={props.bg}
            bgHover={props.bgHover}
            color={props.color}
            w={props.w}
            decoration={props.decoration}>

                {props.TextButton || "Button"}
        </StyledButton>
    ) : (
        <StyledButton
            as="a"
            href="#"
            w={props.w}
            bg={props.bg}
            bgHover={props.bgHover}
            color={props.color}
            decoration={props.decoration}>

                {props.TextButton || "Button"}
        </StyledButton>

    );
};


const StyledButton = styled.a<ButtonProps>`
    display: inline-block;
    padding: 16px 40px;
    width: max-content;
    border-radius: 100px;

    width: ${props => props.w};
    
    transition: background-color 0.3s ease;
    font-size: calc( (100vw - 360px)/(1920 - 360) * (17 - 15) + 15px);

    background-color: ${props => props.bg || theme.colors.One};
    color: ${props => props.color || theme.colors.white};
    text-decoration: ${props => props.decoration || "none"};

    &:hover {
        background: ${props => props.bgHover || theme.colors.Two};
        text-decoration: none;

    }

    /* &:focus {
        border:0;
        outline: none;

    } */

`


