import React from "react";
import styled from "styled-components";
import QuotesImg from '../../assets/images/quotes.webp'
import { Pagination } from "../pagination/Pagination";
import { theme } from "../../styles/Theme";
import { FlexWrapper } from "../FlexWrapper";


export const Slider = () => {
    return (
        <StyledSlider>
            <Quotes src={QuotesImg} />

            <Testimony>
                <Slide>
                    <TextTestimony>
                        Testimonial text testimonial text testimonial text testimonial text testimonial text testimonial text testimonial text testimonial text testimonial text testimonial text testimonial text testimonial text testimonial text testimonial text testimonial text testimonial text testimonial text testimonial text testimonial text testimonial text testimonial text testimonial text testimonial text.
                    </TextTestimony>
                    <FlexWrapper direction="column" gap="5px">
                        <Name>
                            Alexandr Bokhan
                        </Name>
                        <Post>
                            CEO of company
                        </Post>

                    </FlexWrapper>
                </Slide>
                <Pagination />
            </Testimony>

        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    display: flex;
    flex-direction: row;

`
const Quotes = styled.img`
    height: 38px;
    padding-right: 15px;

`
const Testimony = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;


`
const Slide = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

`
const TextTestimony = styled.p`
color: ${theme.colors.gray};
font-size: calc( (100vw - 360px)/(1920 - 360) * (20 - 16) + 16px);
font-weight: 400;
line-height: 150%;

`
const Name = styled.span`
color: ${theme.colors.darkTitle};
font-size: calc( (100vw - 360px)/(1920 - 360) * (20 - 18) + 18px);
font-weight: 700;

`
const Post = styled.span`
    color: ${theme.colors.gray};
    font-size: calc( (100vw - 360px)/(1920 - 360) * (17 - 15) + 15px);
`


