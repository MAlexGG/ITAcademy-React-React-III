import React from 'react'
import { Link } from 'react-router-dom';
import { BtStarships, CtHome, CtInfo, CtShipsImg, ImgPrincipal, ImgShips, TxtButton, TxtHome } from './Home.styled';
import Header from '../../components/header/Header';
import ships from '../../assets/img/ships.jpg';
import imgPrincipal from '../../assets/img/starwars01.png';

export default function Home() {
  return (
    <CtHome>
        <Header />
        <ImgPrincipal src={imgPrincipal} alt='star wars scene' />
        <CtInfo>
            <TxtHome>Star Wars is an American epic space-opera multimedia franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop-culture phenomenon. The franchise has been expanded into various films and other media, including television series, video games, novels, comic books, theme park attractions, and themed areas, comprising an all-encompassing fictional universe.</TxtHome> 
            <Link to={'/starships'}>
            <BtStarships name='starships'>
                <CtShipsImg>
                <ImgShips src={ships} alt='ships'/>
                </CtShipsImg>
                <TxtButton>STARSHIPS</TxtButton>
            </BtStarships>
            </Link>
          </CtInfo>  
    </CtHome>
  )
}

