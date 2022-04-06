import styled from "styled-components";

export const CtSignup = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 50px;
`;

export const CtSignupForm = styled.form`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 320px;
    background-color: #151515;
    border-radius: 10px;
    margin-top: 25px;
`;

export const InputSignup = styled.input`
    width: 400px;
    height: 35px;
    border: none;
    border-radius: 10px;
    padding-left: 10px;
    margin: 15px;
`;

export const CtButtonsForm = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
`; 

export const BtForm = styled.button`
    background-color: #6E6E6E;
    color: #151515;
    border: none;
    width: 95px;
    height: 40px;
    border-radius: 10px;
    font-size: 1rem;
    margin: 15px;
    &:hover 
    {
      background-color: #ecab00;
      color: #151515;
    }
`;