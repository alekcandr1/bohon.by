import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { Button } from "../button/Button";

export const Form = () => {
    return (
        <StyledForm id="myForm" action="main.php">
            <FirstColumn>
                <Field type="text" placeholder={"Name"} />
                <Field type="phone" placeholder={"Phone"} />
                <Button idForm="myForm" TextButton="Send message" w="100%" />
            </FirstColumn>
            <SecondColumn>
                <Message placeholder="Message"></Message>
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
    
`
const SecondColumn = styled.div`
    width: 60%;
    
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
const Message = styled.textarea`
    height: 100%;
    width: 100%;

    box-shadow: 0px 0px 40px 0px rgba(112, 52, 254, 0.10);
    border-radius: 30px;
    background: ${theme.colors.white};
    padding: 18px 30px;
    border: 0;
    resize: none
`
