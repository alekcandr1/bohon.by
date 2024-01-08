import React from "react";
import styled from "styled-components";
import Peoples from '../../../assets/images/people.webp'
import { SectionTitle } from "../../../components/SectionTitle";
import { Slider } from "../../../components/slider/Slider";


type xxx = {
    xxx: string
}

export const Testimonials = () => {
    return (
        <StyledTestimonials>
            <Image src={Peoples} alt="" />
            <ContentTestimonials>
                <SectionTitle align="start" Title1="Testimonials" Title2="What people says" />
                <Slider />
            </ContentTestimonials>
        </StyledTestimonials>
    );
};

const StyledTestimonials = styled.section`
    min-width: 80vh;
    display: flex;
    flex-direction: row;
    justify-content: center;    
    max-width: 1280px;
    margin: auto;
    gap: 80px;
    padding: 40px 0;

`
const Image = styled.img`
    width: 413px;
    height: 406px;

`
const ContentTestimonials = styled.div`
    min-width: 787px;

`