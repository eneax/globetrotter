import { Link } from 'gatsby'
import styled from 'styled-components'

import { above, baskerville } from '../utils'
import { HeadingThree } from '../elements'


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
    color: rgba(0,0,0,.7);
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


// ! Layout Styles
