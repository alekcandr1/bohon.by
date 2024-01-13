import React from "react";
import styled from "styled-components";
import Photo from '../../../assets/images/Photo-_1_-_1_.webp'
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Button } from "../../../components/button/Button";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"center"} gap={"70px"}>
                    <StyledPhoto src={Photo} alt="" />

                    <div>
                        <div>
                            <Span1>Hi 👋, I’m a</Span1>
                            <MainTitle>front-end developer</MainTitle>
                            <Name>Aleksander <span>Bokhan</span></Name>
                            <Span2>Here you can see what I can do and what projects I have realized.</Span2>

                        </div>
                        <Btns>
                            <Button TextButton="Let’s Talk" />
                            <Button TextButton="View skills" bg="transparent" bgHover="transparent" color={theme.colors.Two} decoration="underline" />
                        </Btns>
                    </div>

                </FlexWrapper>

            </Container>
        </StyledMain>
    );
};



const StyledMain = styled.div`
    background-color: ${theme.colors.primeryBg};
`

const StyledPhoto = styled.img`
width: 45%;
height: auto;
object-fit: cover;
`

const Span1 = styled.span`
color: #3F396D;
font-size: 2.5rem;
font-weight: 600;
`
const Span2 = styled.span`
color: #9692A1;
font-size: 1.2rem;
line-height: 25px;
`
const MainTitle = styled.h1`
color: #3F396D;
font-size: 2.5rem;
font-weight: 600;
`

const Name = styled.h2`

background: ${theme.liners.name.background};
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
font-size: 4rem;
font-weight: 700;
margin-block-end: 10px;

`

const Btns = styled.div`
    padding-top: 30px;
`