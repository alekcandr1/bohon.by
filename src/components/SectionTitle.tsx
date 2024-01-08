import React from "react";
import styled from "styled-components";

type TitlesProps = {
    align?: string
    Title1?: string
    Title2?: string
}

export const SectionTitle = (props: TitlesProps) => {
    return (
        <StyledSectionTitle align={props.align}>
            <SectionTitle1>{props.Title1 || "Title 1"}</SectionTitle1>
            <SectionTitle2>{props.Title2 || "Title 2"}</SectionTitle2>
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
const SectionTitle1 = styled.p`

`
const SectionTitle2 = styled.h2`

`