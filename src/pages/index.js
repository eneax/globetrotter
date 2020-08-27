import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Billboard from '../components/billboard'
import Gallery from '../components/gallery'

const HomeWrapper = styled.div`
  padding-top: 0.5rem;
  margin-right: auto;
  margin-left: auto;
  &:before,
  &:after {
    content: ' ';
    display: table;
  }
  &:after {
    clear: both;
  }
  & {
    *zoom: 1;
  }
`

const IndexPage = ({ data }) => {
  const { edges: homeImgData } = data.HomeImgs

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

      <Billboard />

      <HomeWrapper>
        <Gallery homeImgs={homeImgData} />
      </HomeWrapper>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query allHomeImgsQuery {
    HomeImgs: allFile(
      sort: { order: ASC, fields: [absolutePath] }
      filter: { relativePath: { regex: "/covers/.*.jpg/" } }
    ) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            fluid(maxWidth: 1240) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
