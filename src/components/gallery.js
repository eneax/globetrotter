import React from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import styled from 'styled-components'

import projectList from "../data/homeData";
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


  background: linear-gradient(to bottom, rgba(0, 0, 0, .5), rgba(0, 0, 0, .5));
  transition: .5s ease;
  &:hover { opacity: .8; }


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
    const projectImgs = this.props.projectImgs;
    return (
      <>
        {
          projectList.map((project, id) => {
            const image = projectImgs.find(n => {
              return n.node.relativePath === `covers/${project.img}`;
            });
            const imageSizes = image.node.childImageSharp.fluid;
            return (
              <Link to={`/${id}`} key={id} >
                <HomeImageWrapper>
                  <Headings>
                    <h3>{project.name}</h3>
                  </Headings>

                  <Img
                    key={project.id}
                    title={project.name}
                    alt="Screenshot of Project"
                    fluid={imageSizes}
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      width: '100%',
                      height: '100%'
                    }}
                  />
                </HomeImageWrapper>
              </Link>
            );
          })
        }
      </>
    )
  }
}

export default Gallery
