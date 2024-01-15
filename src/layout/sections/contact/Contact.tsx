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
        <StyledContact>
            <Container>
                <SectionTitle
                    Title1="Let’s Talk"
                    Title2="Any questions?"
                    Title2Line2="Contact me"
                />
                <FlexWrapper direction="column" gap="30px">
                    <Contacts>
                        <span>+375 (29) 963-88-99</span>
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
    padding: 80px 0;
`
const Contacts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: center;

    color: ${theme.colors.darkTitle};
    text-align: center;
    font-size: 1.2rem;
`