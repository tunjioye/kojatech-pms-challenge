import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

export const theme = {
  colors: {
    black: '#000000',
    checkboxDefaultBg: '#D4D7DA',
    dividerColor: '#C2C9D1',
    green: '#00AC26',
    inputBorder: '#D1DCDE',
    primaryColor: '#6B51DF',
    red: '##FF0000',
    textColor: '#242E3E',
    transparent: 'transparent',
    white: '#FFFFFF',
  },
  breakpoint: {
    lg: '1024px',
    md: '600px',
    sm: '400px',
  },
}

const GlobalStyle = createGlobalStyle`
html,
body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
input,
button {
  padding: 0;
  margin: 0;
  font-family: Rubik, sans-serif;
  color: ${(props) => props.theme.colors.textColor};
}

a {
  color: ${(props) => props.theme.colors.primaryColor};
  text-decoration: none;

  &:focus,
  &:hover {
    color: ${(props) => props.theme.colors.primaryColor}CC;
  }
}

* {
  box-sizing: border-box;
}

.color-grey {
  color: ${(props) => props.theme.colors.textColor}88;
}
`

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      {children}
    </>
  </ThemeProvider>
)

export default Theme
