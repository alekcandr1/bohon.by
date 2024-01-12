import React from "react";
import styled from "styled-components";
import Photo from '../../../assets/images/photo.webp'
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Button } from "../../../components/button/Button";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"center"} gap={"70px"}>
                <StyledPhoto src={Photo} alt="" />

                <div>
                    <div>
                        <Span1>Hi 👋, I’m a</Span1>
                        <MainTitle>front-end developer</MainTitle>
                        <Name>Aleksander Bokhan</Name>
                        <Span2>Here you can see what I can do and what projects I have realized.</Span2>

                    </div>
                    <div>
                        <Button TextButton="Let’s Talk" />
                        <Button TextButton="View skills" />
                        {/* <a href="#">View skills</a> */}
                    </div>
                </div>

            </FlexWrapper>
        </StyledMain>
    );
};



const StyledMain = styled.div`
`

const StyledPhoto = styled.img`
width: 555px;
height: 597px;
object-fit: cover;
`

const Span1 = styled.span`
color: #3F396D;
font-size: 45px;
font-style: normal;
font-weight: 600;
line-height: normal;
`
const Span2 = styled.span`
color: #9692A1;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 25px;
`
const MainTitle = styled.h1`
color: #3F396D;
font-size: 45px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-block-start: 0em;
margin-block-end: 0em;
`

const Name = styled.h2`
background: linear-gradient(270deg, #5956E9 2.78%, #6024DE 99.87%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
font-size: 70px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-block-start: 0em;
margin-block-end: 0em;
`
