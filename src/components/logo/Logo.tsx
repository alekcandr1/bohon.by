import React from "react";
import styled from "styled-components";
import LogoImg from '../../assets/images/logo1.png'


export const Logo = () => {
    return (
        <StyledLogo>
            <img src={LogoImg} alt="AB Coding" />
        </StyledLogo>
    );
};


const StyledLogo = styled.a`
`