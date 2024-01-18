import React from "react";
import styled from "styled-components";
import Peoples from '../../../assets/images/people.webp'
import { SectionTitle } from "../../../components/SectionTitle";
import { Slider } from "../../../components/slider/Slider";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";


type xxx = {
    xxx: string
}

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
            </Container>
        </StyledTestimonials>
    );
};

const StyledTestimonials = styled.section`
    max-width: 1280px;
    margin: auto;
    padding: 80px 0;

`
const Image = styled.img`
    width: 413px;
    height: 406px;

`
const ContentTestimonials = styled.div`
    min-width: 550px;

`