import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { above } from '../utils'
import { HeadingThree } from '../elements'


const TOP_LIST_QUERY = graphql`
  query TopList {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/src/data/top/*.md" } }
      sort: { order: ASC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
            cover {
              childImageSharp {
                fluid(maxWidth: 1240) {
                  src
                  srcSet
                  sizes
                  aspectRatio
                }
              }
            }
            day
            desc
            price
          }
        }
      }
    }
  }
`


export const Wrapper = styled.div`
	border-top-style: solid; 
  border-top-width: 1px;
  border-bottom-style: solid; 
  border-bottom-width: 1px;
  border-color: rgba(0,0,0,.1);
`

export const LinkWrapper = styled(Link)`
  display: block;
  color: #000;
  padding: 2rem 1rem;
  ${above.laptop`
    padding-right: 0;
    padding-left: 0;
  `}
  text-decoration: none;

  /* dim */
  opacity: 1;
  transition: opacity .15s ease-in;
  &:hover,
  &:focus {
    opacity: .5;
    transition: opacity .15s ease-in;
  }
  &:active {
    opacity: .8; transition: opacity .15s ease-out;
  }
`

export const Row = styled.div`
	display: flex;
  flex-direction: column;
  ${above.tablet`
    flex-direction: row;
  `}
`

export const Col = styled.div`
  width: 100%;
  ${HeadingThree};
  
  p {
    color: currentColor;
    font-size: .875rem;
    ${above.laptop`
      font-size: 1.25rem;
    `}
    line-height: 1.5;
    margin-bottom: .5rem;
  }
`

export const ColOne = styled(Col)`
  margin-bottom: 2rem;
  ${above.tablet`
    width: 40%;
    margin-bottom: 0;
    padding-right: 1rem;
  `}
`

export const ColTwo = styled(Col)`
  ${above.tablet`
    width: 60%;
    padding-left: 1rem;
    text-align: right;
  `}
`

export const LastCol = styled(Col)`
  ${above.tablet`
    text-align: center;    
  `}
`


const TopList = () => (
  <StaticQuery
    query={TOP_LIST_QUERY}
    render={(data) => (
      <>
        {data.allMarkdownRemark.edges.map(edge => (
          <Wrapper key={edge.node.frontmatter.slug}>
            <LinkWrapper
              to={`/top${edge.node.frontmatter.slug}`}
            >
              <Row>
                <ColOne>
                  <Img fluid={edge.node.frontmatter.cover.childImageSharp.fluid} />
                </ColOne>
                <ColTwo>
                  <HeadingThree>{edge.node.frontmatter.title}</HeadingThree>
                  <p style={{fontSize: '.9rem'}}>{edge.node.frontmatter.day}</p>
                  <p>{edge.node.frontmatter.desc}</p>
                  <p style={{fontSize: '.9rem'}}>{edge.node.frontmatter.price}</p>
                </ColTwo>
              </Row>
            </LinkWrapper>
          </Wrapper>
        ))}
      </>
    )}
  />
)


export default TopList
