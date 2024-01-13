import React from "react";
import styled from "styled-components";
import { theme } from "../styles/Theme";

type DescriptionPropsType = {
    text: string
    color?: string
    w?: string
}

export const Description = (props: DescriptionPropsType) => {
    return (
        <StyledDescription text={props.text} color={props.color} w={props.w}>
            {props.text}
        </StyledDescription>
    );
}

const StyledDescription = styled.p<DescriptionPropsType>`
color: ${props => props.color || theme.colors.text};
width: ${props => props.w || "60%"};

margin: 0 auto;
padding-bottom: 50px;
text-align: center;
font-size: 1.3rem;
font-weight: 400;
    
`