import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'

const DashboardLayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > main {
  }

  /* media queries */
  @media (max-width: ${(props) => props.theme.breakpoint.md}) {
  }
`

export const DashboardLayout = ({ pageTitle, children }) => (
  <DashboardLayoutContainer>
    <Head>
      <title>PMS Challenge - {pageTitle}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <main>{children}</main>
  </DashboardLayoutContainer>
)

export default DashboardLayout
