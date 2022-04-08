import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { apiStarwars } from '../../services/apiStarwars';
import notFoundImg from '../../assets/img/notFoundImg.jpg';
import { CtImg, CtShipCard, CtSubText, CtText, ImgShip, Text } from './Starship.styled';
import Header from '../header/Header';
import Loader from '../loader/Loader';
import Pilots from '../pilots/Pilots';
import Films from '../films/Films';

export default function Starship() {

  const api = apiStarwars();
  const location = useLocation();
  const { ship } = location.state;
  const [imageExists, setImageExists] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const url = ship.url;
  const regex = /(\d+)/g;
  const shipId = parseInt(url.match(regex));

  api.getShipImg(shipId).then((res) => {
    setLoading(true);
    if (res.status === 200) {
      setImageExists(true);
      setLoading(false);
    }
  }).catch(error => console.log(error.response.status));

  return (
    <>
      <CtShipCard> 
        <Header />
        {loading && <Loader/>}
        <CtImg>
          {
            imageExists ? <ImgShip src={`https://starwars-visualguide.com/assets/img/starships/${shipId}.jpg`} alt={`${ship.name} starship figure`}/> : <ImgShip src={notFoundImg} alt='figure not found'/>
          }
        </CtImg>

        <CtText>
          <h2>{(ship.name).toUpperCase()}</h2> 
        </CtText>  

        <CtSubText>
            <div>
              <Text>Model: {ship.model}</Text>
              <Text>MGLT: {ship.MGLT}</Text>
              <Text>Cargo capacity: {ship.cargo_capacity}</Text>
              <Text>Consumables: {ship.consumables}</Text>
              <Text>Cost in credits: {ship.cost_in_credits}</Text>
              <Text>Crew: {ship.crew}</Text>
            </div>
            <div>
              <Text>Hyperdrive rating:{ship.hyperdrive_rating}</Text>
              <Text>Length: {ship.length}</Text>
              <Text>Manufacturer: {ship.manufacturer}</Text>
              <Text>Max atmosphering speed: {ship.max_atmosphering_speed}</Text>
              <Text>Passengers: {ship.passengers}</Text>
              <Text>Starship class: {ship.starship_class}</Text>
            </div>
        </CtSubText>
        
        <Pilots ship={ship} />
        <Films ship={ship}/>

     </CtShipCard>
    </>
  )
}