import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import logo from '../images/logo.jpg'
import { avenir, grey, darkGrey, above, below } from '../utils'


const dimOnHover = `
  text-decoration: none;
  transition: color .15s ease-in;
  opacity: 1;
  transition: opacity .15s ease-in;
  &:link,
  &:visited {
    transition: color .15s ease-in;
  }
  &:hover {
    transition: color .15s ease-in;
  }
  &:active {
    transition: color .15s ease-in;
    opacity: .8;
    transition: opacity .15s ease-out;
  }
  &:focus {
    transition: color .15s ease-in;
  }
  &:hover,
  &:focus {
    opacity: .5;
    transition: opacity .15s ease-in;
  }
`

const NavBar = styled.div`
  ${avenir};
  font-weight: 600;
  display: block;
  ${above.laptop`
    display: table;
  `}
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
  ${above.laptop`
    padding-left: 4rem;
    padding-right: 4rem;
  `}

  a {
    color: ${grey};
    display: block;
    margin-bottom: 0.5rem;
    text-align: center;
    vertical-align: middle;
    ${dimOnHover};

    ${above.laptop`
      display: table-cell;
      text-align: left;
      margin-bottom: 0;
    `}

    img {
      display: inline-block;
      width: 2rem;
      height: 2rem;
      border-radius: 100%;

      ${below.tablet`
        margin-bottom: 0;
      `}
    }
  }
`

const NavLinkWrapper = styled.div`
  display: block;
  width: 100%;
  text-align: center;

  ${above.laptop`
    display: table-cell;
    width: 75%;
    text-align: right;
  `}

  a {
    ${dimOnHover};
    color: ${darkGrey};
    font-size: .875rem;
    display: inline-block;
    margin-right: 1rem;

    ${above.laptop`
      font-size: 1rem;
      margin-right: 2rem;
    `}
  }

  a:last-child {
    margin-right: 0;
  }
`


const Header = ({ siteTitle }) => (
  <NavBar>
    <Link className="logo" to='/' title='Home'>
			<img src={logo} alt='Globetrotter Logo'/>
		</Link>
    <NavLinkWrapper>
			<Link to='/top' title='Top Tours'>Top Tours</Link>
			<Link to='/groups' title='Viaggi di Gruppo'>Viaggi di Gruppo</Link>
			<Link to='/promo' title='Offerte'>Offerte</Link>
			<Link to='/about' title='Chi Siamo'>Chi Siamo</Link>
			<Link to='/contacts' title='Contatti'>Contatti</Link>
		</NavLinkWrapper>
  </NavBar>
)

export default Header
