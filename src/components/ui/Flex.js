import React from 'react'

export const Flex = ({
  children,
  direction,
  gap = '1rem',
  justify,
  align,
  wrap = 'wrap',
  flexGrow,
  ...rest
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: direction,
        flexWrap: wrap,
        gap,
        justifyContent: justify,
        alignItems: align,
        flexGrow: flexGrow,
        ...rest,
      }}
    >
      {children}
    </div>
  )
}

export default Flex
