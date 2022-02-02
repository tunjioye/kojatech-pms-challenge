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
  background: url('/auth/auth-layout-bg.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${bgColor};
  padding: 1rem;
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
