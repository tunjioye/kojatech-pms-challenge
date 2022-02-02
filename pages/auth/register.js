import { AuthLayout, RegisterForm } from '@/src/components/auth'

const RegisterPage = () => {
  const authLayoutProps = {
    pageTitle: 'Register',
  }

  return (
    <AuthLayout {...authLayoutProps}>
      <RegisterForm />
    </AuthLayout>
  )
}

export default RegisterPage
