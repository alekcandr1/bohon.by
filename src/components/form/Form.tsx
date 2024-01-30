import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/Theme";
import { Button } from "../button/Button";

export const Form = () => {
    return (
        <StyledForm id="myForm" action="main.php">
            <Field type="text" placeholder={"Name"} required />
            <Field type="phone" placeholder={"Phone"} required />
            <Message placeholder="Message" required></Message>
            {/* <StyledButton form="myForm" TextButton="Send message" w="49%" type="submit" as="button" /> */}
        </StyledForm>
    );
};

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: auto;
    width: 100%;
    max-width: 970px;
    gap: 20px;
    height: 200px;

    @media ${theme.media.mobile} {
        height: 100%;

    }
`

const StyledButton = styled(Button)`
    order: 4;
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
    

    width: 49%;
    @media ${theme.media.mobile} {
        width: 100%;
    }

    
`
const Message = styled.textarea`
    display: block;
    order: 4;
    height: 200px;
    width: 49%;

    box-shadow: 0px 0px 40px 0px rgba(112, 52, 254, 0.10);
    border-radius: 30px;
    background: ${theme.colors.white};
    padding: 18px 30px;
    border: 0;
    resize: none;

    @media ${theme.media.mobile} {
        order: 3;
        width: 100%;
    }
`