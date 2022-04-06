import styled from "styled-components";

export const CtShipCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    margin: 50px;
`;

export const CtImg = styled.div`
    width: 67vw;
    height: 35vw;
    overflow: hidden;
    border-bottom: 4px solid #ecab00;
`;

export const ImgShip = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`;

export const CtText = styled.div`
    width: 67vw;
    display: flex;
    justify-content: space-between;
`;

export const CtSubText = styled.div`
    display: flex;
    width: 67vw;
    justify-content: space-between;
`;

export const Text = styled.p`
    line-height: 75px;  
`;