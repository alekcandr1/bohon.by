import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Icon } from "../../../components/icon/Icon";
import { SectionTitle } from "../../../components/SectionTitle";
import { theme } from "../../../styles/Theme";
import { Container } from "../../../components/Container";
import { Description } from "../../../components/Description";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle Title1="What I'm good at" Title2="My skills" />
                <Description text={"I am proficient in TypeScript, JavaScript, React, React Native, Redux-Toolkit, Material UI and Styled Components."} />
                <FlexWrapper wrap="wrap" justify="center">
                    <StyledSkill>
                        <Icon iconId={"html"} />
                    </StyledSkill>
                    <StyledSkill>
                        <Icon iconId={"css"} />
                    </StyledSkill>
                    <StyledSkill>
                        <Icon iconId={"js"} />
                    </StyledSkill>
                    <StyledSkill>
                        <Icon iconId={"react"} />
                    </StyledSkill>
                    <StyledSkill>
                        <Icon iconId={"redux"} />
                    </StyledSkill>
                    <StyledSkill>
                        <Icon iconId={"bootstrap"} />
                    </StyledSkill>
                    <StyledSkill>
                        <Icon iconId={"tailwind"} />
                    </StyledSkill>
                    <StyledSkill>
                        <Icon iconId={"sass"} />
                    </StyledSkill>
                    <StyledSkill>
                        <Icon iconId={"git"} />
                    </StyledSkill>
                    <StyledSkill>
                        <Icon iconId={"greensock"} />
                    </StyledSkill>
                    <StyledSkill>
                        <Icon iconId={"vscode"} />
                    </StyledSkill>
                    <StyledSkill>
                        <Icon iconId={"github"} />
                    </StyledSkill>
                </FlexWrapper>

            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
    display:flex;
    justify-content: center;
    flex-direction: column;
    background-color: ${theme.colors.secondaryBg};
    gap: 40px;
    padding: 100px 0;
`

const StyledSkill = styled.div`
    width: 16.666%;
    display: flex;
    justify-content: center;
    margin-bottom: 60px;
    background: #fff;
`
