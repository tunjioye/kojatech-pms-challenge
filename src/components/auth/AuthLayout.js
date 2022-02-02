import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'

const bgColor = '#F3F4F9'

const AuthLayoutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('/auth/auth-layout-bg-effect-1.svg'), url('/auth/auth-layout-bg-effect-2.svg');
  background-size: 260px, auto;
  background-position: bottom left, calc(100% + 96px) 10vh;
  background-repeat: no-repeat;
  background-color: ${bgColor};
  padding: 1rem;

  /* media queries */
  @media (min-width: ${(props) => props.theme.breakpoint.sm}) {
    background-size: auto;
    background-position: bottom left, right 20vh;
  }
`

export const AuthLayout = ({ pageTitle, children }) => (
  <AuthLayoutContainer>
    <Head>
      <title>PMS Challenge - {pageTitle}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {children}
  </AuthLayoutContainer>
)

export default AuthLayout
