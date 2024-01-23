import React from "react";
import styled from "styled-components";
import { theme } from "../styles/Theme";

type TitlesProps = {
    align?: string
    Title1?: string
    Title2?: string
    colorTitle1?: string
    colorTitle2?: string
    Title3?: string
}

export const SectionTitle = (props: TitlesProps) => {
    return (
        <StyledSectionTitle align={props.align}>
            <SectionTitle1 colorTitle1={props.colorTitle1}>
                {props.Title1 || "Title 1"}
            </SectionTitle1>
            <SectionTitle2 colorTitle2={props.colorTitle2}>
                {props.Title2 || "Title 2"}
                {props.Title3 ? <><br />{props.Title3}</> : null}
            </SectionTitle2>
        </StyledSectionTitle>
    );
};

const StyledSectionTitle = styled.div<{ align?: string }>`
    display: flex;
    flex-direction: column;
    align-items: ${props => props.align || "center"};
    align-self: stretch;
    margin-bottom: 30px;
`
const SectionTitle1 = styled.p<TitlesProps>`
    color: ${props => props.colorTitle1 || theme.colors.Two};
    font-size: calc( (100vw - 360px)/(1920 - 360) * (20 - 16) + 16px);
    font-weight: 600;
`
const SectionTitle2 = styled.h2<TitlesProps>`
    background: ${props => props.colorTitle2 || theme.liners.h2.background};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: calc( (100vw - 360px)/(1920 - 360) * (45 - 25) + 25px);
    font-weight: 700;
    padding: 0 0 7px 0;

`