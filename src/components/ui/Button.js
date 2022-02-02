import React from 'react'
import styled from 'styled-components'
import clsx from 'clsx'

const ButtonContainer = styled.div`
  flex-grow: 1;

  .btn {
    outline: none;
    border: none;
    transition: 0.3s;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 0.25rem;
    padding: 0.5rem 1.5rem;
    height: 3rem;
    cursor: pointer;
  }

  .btn--solid {
    border: 0;
    background-color: ${(props) => props.theme.colors.primaryColor};
    color: ${(props) => props.theme.colors.white};

    &:focus,
    &:hover {
      background-color: ${(props) => props.theme.colors.primaryColor}DD;
    }
  }

  .btn--rounded {
    border-radius: 3rem;
  }

  .btn--full {
    width: 100%;
  }

  .btn[disabled] {
    pointer-events: none;
    opacity: 0.5;
  }
`

export const ButtonClass = {
  SOLID: 'SOLID',
  ROUNDED: 'ROUNDED',
}

export const ButtonSize = {
  FULL: 'FULL',
}

export const Button = ({
  children,
  type = 'button',
  classes = [],
  size,
  disabled,
  onClick,
  ...rest
}) => {
  return (
    <ButtonContainer>
      <button
        type={type}
        className={clsx(`btn`, classes, {
          'btn--solid': classes.includes(ButtonClass.SOLID),
          'btn--rounded': classes.includes(ButtonClass.ROUNDED),
          'btn--full': size === ButtonSize.FULL,
        })}
        disabled={disabled}
        onClick={onClick}
        {...rest}
      >
        {children}
      </button>
    </ButtonContainer>
  )
}

export default Button
