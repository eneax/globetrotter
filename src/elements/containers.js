import { Link } from 'gatsby'
import styled from 'styled-components'

import { above, avenir, baskerville, grey } from '../utils'
import { HeadingThree, external_link_underline } from '.'

export const Container = styled.div`
  ${baskerville};
  font-size: 1.25rem;
  ${above.tablet`
		font-size: 1.5rem;
	`}
  line-height: 1.5;
  max-width: 48rem;
  margin-bottom: 4rem;
  margin-right: auto;
  margin-left: auto;
  border: 5px solid #fff;

  p {
    color: rgba(0, 0, 0, 0.7);
    margin-bottom: 2rem;
  }
`

export const ImageWrapper = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  border-right: 5px solid #fff;
  border-left: 5px solid #fff;
`

// ! Listing Styles
export const ListWrapper = styled.div`
  border-top-style: solid;
  border-top-width: 1px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: rgba(0, 0, 0, 0.1);
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
  transition: opacity 0.15s ease-in;
  &:hover,
  &:focus {
    opacity: 0.5;
    transition: opacity 0.15s ease-in;
  }
  &:active {
    opacity: 0.8;
    transition: opacity 0.15s ease-out;
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
    font-size: 0.875rem;
    ${above.laptop`
      font-size: 1.25rem;
    `}
    line-height: 1.5;
    margin-bottom: 0.5rem;
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

// ! Layout Styles
export const HeaderWrapper = styled.header`
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
`

export const LayoutWrapper = styled.div`
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
`

export const Content = styled.div`
  .copy {
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
      color: rgba(0, 0, 0, .7);
      text-align: center;
      margin-bottom: 2rem;
    }

    h3 {
      ${avenir};
      font-weight: 600;
      font-size: 1.25rem;
      ${above.tablet`
        font-size: 1.5rem;
      `}
      margin-bottom: .5rem;
    }

    p {
      line-height: 1.5;
      color: rgba(0, 0, 0, 0.7);
      ${baskerville};
      font-size: 1.25rem;
      ${above.tablet`
        font-size: 1.5rem;
      `}
      margin-bottom: 3rem;

      .external-link {
        ${external_link_underline};
      }
    }

    .quota {
      margin-bottom: 4rem;

      ul {
        ${avenir};
        list-style-type: none;
        padding-left: 0;
        margin-top: 0;
        max-width: 30em;
        margin-right: auto;
        margin-left: auto;

        li {
          display: flex;
          align-items: center;
          line-height: 1.5;
          padding: 0.25rem;
          ${above.laptop`
            padding-right: 0;
            padding-left: 0;
          `}
          border-bottom-style: solid;
          border-bottom-width: 1px;
          border-color: rgba(0, 0, 0, 0.1);

          .left {
            flex: 1 1 auto;
            min-width: 0;
            min-height: 0;

            span {
              font-size: 0.75rem;
              ${above.tablet`
                font-size: .875rem;
              `}
              display: block;
              color: rgba(0, 0, 0, 0.7);
            }
          }

          .right {
            span {
              font-size: 0.75rem;
              ${above.tablet`
                font-size: .875rem;
              `}
              font-weight: 500;
            }
          }
        }
      }
    }
  }
`

export const PicturesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;

  ${above.laptop`
    grid-template-columns: repeat(4, 1fr);
    padding-right: 8rem;
    padding-left: 8rem;
  `}

  .gatsby-image-wrapper {
    width: 100%;
    margin-right: 0.2rem;
    margin-left: 0.2rem;
  }
`

export const InfoWrapper = styled.div`
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
`

export const InfoLinks = styled.div`
  text-align: center;
  margin-top: 1rem;

  a {
    font-size: 1.25rem;
    ${above.tablet`
      font-size: 1.5rem;
    `}
  }
`
