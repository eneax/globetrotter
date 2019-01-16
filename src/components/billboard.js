import React from 'react'
import styled from 'styled-components'

import { avenir, above, baskerville } from '../utils'
import bgPic from '../images/bgPic.jpg'


const HeaderWrapper = styled.header`
  background: linear-gradient(to bottom, rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), 
              url(${bgPic}) no-repeat center;
  background-size: cover;
  max-width: 100%;
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 2rem;

  ${above.mobileL`
    padding-top: 4rem;
    padding-bottom: 4rem;
  `}


  /* title */
  h1 {
    color: #fff;
    ${avenir};
    font-size: 1.5rem;
    font-weight: 600;

    ${above.mobileL`
      font-size: 3rem;
    `}
  }

  /* subtitle */
  h2 {
    color: #fff;
    ${baskerville};
    font-size: .875rem;
    font-weight: 200;
    text-transform: uppercase;

    ${above.mobileL`
      font-size: 1.25rem;
    `}
  }
`


const BillBoard = () => (
  <HeaderWrapper>
    <h1>Al Centro del Mondo</h1>
    <h2>Viaggi e Turismo</h2>
  </HeaderWrapper>
)

export default BillBoard
