import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import styled from 'styled-components'

import homeList from '../data/homeData'
import { above, avenir } from '../utils'

const HomeImageWrapper = styled.div`
  border: 5px solid #fff;
  float: left;
  _display: inline;
  width: 100%;
  ${above.mobileL`
    width: 50%;
  `}
  overflow: hidden;
  position: relative;
`

const Headings = styled.div`
  position: relative;
  z-index: 2;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5)
  );
  transition: 0.5s ease;
  &:hover {
    opacity: 0.8;
  }
  text-align: center;
  padding-top: 4rem;
  padding-bottom: 4rem;
  ${above.laptop`
    padding-top: 16rem;
    padding-bottom: 16rem;
  `}

  h3 {
    color: #fff;
    ${avenir};
    font-size: 1rem;
    font-weight: 400;
    text-transform: uppercase;

    ${above.laptop`
      font-size: 2.25rem;
    `}
  }
`

class Gallery extends React.Component {
  render() {
    const { homeImgs } = this.props
    return (
      <>
        {homeList.map((home, id) => {
          const image = homeImgs.find(
            n => n.node.relativePath === `covers/${home.img}`
          )
          const imageFluid = image.node.childImageSharp.fluid
          return (
            <Link to={`/${home.id}`} key={home.id}>
              <HomeImageWrapper>
                <Headings>
                  <h3>{home.name}</h3>
                </Headings>

                <Img
                  key={home.id}
                  title={home.name}
                  alt={`${home.name} picture`}
                  fluid={imageFluid}
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '100%',
                    height: '100%',
                  }}
                />
              </HomeImageWrapper>
            </Link>
          )
        })}
      </>
    )
  }
}

export default Gallery
