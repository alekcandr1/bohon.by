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
            <Image src={props.imageSrc} />
            <Description>
                <TypeWork>{props.type}</TypeWork>
                <NameWork>{props.name}</NameWork>
                <InfoItems>{props.info}</InfoItems>
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
const Image = styled.img`
    max-height: 356px;
   

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
const InfoItems = styled.ul`
   padding: 20px 0;

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

