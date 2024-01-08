import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Social } from "../../../components/social/Social";
import { Form } from "../../../components/form/Form";

export const Contact = () => {
    return (
        <StyledContact>
            <SectionTitle
                Title1="Let’s Talk"
                Title2="Any questions? Contact me"
            />
            <Contacts>
                <span>+375 (29) 963-88-99</span>
                <span>alekcandrmain@gmail.com</span>
            </Contacts>
            <Social />
            <Form />
        </StyledContact>
    );
};

const StyledContact = styled.div`
text-align: center;
margin-bottom: 30px;
`
const Contacts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: center;
`