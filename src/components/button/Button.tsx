import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/Theme";

type ButtonPropsType = {
    TextButton?: string
    bg?: string
    bgHover?: string
    color?: string
    decoration?: string
    w?: string
    href?: string
    as?: "a" | "button" | null
    type?: "button" | "reset" | "submit" | undefined
    form?: string
}

export const Button = (props: ButtonPropsType) => {
    

    if (props.as === "a") {
        return (
            <StyledButtonAnchor
                href={props.href}
                bg={props.bg}
                bgHover={props.bgHover}
                color={props.color}
                w={props.w}
                decoration={props.decoration}
                role={props.as === "a" ? "link" : undefined}
                aria-label={props.as === "a" ? props.TextButton || "Link" : undefined}
            >
                {props.TextButton || "Button"}
            </StyledButtonAnchor>
        )
    } else if (props.as === "button") {
        return (
            <StyledButtonSubmit
                type={props.type}
                form={props.form}
                bg={props.bg}
                bgHover={props.bgHover}
                color={props.color}
                w={props.w}
                decoration={props.decoration}
            >
                {props.TextButton || "Button"}
            </StyledButtonSubmit>
        )
    }  else return null;
};

const commonButtonStyles = `
    display: inline-block;
    padding: 16px 40px;
    border-radius: 100px;
    transition: background-color 0.3s ease;
    font-size: calc( (100vw - 360px)/(1920 - 360) * (17 - 15) + 15px);
    font-size: clamp(15px, ( (100vw - 360px)/(1920 - 360) * (17 - 15) + 15px), 17px);
`


const StyledButtonAnchor = styled.a<ButtonPropsType>`
    ${commonButtonStyles};

    width: ${(props) => props.w || 'max-content'};
    background-color: ${(props) => props.bg || theme.colors.One};
    color: ${(props) => props.color || theme.colors.white};
    text-decoration: ${(props) => props.decoration || "none"};

    &:hover {
        background: ${(props) => props.bgHover || theme.colors.Two};
        text-decoration: none;
    }
`

const StyledButtonSubmit = styled.button<ButtonPropsType>`
    ${commonButtonStyles};

    width: ${(props) => props.w || 'max-content'};  
    background-color: ${(props) => props.bg || theme.colors.One};
    color: ${(props) => props.color || theme.colors.white};
    text-decoration: ${(props) => props.decoration || "none"};

    &:hover {
        background: ${(props) => props.bgHover || theme.colors.Two};
        text-decoration: none;
    }
`



