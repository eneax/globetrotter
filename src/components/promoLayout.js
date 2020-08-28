import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from './layout'
import SEO from './seo'

import {
  HeaderWrapper,
  LayoutWrapper,
  Content,
  PicturesWrapper,
  InfoWrapper,
  InfoLinks,
  ExternalLink,
  InternalLink,
} from '../elements'

export const promoQueryImg = graphql`
  fragment promoQueryImg on File {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const query = graphql`
  query PromoQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        slug
        price
        imgOne {
          ...promoQueryImg
        }
        imgTwo {
          ...promoQueryImg
        }
        imgThree {
          ...promoQueryImg
        }
        imgFour {
          ...promoQueryImg
        }
      }
    }
  }
`

const PromoLayout = ({ data }) => {
  const {
    markdownRemark: { frontmatter, html },
  } = data
  const { title, price, imgOne, imgTwo, imgThree, imgFour } = frontmatter
  const images = [imgOne, imgTwo, imgThree, imgFour]

  return (
    <Layout>
      <SEO title={`${title}`} />

      <HeaderWrapper>
        <LayoutWrapper>
          <h1>{title}</h1>
          <p>{price}</p>
        </LayoutWrapper>
      </HeaderWrapper>

      <Content>
        <PicturesWrapper>
          {images.map((img, i) => (
            <Img
              fluid={img.childImageSharp.fluid}
              alt={`${title} Image`}
              key={i}
            />
          ))}
        </PicturesWrapper>

        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Content>

      <InfoWrapper>
        <InfoLinks>
          <InternalLink to="/promo">Torna alle offerte</InternalLink>
          <ExternalLink href="mailto:info@alcentrodelmondo.it">
            Richiedi informazioni
          </ExternalLink>
        </InfoLinks>
      </InfoWrapper>
    </Layout>
  )
}

PromoLayout.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string.isRequired,
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        imgOne: PropTypes.object.isRequired,
        imgTwo: PropTypes.object.isRequired,
        imgThree: PropTypes.object.isRequired,
        imgFour: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}

export default PromoLayout
