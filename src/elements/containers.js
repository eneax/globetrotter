import styled from 'styled-components'
import { above, baskerville } from '../utils'


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
