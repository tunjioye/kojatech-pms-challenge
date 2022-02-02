import React from 'react'
import styled from 'styled-components'

const DividerWithStyles = styled.div`
  display: block;
  height: 1px;
  background-color: ${(props) => props.theme.colors.dividerColor};
  margin: 1rem auto;
`

export const Divider = (props) => {
  return <DividerWithStyles {...props} />
}

export default Divider
