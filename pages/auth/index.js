import { useEffect } from 'react'
import Router from 'next/router'
import qs from 'qs'
import { URLS } from '@/src/constants'
import { AuthLayout } from '@/src/components/auth'

const redirectToUrl = URLS.LOGIN_URL

const AuthPage = () => {
  useEffect(() => {
    const { query = {} } = Router
    const queryString = Object.keys(query).length ? `?${qs.stringify(query)}` : ''
    Router.push(redirectToUrl + queryString)
  }, [])

  const authLayoutProps = {
    pageTitle: 'Login',
  }

  return <AuthLayout {...authLayoutProps} />
}

export default AuthPage
