import React from "react";
import styled from "styled-components";

export const Form = () => {
    return (
        <StyledForm>
            <FirstColumn>
                <Field type="text" placeholder={"Name"} />
                <Field type="phone" placeholder={"Phone"} />
                <button type="submit">Send</button>
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
    width: fit-content;
    
`
const FirstColumn = styled.div`
    display: flex;
    flex-direction: column;

    
`
const SecondColumn = styled.div`
    
`
const Field = styled.input`
    
`
const Message = styled.textarea`
    height: 100%;
    
`
