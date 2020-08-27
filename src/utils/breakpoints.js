import { css } from 'styled-components'

const size = {
  mobileS: 320, // 20em
  mobileM: 375, // 23.438em
  mobileL: 425, // 26.563em
  tablet: 768, // 48em
  laptop: 1024, // 64em
  laptopL: 1440, // 90em
  desktop: 2560, // 160em
}

export const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label] / 16}em) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export const below = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${size[label] / 16}em) {
      ${css(...args)}
    }
  `
  return acc
}, {})
