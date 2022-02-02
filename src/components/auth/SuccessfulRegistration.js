import Link from 'next/link'
import styled from 'styled-components'
import { Button, ButtonClass, ButtonSize } from '@/src/components/ui'
import { URLS } from '@/src/constants'

export const SuccessfulRegistrationContainer = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.breakpoint.md};
  margin-bottom: 5rem;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.primaryColor};
  color: ${(props) => props.theme.colors.white};

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    min-height: 15rem;
    padding: 1.5rem 1rem;

    &:first-child {
      justify-content: center;
    }

    &:last-child {
      background-color: ${(props) => props.theme.colors.white};
      gap: 2rem;

      & > h2 {
        font-size: 1.75rem;
        font-weight: 400;
      }

      & > p {
        font-size: 1.1rem;
        opacity: 50%;
      }
    }
  }
`

export const SuccessfulRegistration = () => (
  <SuccessfulRegistrationContainer>
    <div>
      <img src="/auth/successful-registration-icon.svg" height="50%" alt="SUCCESS" />
    </div>
    <div>
      <h2>Awesome!</h2>
      <p>Your organization has been successfully created.</p>
      <Link href={URLS.DASHBOARD_URL}>
        <a>
          <Button classes={[ButtonClass.SOLID, ButtonClass.ROUNDED]} size={ButtonSize.FULL}>
            Go to Dashboard
          </Button>
        </a>
      </Link>
    </div>
  </SuccessfulRegistrationContainer>
)

export default SuccessfulRegistration
