import React from "react";
import styled from "styled-components";
import Photo from '../../../assets/images/Photo-_1_-_1_.webp'
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Button } from "../../../components/button/Button";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import Typewriter from 'typewriter-effect';

export const Main = () => {
    return (
        <StyledMain id="home">
            <Container>
                <FlexWrapper align={"center"} justify={"center"} gap={"70px"}>
                    <StyledPhoto src={Photo} alt="Front-end developer Alexander Bokhan" />
                    <StyledContent>
                        <div>
                            <Span1>Hi, I’m a</Span1>
                            <MainTitle>front-end developer</MainTitle>
                            {/* <Name>Aleksander <span>Bokhan</span></Name> */}
                            <Name>
                                <p>Aleksander Bokhan</p>
                                <Typewriter
                                    onInit={(typewriter) => {
                                        typewriter.typeString('Aleksander Bokhan')
                                            .start();
                                    }}
                                />
                            </Name>
                            <Span2>Here you can see what I can do and what projects I have realized.</Span2>

                        </div>
                        <Btns>
                            <Button as="a" href="#contacts" TextButton="Let’s Talk" />
                            <Button as="a" href="#skills" TextButton="View skills" bg="transparent" bgHover="transparent" color={theme.colors.Two} decoration="underline" />
                        </Btns>
                    </StyledContent>
                </FlexWrapper>

            </Container>
        </StyledMain>
    );
};


const StyledPhoto = styled.img`
    width: 45%;
    height: auto;
    object-fit: cover;
`

const StyledContent = styled.div`
    width: 100%;
`

const StyledMain = styled.div`
    padding-top: 94px;
    background-color: ${theme.colors.primeryBg};
    min-height: fit-content;

    ${FlexWrapper} {
        width: 100%;
    }
    ${Container} {
        display: flex;
        flex-direction: column;
    }


    @media ${theme.media.tablet} {
        ${StyledPhoto} {
            width: 90%;
            max-width: 500px;
        }

        ${FlexWrapper} {
                flex-direction: column-reverse;
                gap: 50px;

                & > div {
                    width: 100%;
                    max-width: 550px;
                }
        }

}
`


const Span1 = styled.span`
    color: #3F396D;
    font-size: calc( (100vw - 360px)/(1920 - 360) * (45 - 25) + 25px);
    font-size: clamp(25px, ( (100vw - 360px)/(1920 - 360) * (45 - 25) + 25px), 45px);

    font-weight: 600;
`

const MainTitle = styled.h1`
    color: #3F396D;
    font-size: calc( (100vw - 360px)/(1920 - 360) * (45 - 25) + 25px);
    font-size: clamp(25px, ( (100vw - 360px)/(1920 - 360) * (45 - 25) + 25px), 45px);

    font-weight: 600;
`

const Span2 = styled.span`
    color: #9692A1;
    font-size: calc( (100vw - 360px)/(1920 - 360) * (19 - 16) + 16px);
    font-size: clamp(16px, ( (100vw - 360px)/(1920 - 360) * (19 - 16) + 16px), 19px);
    line-height: 110%;
`

const Name = styled.h2`
    color: #000;
    background: ${theme.liners.name.background};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 4rem;
    font-weight: 700;
    margin-block-end: 10px;
    font-size: calc( (100vw - 360px)/(1920 - 360) * (64 - 32) + 32px);
    font-size: clamp(32px, ( (100vw - 360px)/(1920 - 360) * (64 - 32) + 32px), 64px);

    p {
        display: none;
    }
    .Typewriter__cursor {
        -webkit-text-fill-color: ${theme.colors.darkTitle};

    }
`

const Btns = styled.div`
    padding-top: 30px;
`