import styled from "styled-components";

export const CtStarships = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px;
`;

export const CtStarship = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    border-radius: 10px;
    width: 65vw;
    height: 65px;
    background-color: #151515;
    margin: 10px;
    padding: 10px;
    color: #6E6E6E;
`;

export const BtViewMore = styled.button`
    background-color: #151515;
    color: #6E6E6E;
    border: none;
    width: 170px;
    height: 50px;
    border-radius: 10px;
    font-size: 1.2rem;
    margin: 15px;
    &:hover 
    {
      background-color: #6E6E6E;
      color: #151515;
    }
`;