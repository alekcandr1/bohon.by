import React from "react";
import styled from "styled-components";
import LogoImg from '../../assets/images/logo1.png'
import { theme } from "../../styles/Theme";


export const Logo = () => {
    return (
        <StyledLogo href={"#"}>
            <img src={LogoImg} alt="AB Coding" />
        </StyledLogo>
    );
};


const StyledLogo = styled.a`

    @media ${theme.media.mobile} {
        img {
            height: 40px;
        }
    }
`