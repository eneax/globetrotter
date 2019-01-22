import React, { Component } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from './layout';
import SEO from './seo';
import { avenir, above, baskerville, grey } from '../utils';
import { ExternalLink, InternalLink } from '../elements';


const HeaderWrapper = styled.header`
  padding-right: 2rem;
  padding-left: 2rem;
  ${above.tablet`
    padding-right: 4rem;
    padding-left: 4rem;
  `}
  ${above.laptop`
    padding-right: 8rem;
    padding-left: 8rem;
  `}
`;

const Wrapper = styled.div`
  padding-top: 2rem;
  max-width: 30em;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  ${avenir};

  h1 {
    font-size: 2.25rem;
    ${above.tablet`
        font-size: 3rem;
      `}
    font-weight: 600;
    float: left;
    _display: inline;
    width: 100%;
    color: rgba(0, 0, 0, 0.7);
    margin-top: 0;
    margin-bottom: 1rem;
  }

  p {
    text-align: center;
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 0.1em;
  }
`;

const Content = styled.div`
  .pictures {
    *zoom: 1;
    &:before,
    &:after {
      content: ' ';
      display: table;
    }
    &:after {
      clear: both;
    }
    border-color: rgba(0, 0, 0, 0.5);
    ${above.laptop`
      padding-right: 8rem;
      padding-left: 8rem;
    `}

    a {
      float: left;
      _display: inline;

      width: calc(100% / 3);
      &:last-child {
        width: 100%;
        ${above.tablet`
          width: 25%;
        `}
      }

      ${above.tablet`
        width: 25%;
      `}

      box-sizing: border-box;
      overflow: hidden;
      border-style: solid;
      border-width: 1px;
      border-width: 0.25rem;
      color: white;

      img {
        -moz-osx-font-smoothing: grayscale;
        backface-visibility: hidden;
        transform: translateZ(0);
        transition: transform 0.25s ease-out;
        &:hover,
        &:focus {
          transform: scale(1.05);
        }

        &:active {
          transform: scale(0.9);
        }
      }
    }
  }

  .copy {
    text-align: center;
    max-width: 48rem;
    margin: 2rem auto 4rem auto;
    color: rgba(0, 0, 0, 0.7);

    
    h2 {
      ${avenir};
      font-weight: 600;
      font-size: 1.5rem;
      ${above.tablet`
          font-size: 2.25rem;
        `}
      color: rgba(0,0,0, .7);
      text-align: center;
      margin-bottom: 1rem;
    }

    h3 {
      ${avenir};
      font-weight: 500;
      font-size: 1.25rem;
      ${above.tablet`
          font-size: 1.5rem;
        `}
    }

    p {
      line-height: 1.5;
      color: rgba(0, 0, 0, 0.7);
      ${baskerville};
      font-size: 1.25rem;
      ${above.tablet`
        font-size: 1.5rem;
      `}
    }
  }
`;


const InfoWrapper = styled.div`
  color: ${grey};
  padding-bottom: 2rem;
  padding-right: 1rem;
  padding-left: 1rem;
  ${above.tablet`
    padding-right: 4rem;
    padding-left: 4rem;
  `}
  ${above.laptop`
    padding-right: 8rem;
    padding-left: 8rem;
  `}

  p {
    text-align: center;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.7);
    ${baskerville};
    font-size: 1.25rem;
    ${above.tablet`
      font-size: 1.5rem;
    `}

    a {
      font-size: 1.25rem;
      ${above.tablet`
        font-size: 1.5rem;
      `}
    }
  }
`;

const InfoLinks = styled.div`
  text-align: center;
  margin-top: 1rem;
  
  a {
    font-size: 1.25rem;
    ${above.tablet`
      font-size: 1.5rem;
    `}
  }
`;


export default class projectLayout extends Component {
  render() {
    const { markdownRemark } = this.props.data;
    return (
      <Layout>
        <SEO title={`${markdownRemark.frontmatter.title}`} />

        <HeaderWrapper>
          <Wrapper>
            <h1>{markdownRemark.frontmatter.title}</h1>
            <p>{markdownRemark.frontmatter.price}</p>
          </Wrapper>
        </HeaderWrapper>

        <Content>
          <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
        </Content>

        <InfoWrapper>
          <p>
            Per maggiori informazioni e dettagli visita il sito internet: <ExternalLink href="http://www.smartbox.com/it/">
              www.smartbox.com/it
            </ExternalLink>
          </p>

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
};


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
`;
