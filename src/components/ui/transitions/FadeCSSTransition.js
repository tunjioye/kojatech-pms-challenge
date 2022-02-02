import React from 'react'
import { CSSTransition } from 'react-transition-group'
import styled from 'styled-components'

const FadeTransitionContainer = styled.div`
  .fade-appear,
  .fade-enter {
    opacity: 0;
  }

  .fade-appear-done,
  .fade-enter-done {
    opacity: 1;
    transition: transform 500ms, opacity 500ms;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit-active {
    opacity: 0;
    transition: transform 500ms, opacity 500ms;
  }
`

export const FadeCSSTransition = (props) => {
  const nodeRef = React.useRef(null)
  const { in: inProp, children, appear, enter, exit } = props
  return (
    <FadeTransitionContainer>
      <CSSTransition
        in={inProp}
        classNames="fade"
        timeout={{
          appear: appear || 0,
          enter: enter || 0,
          exit: exit || 0,
        }}
        unmountOnExit
        nodeRef={nodeRef}
      >
        <div ref={nodeRef}>{children}</div>
      </CSSTransition>
    </FadeTransitionContainer>
  )
}

export default FadeCSSTransition
