import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";

import Image1 from './../../../assets/images/pr1.jpg';
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import { Description } from "../../../components/Description";

const allWorks = [
    {
        image: Image1,
        type: 'Corporate website',
        name: 'Accounting services',
        info: [
            'HTML5, CSS3, JS;',
            'CSS animation, modal windows;',
            'Optimization of images, headsets, styles;',
            'Code validation testing;',
            'Analytics and goal setting;',
            'Basic SEO optimization.'
        ],
        href: 'https://accpi.by'
    },
    {
        image: require('./../../../assets/images/pr1.webp'),
        type: 'Corporate website',
        name: 'Accounting services',
        info: [
            'HTML5, CSS3, JS;',
            'CSS animation, modal windows;',
            'Optimization of images, headsets, styles;',
            'Code validation testing;',
            'Analytics and goal setting;',
            'Basic SEO optimization.'
        ],
        href: 'https://accpi.by'
    },
    {
        image: require('./../../../assets/images/pr1.webp'),
        type: 'Corporate website',
        name: 'Accounting services',
        info: [
            'HTML5, CSS3, JS;',
            'CSS animation, modal windows;',
            'Optimization of images, headsets, styles;',
            'Code validation testing;',
            'Analytics and goal setting;',
            'Basic SEO optimization.'
        ],
        href: 'https://accpi.by'
    },
    {
        image: require('./../../../assets/images/pr1.webp'),
        type: 'Corporate website',
        name: 'Accounting services',
        info: [
            'HTML5, CSS3, JS;',
            'CSS animation, modal windows;',
            'Optimization of images, headsets, styles;',
            'Code validation testing;',
            'Analytics and goal setting;',
            'Basic SEO optimization.'
        ],
        href: 'https://accpi.by'
    },
]

export const Works = () => {
    return (
        <StyledWorks id="projects">
            <Container>
                <SectionTitle Title1="Some of my works" Title2="Projects" colorTitle1="#fff" colorTitle2="#fff" />
                <Description color="#fff" text="My experience consists of developing more than 30 commercial websites: online stores, one-page websites, corporate websites, information resources."></Description>
                <Description color="#fff" text="These are often turnkey sites - from prototyping and design, to development, basic SEO and connecting CRM systems."></Description>

                <FlexWrapper wrap="wrap" gap="20px" row-gap="20px" justify="center" padding="30px 0 0 0">

                    {allWorks.map((work, index) => {

                        return <Work key={index}
                            imageSrc={work.image}
                            type={work.type}
                            name={work.name}
                            info={work.info}
                            href={work.href}
                            textLink={work.href} />
                    })}

                </FlexWrapper>

            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    position: relative;
    z-index: 1;

    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 20px;

    
    background-color: ${theme.colors.white};
    padding-top: 100px;
    @media ${theme.media.mobile} {
        padding-top: 60px;

    }

&::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 40%;
    background-color: ${theme.colors.blueBg};
    top: 0;
    left: 0;
    z-index: -1;

}

`
