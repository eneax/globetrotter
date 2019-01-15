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
