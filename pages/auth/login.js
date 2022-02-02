import { AuthLayout, LoginForm } from '@/src/components/auth'

const LoginPage = () => {
  const authLayoutProps = {
    pageTitle: 'Login',
  }

  return (
    <AuthLayout {...authLayoutProps}>
      <LoginForm />
    </AuthLayout>
  )
}

export default LoginPage
