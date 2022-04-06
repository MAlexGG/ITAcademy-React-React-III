import styled from "styled-components";

export const Logo = styled.img`
    width: 200px;
    margin-bottom: 30px;
`;

export const CtNavBar = styled.div`
    width: 66vw;
    height: 30px;
    border-bottom: 1px solid #6E6E6E;
    border-top: 1px solid #6E6E6E;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;
`;

export const PageNavBar = styled.button`
    color: #6E6E6E;
    margin: 0px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    height: 100%;
    &:hover{
       color: white;
       border-bottom: 2px solid #ecab00; 
    }
`;