import React from 'react';
import { CtNavBar, Logo, PageNavBar } from './Header.styled';
import SWLogo from '../../assets/img/starwarsLogo.png';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
        <Logo src={SWLogo} alt='star wars logo' />
        <CtNavBar>
            <PageNavBar>HOME</PageNavBar>
            <div>|</div>
            <Link to={'/'} className='navBar'><PageNavBar>STARSHIPS</PageNavBar></Link>
        </CtNavBar>
    </>
  )
}
