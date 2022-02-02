import React, { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const FormInputContainer = styled.div`
  flex-grow: 1;
  transition: 0.3s;
  position: relative;

  label {
    display: block;
    font-size: 1.1rem;
    opacity: 50%;
    margin-bottom: 0.5rem;
    padding: 0;
  }

  & > div {
    position: relative;
  }

  input {
    display: block;
    width: 100%;
    font-size: 1rem;
    height: 3rem;
    border: none;
    outline: none;
    background-color: ${(props) => props.theme.colors.white};
    border: 1px solid ${(props) => props.theme.colors.inputBorder};
    padding: 0.5rem 3rem 0.5rem 1rem;
    border-radius: 5px;

    &::placeholder {
      color: ${(props) => props.theme.colors.textColor}88;
    }

    &:focus {
      border-color: ${(props) => props.theme.colors.primaryColor};
    }
  }

  .FormInput__password--toggle {
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
  }
`

export const FormInput = (props) => {
  const { label, className } = props
  let { type } = props
  type = type || 'text'

  const [showPassword, setShowPassword] = useState(false)
  const togglePasswordVisiblity = () => setShowPassword(!showPassword)
  const finalType = showPassword ? 'text' : type

  return (
    <FormInputContainer className={className}>
      {label && <label>{label}</label>}
      <div>
        <input {...props} type={finalType} />
        {type === 'password' && (
          <span className="FormInput__password--toggle">
            <Image
              title={showPassword ? 'hide password' : 'show password'}
              alt={showPassword ? 'hide password' : 'show password'}
              onClick={togglePasswordVisiblity}
              src={
                showPassword ? './inputs/hide-password-icon.svg' : './inputs/show-password-icon.svg'
              }
              width={20}
              height={20}
            />
          </span>
        )}
      </div>
    </FormInputContainer>
  )
}

export default FormInput
