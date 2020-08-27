import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { SocialLink } from '../elements'
import { above, avenir, darkGrey } from '../utils'

const FooterWrapper = styled.footer`
  ${avenir};
  color: ${darkGrey};
  text-align: center;
  padding: 2rem 1rem 0 1rem;
  ${above.tablet`
		padding-left: 4rem;
		padding-right: 4rem;
	`}
  ${above.laptop`
		padding-left: 8rem;
  	padding-right: 8rem;
	`}
	small {
    display: block;
    font-size: 0.75rem;
  }
`

const Footer = () => (
  <FooterWrapper>
    <small>
      © {new Date().getFullYear()} <b>AL CENTRO DEL MONDO</b> s.r.l.
    </small>

    <SocialLink
      href="https://www.facebook.com/Al-Centro-del-Mondo-Viaggi-e-Turismo-113138121866/"
      aria-label="facebook"
    >
      <FontAwesomeIcon icon={['fab', 'facebook-f']} />
    </SocialLink>
    <SocialLink href="https://twitter.com/AlCentrodelMond" aria-label="twitter">
      <FontAwesomeIcon icon={['fab', 'twitter']} />
    </SocialLink>
    <SocialLink href="mailto:info@alcentrodelmondo.it" aria-label="mail">
      <FontAwesomeIcon icon="envelope" />
    </SocialLink>
  </FooterWrapper>
)

export default Footer
