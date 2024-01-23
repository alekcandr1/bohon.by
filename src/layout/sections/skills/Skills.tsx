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
                <FlexWrapper wrap="wrap" justify="center" padding="20px 0 0 0">
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
                        <Icon iconId={"react"} width="120" height="120" viewBox="0 0 120 100" />
                    </StyledSkill>
                    <StyledSkill>
                        <Icon iconId={"redux"} />
                    </StyledSkill>
                    <StyledSkill>
                        <Icon iconId={"bootstrap"} width="100" height="100" viewBox="0 0 90 90" />
                    </StyledSkill>
                    <StyledSkill>
                        <Icon iconId={"tailwind"} width="120" height="120" viewBox="0 0 130 130"  />
                    </StyledSkill>
                    <StyledSkill>
                        <Icon iconId={"sass"} width="120" height="90" viewBox="0 0 130 90" />
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
                        <Icon iconId={"github"} width="110" height="110" viewBox="0 0 100 100" />
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
    padding: 100px 0;
`

const StyledSkill = styled.div`
    width: 16.666%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    margin-bottom: 60px;

    @media ${theme.media.tablet} {
        margin-bottom: 30px;
        width: 25%;
        
    }
    @media ${theme.media.mobile} {
        margin-bottom: 0px;    
    }
`
