import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="db dt-l w-100 border-box pa3 ph5-l">
      <Link to='/' className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" title="Home">
        <img src="http://tachyons.io/img/logo.jpg" className="dib w2 h2 br-100" alt="Logo" />
      </Link>

      <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
        <Link to='/top' className="link dim dark-gray f6 f5-l dib mr3 mr4-l" title="Top Tours">Top Tours</Link>
        <Link to='/group' className="link dim dark-gray f6 f5-l dib mr3 mr4-l" title="Group Trip">Group Trip</Link>
        <Link to='/promo' className="link dim dark-gray f6 f5-l dib mr3 mr4-l" title="Promotions">Promotions</Link>
        <Link to='/about' className="link dim dark-gray f6 f5-l dib mr3 mr4-l" title="About">About</Link>
        <Link to='/contact' className="link dim dark-gray f6 f5-l dib" title="Contact">Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar;