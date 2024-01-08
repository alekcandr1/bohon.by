import React from "react";
import styled from "styled-components";

type ButtonProps = {
    TextButton?: string
}

export const Button = (props: ButtonProps) => {
    return (
        <StyledButton href="#">
            {props.TextButton || "Button"}
        </StyledButton>
    );
};


const StyledButton = styled.a`
    display: inline-block;
    padding: 10px;
`