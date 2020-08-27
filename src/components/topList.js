import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import {
  ListWrapper,
  LinkWrapper,
  Row,
  ColOne,
  ColTwo,
  HeadingThree,
} from '../elements'

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

const TopList = () => (
  <StaticQuery
    query={TOP_LIST_QUERY}
    render={data => (
      <>
        {data.allMarkdownRemark.edges.map(edge => (
          <ListWrapper key={edge.node.frontmatter.slug}>
            <LinkWrapper to={`/top${edge.node.frontmatter.slug}`}>
              <Row>
                <ColOne>
                  <Img
                    fluid={edge.node.frontmatter.cover.childImageSharp.fluid}
                  />
                </ColOne>
                <ColTwo>
                  <HeadingThree>{edge.node.frontmatter.title}</HeadingThree>
                  <p style={{ fontSize: '.9rem' }}>
                    {edge.node.frontmatter.day}
                  </p>
                  <p>{edge.node.frontmatter.desc}</p>
                  <p style={{ fontSize: '.9rem' }}>
                    {edge.node.frontmatter.price}
                  </p>
                </ColTwo>
              </Row>
            </LinkWrapper>
          </ListWrapper>
        ))}
      </>
    )}
  />
)

export default TopList
