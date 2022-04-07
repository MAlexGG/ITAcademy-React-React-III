import React,  {useState, useEffect} from 'react';
import { CtPilots, CtPilotsCard, CtPilotsCards, TextPilot } from './Pilots.styled';
import axios from 'axios';

export default function Pilots({ ship }) {

    const [pilot, setPilot] = useState([]);
    
    useEffect(() => {
      const getData = async () => {
        const pilots = ship.pilots;
        let data = await Promise.all(pilots.map(async (el) => {
            const p = await axios.get(el);
            return p.data;
        }))
        setPilot(data);
    };
        getData(); 
    }, [ship.pilots])

  return (
      <>
        {
            pilot.length > 0 ?
            <CtPilots>
                <p>Pilots:</p> 
                <CtPilotsCards>
                    {
                        pilot.map((pilot, index) => (
                            <CtPilotsCard key={index}>
                                <p>{pilot.name}</p>
                                <TextPilot>Birth year: {pilot.birth_year}</TextPilot>
                                <TextPilot>Gender: {pilot.gender}</TextPilot>
                                <TextPilot>Mass: {pilot.mass}</TextPilot>
                                <TextPilot>Height: {pilot.height}</TextPilot>
                                <TextPilot>Skin color: {pilot.skin_color}</TextPilot>
                                <TextPilot>Hair color: {pilot.hair_color}</TextPilot>
                                <TextPilot>Eye color: {pilot.eye_color}</TextPilot>
                            </CtPilotsCard>
                        ))          
                    }
                </CtPilotsCards>
            </CtPilots> :
            <div></div>
        }   
        
      </>
  )
}
