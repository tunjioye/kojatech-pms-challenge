import { DashboardLayout } from '@/src/components/dashboard'

const AuthPage = () => {
  const dashboardLayoutProps = {
    pageTitle: 'Dashboard'
  }

  return (
    <DashboardLayout {...dashboardLayoutProps}>
    Welcome to our app.
  </DashboardLayout>
  )
}

export default AuthPage
