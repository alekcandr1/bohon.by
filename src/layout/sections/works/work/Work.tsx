import React from "react";
import styled from "styled-components";
import Icon from '../../../../assets/images/open-site.png'
import { theme } from "../../../../styles/Theme";


type WorkPropsType = {
    imageSrc: string
    type: string
    name: string
    info: Array<string>
    href: string
    textLink: string
    iconSrc?: string 
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <ImageWrapper>
                <Image src={props.imageSrc} />
                <span></span>
            </ImageWrapper>
            <Description>
                <TypeWork>{props.type}</TypeWork>
                <NameWork>{props.name}</NameWork>
                <ul>
                {props.info && props.info.map(el=>{
                    return <InfoItems>{el}</InfoItems>
                })}
                </ul>
                <Link href={props.href}>
                    <span>{props.textLink}</span>
                    <img src={props.iconSrc || Icon} alt="Open" />
                </Link>
            </Description>
        </StyledWork>
    );
};

const StyledWork = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 40px;

    width: 49%;
    min-width: min-content;
    background: #fff;
    padding: 40px;
    border-radius: 30px;
    border: 1px solid ${theme.colors.borderLine};
    box-shadow: 0px 0px 80px 0px rgba(167, 154, 197, 0.20);
`
const ImageWrapper = styled.div`
    position: relative;
    z-index: 1;

    &::before {
        content: "";
        position: absolute;
        background-color: #dbdbdb;
        width: 100%;
        height: 100%;
        z-index: 0;
        top: 12px;
        left: 12px;
    }

`
const Image = styled.img`
    max-height: 356px;
    position: relative;
    z-index: 1;
`
const Description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
   

`
const TypeWork = styled.h3`
    color: ${theme.colors.blueBg};
    font-size: 1rem;
    font-weight: 500;
   

`
const NameWork = styled.span`
    color: ${theme.colors.darkTitle};
    font-size: 1.4rem;
    font-weight: 700;
   

`
const InfoItems = styled.li`
   padding: 0px 0;

`
const Link = styled.a`
    position: relative;
    color: ${theme.colors.One};
    
    img {
        padding-left: 5px;
        position: absolute;
        top: 3px;
    }
`

