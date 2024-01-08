import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";
import { SectionTitle } from "../../../components/SectionTitle";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle Title1="What I'm good at" Title2="My skills" />
            <FlexWrapper wrap="wrap" justify="center">
                <StyleSkill>
                    <Icon iconId={"html"} />
                </StyleSkill>
                <StyleSkill>
                    <Icon iconId={"css"} />
                </StyleSkill>
                <StyleSkill>
                    <Icon iconId={"js"} />
                </StyleSkill>
                <StyleSkill>
                    <Icon iconId={"react"} />
                </StyleSkill>
                <StyleSkill>
                    <Icon iconId={"redux"} />
                </StyleSkill>
                <StyleSkill>
                    <Icon iconId={"bootstrap"} />
                </StyleSkill>
                <StyleSkill>
                    <Icon iconId={"tailwind"} />
                </StyleSkill>
                <StyleSkill>
                    <Icon iconId={"sass"} />
                </StyleSkill>
                <StyleSkill>
                    <Icon iconId={"git"} />
                </StyleSkill>
                <StyleSkill>
                    <Icon iconId={"greensock"} />
                </StyleSkill>
                <StyleSkill>
                    <Icon iconId={"vscode"} />
                </StyleSkill>
                <StyleSkill>
                    <Icon iconId={"github"} />
                </StyleSkill>
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
display:flex;
justify-content: center;
flex-direction: column;
background-color: #e7faff;
min-height: 80vh;
gap: 50px;
`

const StyleSkill = styled.div`
width: 16.666%;
display: flex;
justify-content: center;
margin-bottom: 40px;
background: #fff;
`
