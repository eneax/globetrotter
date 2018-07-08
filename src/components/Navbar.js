import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>

      <nav>
        <Link to='/'>Logo</Link>
        <Link to='/top'>Top Tours</Link>
        <Link to='/group'>Group Trip</Link>
        <Link to='/promo'>Promotions</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </nav>

      <hr/>
    </div>
  )
}

export default Navbar;