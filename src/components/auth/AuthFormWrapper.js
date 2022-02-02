import Link from 'next/link'
import styled from 'styled-components'
import { URLS } from '@/src/constants'

export const AuthFormContainer = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid rgba(0, 0, 0, 0.02);
  border-radius: 5px;
  width: 100%;
  max-width: ${(props) => props.theme.breakpoint.md};
  padding: 2rem;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0.75rem;

    & > p {
      font-size: 1.25rem;
    }
  }
`

export const AuthFormWrapper = ({ children, title }) => (
  <AuthFormContainer>
    <div>
      <Link href={URLS.LOGIN_URL}>
        <a>
          <img src="/pms-logo.svg" height="40px" alt="PMS" />
        </a>
      </Link>
      {title && <p>{title}</p>}
    </div>
    <br />
    {children}
  </AuthFormContainer>
)

export default AuthFormWrapper
