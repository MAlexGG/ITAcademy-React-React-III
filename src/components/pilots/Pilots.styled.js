import styled from 'styled-components';

export const CtPilots = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 67vw;
    margin-top: 30px;
`; 

export const CtPilotsCards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 10px;
    margin-top: 20px;
`; 

export const CtPilotsCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    background-color: #151515;
    color: #ecab00;
    border: none;
    width: 205px;
    height: 240px;
    border-radius: 15px;
    padding: 15px;
`;

export const TextPilot = styled.p`
    color: #6E6E6E;
`;