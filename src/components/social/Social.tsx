import React from "react";
import styled from "styled-components";
import InstagramImg from '../../assets/images/instagram.png'
import VkImg from '../../assets/images/vk.png'
import LinkedInImg from '../../assets/images/linkedin.png'


export const Social = () => {
    return (
        <StyledSocial>
            <Instagram src={InstagramImg} />
            <Vk src={VkImg} />
            <LinkedIn src={LinkedInImg} />
        </StyledSocial>
    );
};

const StyledSocial = styled.div`
    img {
        width: 23px;
        height: 23px;
    }

`
const Instagram = styled.img`

`
const Vk = styled.img`

`
const LinkedIn = styled.img`

`
