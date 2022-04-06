import styled from "styled-components";

export const CtHome = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 50px;
`;

export const CtContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ImgPrincipal = styled.img`
    width: 65vw;
`;

export const CtInfo = styled.div`
    display:flex;
    width: 65vw;
    margin: 40px;
`;

export const BtStarships = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #151515;
    color: #ecab00;
    border: none;
    width: 150px;
    height: 180px;
    border-radius: 10px;
    &:hover 
    {
      background-color: #6E6E6E;
      color: #151515;
    }
`;

export const CtShipsImg = styled.div`
    width: 135px;
    height: 135px;
    overflow: hidden;
`;

export const ImgShips = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;


export const TxtHome = styled.p`
    width: 65vw;
    text-align: justify;
    margin-right: 30px;
`;

export const TxtButton = styled.p`
    font-size: 1rem;
    font-family: DeathStar;
`;