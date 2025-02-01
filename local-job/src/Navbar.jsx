import React from 'react';
import './Navbar.css';
import { Link } from 'react-router';

function Navbar() {
  

  return (
    <div className='navdiv'>
      <Link to='/'>HOME</Link>
      <Link to='/aboutMe'>ABOUT_ME</Link>
    </div>
  )
}

export default Navbar;
