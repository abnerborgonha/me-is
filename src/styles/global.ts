import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &::-webkit-scrollbar {
    width: 5px !important;
    }
    &::-webkit-scrollbar-thumb {
      background: ${props => props.theme.colors.text};
    }
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px Fira Code, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }
`
