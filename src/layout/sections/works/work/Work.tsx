import React from "react";
import styled from "styled-components";
import Icon from '../../../../assets/images/open-site.png'


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
    width: 50%;
    width: 591px;
    justify-content: center;
    gap: 40px;
    margin-bottom: 40px;
    background: #fff;
`
const Image = styled.img`
   

`
const Description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
   

`
const TypeWork = styled.h3`
   

`
const NameWork = styled.span`
   

`
const InfoItems = styled.ul`
   

`
const Link = styled.a`
   

`

