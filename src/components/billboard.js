import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import { above, avenir, baskerville } from '../utils'

const HeaderWrapper = styled.div`
  border: 5px solid #fff;
  overflow: hidden;
  position: relative;
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 2rem;

  ${above.mobileL`
    padding-top: 4rem;
    padding-bottom: 4rem;
  `}
`

const Headings = styled.div`
  position: relative;
  z-index: 2;

  h1 {
    color: #fff;
    ${avenir};
    font-size: 1.5rem;
    font-weight: 600;

    ${above.mobileL`
      font-size: 3rem;
    `}
  }

  h2 {
    color: #fff;
    ${baskerville};
    font-size: 0.875rem;
    font-weight: 200;
    text-transform: uppercase;

    ${above.mobileL`
      font-size: 1.25rem;
    `}
  }
`

const Billboard = () => (
  <StaticQuery
    query={graphql`
      query bgPic {
        bgPic: file(relativePath: { regex: "/bgPic.jpg/" }) {
          childImageSharp {
            fluid(
              maxWidth: 1240
              duotone: { highlight: "#000000", shadow: "#000000", opacity: 45 }
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Link to="/" style={{ textDecoration: 'none' }}>
        <HeaderWrapper>
          <Headings>
            <h1>Al Centro del Mondo</h1>
            <h2>Viaggi e Turismo</h2>
          </Headings>

          <Img
            fluid={data.bgPic.childImageSharp.fluid}
            alt="Globetrotter Billboard"
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '100%',
              height: '100%',
            }}
          />
        </HeaderWrapper>
      </Link>
    )}
  />
)

export default Billboard
