import React from 'react'
import styled from 'styled-components'
import clsx from 'clsx'

const TabContainer = styled.li`
  display: flex;
  margin-bottom: -3px;
  transition: 0.3s;

  &:not(:last-child) {
    margin-right: 1.5rem;
  }

  button {
    appearance: none;
    width: 100%;
    padding: 10px 2px;
    font-size: 1rem;
    color: ${(props) => props.theme.colors.textColor};
    letter-spacing: 0.25px;
    background-color: transparent;
    border: 0;
    cursor: pointer;
  }

  &.active {
    button {
      color: ${(props) => props.theme.colors.primaryColor};
    }
  }
`

export const Tab = (props) => {
  const { title, isActive, onClick, tabClassName = 'tab' } = props

  return (
    <TabContainer className={clsx(tabClassName, { active: isActive })} role="tab">
      <button type="button" onClick={onClick}>
        {title}
      </button>
    </TabContainer>
  )
}

export default Tab
