import React from 'react'
import NoSSR from 'react-no-ssr'
import Select from 'react-select'
import FixRequiredSelect from './FixRequiredSelect'
import { reactSelectUtil } from '@/src/utils'
import styled from 'styled-components'

const SelectInputContainer = styled.div`
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
`

export const SelectInput = (props) => {
  const { label, SelectComponent = Select, placeholder = '', width } = props

  return (
    <SelectInputContainer style={{ width }}>
      {label && <label>{label}</label>}
      <NoSSR>
        <FixRequiredSelect
          SelectComponent={SelectComponent}
          styles={reactSelectUtil.styles}
          theme={reactSelectUtil.theme}
          placeholder={placeholder}
          isClearable
          {...props}
        />
      </NoSSR>
    </SelectInputContainer>
  )
}

export default SelectInput
