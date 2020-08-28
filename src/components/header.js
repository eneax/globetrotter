import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import { avenir, grey, darkGrey, above, below } from '../utils'
import { dimOnHover } from '../elements'

const NavBar = styled.div`
  ${avenir};
  font-weight: 600;
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;

  ${above.laptop`
    display: table;
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

    .gatsby-image-wrapper {
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
  vertical-align: middle;

  ${above.laptop`
    display: table-cell;
    width: 75%;
    text-align: right;
  `}

  a {
    ${dimOnHover};
    color: ${darkGrey};
    font-size: 0.875rem;
    display: inline-block;
    margin-right: 1rem;

    ${above.mobileM`
      font-size: .975rem;
    `}
    ${above.mobileL`
      font-size: 1rem;
      margin-right: 2rem;
    `}
  }

  a:last-child {
    margin-right: 0;
  }
`

const Header = () => (
  <StaticQuery
    query={graphql`
      query logoPic {
        logoPic: file(relativePath: { regex: "/logo.jpg/" }) {
          childImageSharp {
            fluid(maxWidth: 1240) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <NavBar>
        <Link className="logo" to="/" title="Home">
          <Img
            fluid={data.logoPic.childImageSharp.fluid}
            alt="Globetrotter Logo"
          />
        </Link>
        <NavLinkWrapper>
          <Link to="/top" title="Top Tours">
            Top Tours
          </Link>
          <Link to="/groups" title="Viaggi di Gruppo">
            Viaggi di Gruppo
          </Link>
          <Link to="/promo" title="Offerte">
            Offerte
          </Link>
          <Link to="/about" title="Chi Siamo">
            Chi Siamo
          </Link>
          <Link to="/contacts" title="Contatti">
            Contatti
          </Link>
        </NavLinkWrapper>
      </NavBar>
    )}
  />
)

export default Header
