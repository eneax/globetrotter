import React, { Component } from 'react';
import { graphql } from 'gatsby';

import Layout from './layout';
import SEO from './seo';

import { HeaderWrapper, LayoutWrapper, Content, InfoWrapper, InfoLinks, ExternalLink, InternalLink } from '../elements';


export default class promoLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data;
    return (
      <Layout>
        <SEO title={`${markdownRemark.frontmatter.title}`} />

        <HeaderWrapper>
          <LayoutWrapper>
            <h1>{markdownRemark.frontmatter.title}</h1>
            <p>{markdownRemark.frontmatter.price}</p>
          </LayoutWrapper>
        </HeaderWrapper>

        <Content>
          <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
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
}


export const query = graphql`
  query PromoQuery($slug: String!) {
    markdownRemark(frontmatter: {
      slug: {
        eq: $slug
      }
    }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        slug
        price
      }
    }
  }
`
