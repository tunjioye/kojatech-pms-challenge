import React, { useState } from 'react'
import Link from 'next/link'
import { FormInput, SelectInput } from '@/src/components/ui/inputs'
import { Flex, Button, ButtonClass, ButtonSize } from '@/src/components/ui'
import { URLS } from '@/src/constants'
import AuthFormWrapper from './AuthFormWrapper'
import SuccessfulRegistration from './SuccessfulRegistration'
import { mapSelectOptions } from '@/src/utils'

export const RegisterForm = () => {
  const [justRegistered, setJustRegistered] = useState(false)

  const submitRegisterForm = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    console.log('submitted form data: ', Object.fromEntries(formData))
    setJustRegistered(true)
  }

  if (justRegistered) return <SuccessfulRegistration />

  return (
    <AuthFormWrapper title="Create your organization">
      <form onSubmit={submitRegisterForm}>
        <Flex direction="column" gap="2rem">
          <Flex direction="column">
            <FormInput label="Organization Name" name="org_name" required />
            <FormInput label="Email" type="email" name="email" required />
            <FormInput label="Password" type="password" name="password" required />
            <FormInput label="Confirm Password" type="password" name="password" required />

            <SelectInput
              label="Select Input Test"
              name="something"
              options={mapSelectOptions(['Zoja', 'Tech'])}
              placeholder="Select Something"
            />
          </Flex>

          <Flex direction="column">
            <Button type="submit" classes={[ButtonClass.SOLID]} size={ButtonSize.FULL}>
              Create
            </Button>
            <div className="color-grey">
              <span>Already have an account? </span>
              <span>
                <Link href={URLS.LOGIN_URL}>
                  <a>Sign in</a>
                </Link>
              </span>
            </div>
          </Flex>
        </Flex>
      </form>
    </AuthFormWrapper>
  )
}

export default RegisterForm
