import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import { FormInput, CheckboxInput } from '@/src/components/ui/inputs'
import { Flex, Button, ButtonClass, ButtonSize } from '@/src/components/ui'
import { URLS } from '@/src/constants'
import AuthFormWrapper from './AuthFormWrapper'

export const LoginForm = () => {
  const submitLoginForm = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    console.log('submitted form data: ', Object.fromEntries(formData))
    Router.push(URLS.DASHBOARD_URL)
  }

  return (
    <AuthFormWrapper title="Sign in to your account">
      <form onSubmit={submitLoginForm}>
        <Flex direction="column" gap="2rem">
          <Flex direction="column">
            <FormInput label="Email Address" type="email" name="email" required />
            <FormInput label="Password" type="password" name="password" required />

            <Flex justify="space-between">
              <CheckboxInput label="Remember me" name="remember_me" />

              <Link href={URLS.FORGOT_PASSWORD_URL}>
                <a>Forgot Password?</a>
              </Link>
            </Flex>
          </Flex>

          <Flex direction="column">
            <Button type="submit" classes={[ButtonClass.SOLID]} size={ButtonSize.FULL}>
              Sign In
            </Button>
            <div className="color-grey">
              <span>Don’t have an account? </span>
              <span>
                <Link href={URLS.REGISTER_URL}>
                  <a>Sign up</a>
                </Link>
              </span>
            </div>
          </Flex>
        </Flex>
      </form>
    </AuthFormWrapper>
  )
}

export default LoginForm
