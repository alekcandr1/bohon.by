import React from "react";
import styled from "styled-components";


type FlexWrapperPropsType = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
    gap?: string
    row?: string
    padding?: string
    w?: string
    self?: string
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
display: flex;
flex-direction: ${props => props.direction || "row"};
justify-content: ${props => props.justify || "flex-start"};
align-items: ${props => props.align || "stretch"};
flex-wrap: ${props => props.wrap || "nowrap"};
gap: ${props => props.gap};
row-gap: ${props => props.row};
padding: ${props => props.padding || "0"};
width: ${props => props.w || ""};
align-self: ${props => props.self || ""};

height: 100%;

`