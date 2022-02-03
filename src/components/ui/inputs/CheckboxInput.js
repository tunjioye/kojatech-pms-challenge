import React from 'react'
import styled from 'styled-components'
import clsx from 'clsx'

const CheckboxInputContainer = styled.div`
  flex-grow: 1;
  transition: 0.3s;
  position: relative;

  label {
    display: flex;
    align-items: center;
    cursor: pointer;

    &.disabled {
      pointer-events: none;
    }
  }

  input {
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 2px;
    appearance: none;
    cursor: pointer;

    &:before {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 2px;
      background-color: ${(props) => props.theme.colors.checkboxDefaultBg};
    }

    &:focus,
    &:hover {
      &:before {
        background-color: ${(props) => props.theme.colors.checkboxDefaultBg}DD;
      }
    }

    &:checked {
      &:before {
        background-color: ${(props) => props.theme.colors.primaryColor};
      }

      &:after {
        content: '';
        position: absolute;
        top: 2px;
        left: 6px;
        width: 5px;
        height: 10px;
        border: 3px solid ${(props) => props.theme.colors.white};
        border-width: 0 3px 3px 0;
        border-radius: 1px;
        transform: rotate(45deg);
        transition: transform 0.3s ease-out;
      }
    }

    & + span {
      margin-top: 1px;
      margin-left: 0.5rem;
      font-size: 1rem;
      opacity: 50%;
    }

    &[disabled] {
      opacity: 0.55;
      pointer-events: none;
    }
  }
`

export const CheckboxInput = (props) => {
  const { label, disabled } = props
  return (
    <CheckboxInputContainer>
      <label className={clsx({ disabled })}>
        <input {...props} type="checkbox" />
        <span>{label}</span>
      </label>
    </CheckboxInputContainer>
  )
}

export default CheckboxInput
