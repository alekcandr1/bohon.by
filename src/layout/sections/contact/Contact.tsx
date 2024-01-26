import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Social } from "../../../components/social/Social";
import { Form } from "../../../components/form/Form";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Contact = () => {
    return (
        <StyledContact id="contacts">
            <Container>
                <SectionTitle
                    Title1="Let’s Talk"
                    Title2="Any questions?"
                    Title3="Contact me" 
                />
                <FlexWrapper direction="column" gap="30px">
                    <Contacts>
                        <a href="tel:+375299638899">+375 (29) 963-88-99</a>
                        <span>alekcandrmain@gmail.com</span>
                    </Contacts>
                    <Social />
                    <Form />

                </FlexWrapper>

            </Container>
        </StyledContact>
    );
};

const StyledContact = styled.div`
    background-color: ${theme.colors.primeryBg};
    text-align: center;
    padding: 100px 0;

    @media ${theme.media.mobile} {
        padding: 50px 0;    
    }
`
const Contacts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: center;

    color: ${theme.colors.darkTitle};
    text-align: center;
    font-size: calc( (100vw - 360px)/(1920 - 360) * (20 - 16) + 16px);
    font-size: clamp(16px, ( (100vw - 360px)/(1920 - 360) * (20 - 16) + 16px), 20px);

    @media ${theme.media.mobile} {
        gap: 0px;
    }

    a {
        color: ${theme.colors.darkTitle};
    }
`