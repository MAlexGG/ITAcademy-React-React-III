import React from 'react';
import { CtNavBar, Logo, PageNavBar } from './Header.styled';
import SWLogo from '../../assets/img/starwarsLogo.png';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
        <Logo src={SWLogo} alt='star wars logo' />
        <CtNavBar>
            <Link to={'/'} className='navBar'><PageNavBar>HOME</PageNavBar></Link>
            <div>|</div>
            <Link to={'/starships'} className='navBar'><PageNavBar>STARSHIPS</PageNavBar></Link>
        </CtNavBar>
    </>
  )
}
