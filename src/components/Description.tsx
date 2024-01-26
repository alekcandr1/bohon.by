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

@media ${theme.media.mobile} {
    width: ${props => props.w || "90%"};

}

margin: 0 auto;
padding-bottom: 30px;
text-align: center;
font-size: calc( (100vw - 360px)/(1920 - 360) * (20 - 16) + 16px);
font-size: clamp(16px, ( (100vw - 360px)/(1920 - 360) * (20 - 16) + 16px), 20px);
font-weight: 400;
    
`