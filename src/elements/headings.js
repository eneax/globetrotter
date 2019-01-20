import styled from 'styled-components'
import { above, avenir } from '../utils'


export const Title = styled.h1`
  ${avenir};
  font-size: 1.25rem;
  ${above.tablet`
		font-size: 2.25rem;
	`}
  font-weight: 600;
  padding-right: 1rem;
  padding-left: 1rem;
  ${above.laptop`
		padding-right: 1rem;
    padding-left: 1rem;
	`}
  margin-top: 1rem;
  margin-bottom: 2rem;
`
  