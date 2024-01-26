import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { Button } from "../button/Button";

export const Form = () => {
    return (
        <StyledForm id="myForm" action="main.php">
            <FirstColumn>
                <Field type="text" placeholder={"Name"} required />
                <Field type="phone" placeholder={"Phone"} required />
                <Message1 placeholder="Message" required></Message1>
                <Button form="myForm" TextButton="Send message" w="100%" type="submit" as="button" />
            </FirstColumn>
            <SecondColumn>
                <Message2 placeholder="Message"></Message2>
            </SecondColumn>
        </StyledForm>
    );
};

const StyledForm = styled.form`
    display: flex;
    flex-direction: row;
    margin: auto;
    width: 100%;
    max-width: 970px;
    gap: 20px;

    
`
const FirstColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    gap: 20px;
    @media ${theme.media.mobile} {
        width: 100%;
    }

    
`
const SecondColumn = styled.div`
    width: 60%;
    @media ${theme.media.mobile} {
        display: none;
    }

    
`
const Field = styled.input`
    border-radius: 30px;
    border: none;
    background: ${theme.colors.white};
    display: flex;
    padding: 18px 30px;
    align-items: flex-start;
    flex-shrink: 0;
    align-self: stretch;
    color: ${theme.colors.placeholder};
    font-size: 1rem;
    box-shadow: 0px 0px 40px 0px rgba(112, 52, 254, 0.10);
    
`
const Message1 = styled.textarea`
    display: none;
    height: 200px;
    width: 100%;

    box-shadow: 0px 0px 40px 0px rgba(112, 52, 254, 0.10);
    border-radius: 30px;
    background: ${theme.colors.white};
    padding: 18px 30px;
    border: 0;
    resize: none;

    @media ${theme.media.mobile} {
        display: block;
    }
`

const Message2 = styled.textarea`
    height: 100%;
    width: 100%;

    box-shadow: 0px 0px 40px 0px rgba(112, 52, 254, 0.10);
    border-radius: 30px;
    background: ${theme.colors.white};
    padding: 18px 30px;
    border: 0;
    resize: none;
`
