import React from "react";
import styled from "styled-components";
import Peoples from '../../../assets/images/people.webp'
import { SectionTitle } from "../../../components/SectionTitle";
import { Slider } from "../../../components/slider/Slider";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { theme } from "../../../styles/Theme";


// type xxx = {
//     xxx: string
// }

export const Testimonials = () => {
    return (
        <StyledTestimonials>
            <Container>
                <FlexWrapper>
                    <Image src={Peoples} alt="" />
                    <ContentTestimonials>
                        <SectionTitle align="start" Title1="Testimonials" Title2="What people says" />
                        <Slider />
                    </ContentTestimonials>
                </FlexWrapper>
                <FlexWrapper direction="column" justify="center" align="center">
                    <ContentTestimonials>
                        <SectionTitle align="center" Title1="Testimonials" Title2="What people says" />
                        <Image src={Peoples} alt="" />
                        <Slider />
                    </ContentTestimonials>
                </FlexWrapper>
            </Container>
        </StyledTestimonials>
    );
};

const StyledTestimonials = styled.section`
    max-width: 1280px;
    margin: auto;
    padding: 80px 0;

        & > div > div:last-child {
            display: none;
        }

    @media ${theme.media.tablet} {
        
        & > div > div:first-child {
            display: none;
        }
        & > div > div:last-child {
            display: flex;
        }

        max-width: 700px;

    }
    @media ${theme.media.tablet} {
        
        padding: 50px 0;

    }

`
const Image = styled.img`
    margin: 0 auto;
    display: block;
    width: 413px;
    height: 406px;

`
const ContentTestimonials = styled.div`
    min-width: 0px;

    @media ${theme.media.tablet} {
        & > img {
            margin-bottom: 30px;
        }
    }
    @media ${theme.media.mobile} {
        & > img {
            width: 70%;
            height: auto;
        }
    }

`
