import React from "react";
import styled from "styled-components";
import QuotesImg from '../../assets/images/quotes.webp'
import { Pagination } from "../pagination/Pagination";


export const Slider = () => {
    return (
        <StyledSlider>
            <Quotes src={QuotesImg} />

            <Testimony>
                <Slide>
                    <TextTestimony>
                        Testimonial text testimonial text testimonial text testimonial text testimonial text testimonial text testimonial text testimonial text testimonial text testimonial text testimonial text testimonial text testimonial text testimonial text testimonial text testimonial text testimonial text testimonial text testimonial text testimonial text testimonial text testimonial text testimonial text.
                    </TextTestimony>
                    <Name>
                        Alexandr Bokhan
                    </Name>
                    <Post>
                        CEO of company
                    </Post>
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
    width: 37px;
    height: 38px;
`
const Testimony = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;


`
const Slide = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

`
const TextTestimony = styled.p`

`
const Name = styled.span`

`
const Post = styled.span`

`


