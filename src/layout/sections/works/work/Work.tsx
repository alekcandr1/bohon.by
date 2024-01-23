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
                <UlElementInfoItems>
                    {props.info && props.info.map((el, index) => {
                        return <InfoItems key={index}>{el}</InfoItems>
                    })}

                </UlElementInfoItems>
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
    align-items: center;
    gap: 40px;
    

    width: 49%;
    min-width: 612px;
    
    background: #fff;
    padding: 40px;
    border-radius: 30px;
    border: 1px solid ${theme.colors.borderLine};
    box-shadow: 0px 0px 80px 0px rgba(167, 154, 197, 0.20);

    @media ${theme.media.tablet} {
        min-width: 0px;
        width: 49%;
        min-width: 612px;
        flex-direction: row;
   
    }
    @media ${theme.media.mobile} {
        gap: 20px;

        min-width: 0px;
        width: fit-content;     
        flex-direction: column-reverse;
        min-width: 51%;
   
    }
`
const ImageWrapper = styled.div`
    position: relative;
    z-index: 1;
    width: fit-content;

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

    @media ${theme.media.tablet} {
        max-height: 300px;
    }
    @media ${theme.media.mobile} {
        max-height: 300px;
    }
`
const Description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
   

`
const TypeWork = styled.h3`
    color: ${theme.colors.blueBg};
    font-size: calc( (100vw - 360px)/(1920 - 360) * (16 - 15) + 15px);
    font-weight: 500;
   

`
const NameWork = styled.span`
    color: ${theme.colors.darkTitle};
    font-size: calc( (100vw - 360px)/(1920 - 360) * (23 - 20) + 20px);
    font-weight: 700;
   

`

const UlElementInfoItems = styled.ul`
    padding: 20px 0 20px 10px;

    @media ${theme.media.mobile} {
        padding: 10px 0 10px 10px;

    }
`

const InfoItems = styled.li`
   padding: 2px 0;

   &::before {
      content: '•'; /* Unicode character for a bullet point */
      color: ${theme.colors.blueBg}; /* Customize the color */
      display: inline-block;
      width: 1em;
   }

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

