import React from 'react';
import { CtNavBar, Logo, PageNavBar } from './Header.styled';
import SWLogo from '../../assets/img/starwarsLogo.png';
import { Link, useNavigate } from 'react-router-dom';
import { BtLogin, CtLogin, CtLogo } from '../home/Home.styled';

export default function Header() {

  let navigate = useNavigate();
  
  const logoutSubmit = (e) => {
    e.preventDefault();
    localStorage.removeItem('form');
    alert('Log out successfully');
    navigate('/', { replace: true });
  };

  return (
    <>
      <CtLogo>
        <Logo src={SWLogo} alt='star wars logo' />
        <CtLogin>
          {localStorage.getItem('form')
            ?
            <BtLogin onClick={logoutSubmit}>Log out</BtLogin>
            :
            <Link to='/login'><BtLogin>Log in</BtLogin></Link>
          }
          <div> | </div>
          <Link to='/signup'><BtLogin>Sign up</BtLogin></Link>
        </CtLogin>
      </CtLogo> 
        
      <CtNavBar>
        <Link to={'/'} className='navBar'><PageNavBar>HOME</PageNavBar></Link>
        <div>|</div>
        <Link to={'/starships'} className='navBar'><PageNavBar>STARSHIPS</PageNavBar></Link>
      </CtNavBar>
    </>
  )
}


