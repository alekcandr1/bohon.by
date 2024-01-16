import React from "react";
import styled from "styled-components";
import InstagramImg from '../../assets/images/instagram.png'
import VkImg from '../../assets/images/vk.png'
import LinkedInImg from '../../assets/images/linkedin.png'
import { FlexWrapper } from "../FlexWrapper";
import { theme } from "../../styles/Theme";


export const Social = () => {
    return (
        <StyledSocial>
            <FlexWrapper justify="center" gap="10px">
                <SocialNetwork target="_blank" href="https://instagram.com/alekcandr1">
                    <img src={InstagramImg} alt="" />
                </SocialNetwork>
                <SocialNetwork target="_blank" href="https://vk.com/sasha_bohon">
                    <img src={VkImg} alt="" />
                </SocialNetwork>
                <SocialNetwork target="_blank" href="https://www.linkedin.com/in/bohon/">
                    <img src={LinkedInImg} alt="" />
                </SocialNetwork>
            </FlexWrapper>
        </StyledSocial>
    );
};

const StyledSocial = styled.div`
    img {
        width: 23px;
        height: 23px;
    }

`
const SocialNetwork = styled.a`
display: block;
padding: 13px;
background-color: ${theme.colors.white};
border-radius: 100px;

`
