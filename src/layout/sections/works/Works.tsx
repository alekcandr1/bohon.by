import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";

import Image1 from './../../../assets/images/pr1.jpg';

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
        <StyledWorks>
            <SectionTitle Title1="My works" Title2="Projects" />
            <FlexWrapper wrap="wrap" justify="center">

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
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
display:flex;
justify-content: center;
flex-direction: column;
background-color: #fff7f7;
min-height: 80vh;
gap: 50px;
min-height: 80vh;
padding-top: 20px;
`
