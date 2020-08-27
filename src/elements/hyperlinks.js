import { Link } from 'gatsby'
import styled from 'styled-components'
import { above, facebook, twitter, mail, darkGrey, pueblo } from '../utils'

export const external_link_underline = `
  color: ${pueblo};
  text-decoration: none;
  transition: color .15s ease-in;
  &:link, 
  &:visited {
    transition: color .15s ease-in;
  }
  &:hover {
    transition: color .15s ease-in;
  }
  &:active {
    transition: color .15s ease-in;
  }
  &:focus {
    transition: color .15s ease-in;
    outline: 1px dotted currentColor;
  }
  &:hover,
  &:focus {
    text-decoration: underline;
  }
`

export const ExternalLink = styled.a.attrs({
  target: '_blank',
  rel: 'noopener',
})`
  display: block;
  font-size: 0.875rem;
  ${above.laptop`
    font-size: 1.25rem;
  `}
  line-height: 1.25;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;

  ${external_link_underline};
  &:nth-child(2) {
    margin-top: 0;
    margin-bottom: 0;
  }
`

export const SocialLink = styled.a.attrs({
  target: '_blank',
  rel: 'noopener',
})`
  font-size: 0.875rem;
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;
  &:hover,
  &:focus {
    transform: scale(1.05);
    svg[data-icon='facebook-f'] {
      color: ${facebook};
    }
    svg[data-icon='twitter'] {
      color: ${twitter};
    }
    svg[data-icon='envelope'] {
      color: ${mail};
    }
  }
  &:active {
    transform: scale(0.9);
  }
  display: inline-block;
  vertical-align: middle;
  padding: 0.5rem 0.5rem;
  margin-bottom: 1rem;
  color: ${darkGrey};
  svg {
    font-size: 1.25rem;
  }
`

export const dimOnHover = `
  text-decoration: none;
  transition: color .15s ease-in;
  opacity: 1;
  transition: opacity .15s ease-in;
  &:link,
  &:visited {
    transition: color .15s ease-in;
  }
  &:hover {
    transition: color .15s ease-in;
  }
  &:active {
    transition: color .15s ease-in;
    opacity: .8;
    transition: opacity .15s ease-out;
  }
  &:focus {
    transition: color .15s ease-in;
  }
  &:hover,
  &:focus {
    opacity: .5;
    transition: opacity .15s ease-in;
  }
`

export const internal_link_underline = `
	position: relative;
	text-decoration: none;
	line-height: 24px;
	&:before, 
	&:after {
		content: '';
		position: absolute;
		transition: transform .3s ease;
	}
		
	display: inline-block;
	padding-top: 10px;
	padding-bottom: 5px;
	overflow: hidden;
	&:before {
		left: 0;
		bottom: 0;
		width: 100%;
		height: 2px;
		background: ${pueblo};
		transform:  translateX(-100%);
	}
	&:hover:before {
		transform:  translateX(0);
	}
`

export const InternalLink = styled(Link)`
  color: ${pueblo};
  text-decoration: none;
  &:hover,
  &:focus {
    color: ${pueblo};
  }

  ${internal_link_underline};
`
