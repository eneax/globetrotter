import React from 'react';
import logo from '../images/logo.jpg';

const Header = () => {
  return (
    <div className='ph1-ns'>
      <header className="tc pv4 pv5-ns">
        <img src={logo} className="br-100 pa1 h3 w3" alt="avatar" />
        <h1 className="f3 f1-ns fw6 white avenir">Al Centro del Mondo</h1>
        <h2 className="f6 f4-ns fw2 ttu white baskerville">Viaggi e Turismo</h2>
      </header>
    </div> 
  )
}

export default Header;