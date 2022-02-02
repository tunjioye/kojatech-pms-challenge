import React, { useState } from 'react'
import styled from 'styled-components'
import { Tab } from './Tab'
import { FadeCSSTransition } from './transitions'
import clsx from 'clsx'

const TabsContainer = styled.div`
  .tabs {
    display: block;
    width: 100%;
  }

  .tab-list {
    display: flex;
    width: 100%;
    list-style: none;
    margin: 0;
    padding: 0;
    border-bottom: 3px solid ${(props) => props.theme.colors.dividerColor};
  }

  .tabs[align='left'] > .tab-list {
    text-align: right;
  }

  .tabs[align='right'] > .tab-list {
    text-align: right;
  }

  .tabs[align='center'] > .tab-list {
    text-align: center;
  }

  .tab-content {
    display: block;
    width: 100%;
    margin: 1rem 0;
  }

  .tabs--button {
    & > .tab-list {
      border: 0;
    }

    & > .tab-content {
      border: 2px solid ${(props) => props.theme.colors.tabContentBorder};
      background-color: ${(props) => props.theme.colors.white};
      padding: 1rem;
      margin: 0.5rem 0 1rem 0;
      border-radius: 4px;
    }
  }
`

export const TabType = {
  DEFAULT: 'tab',
  BUTTON: 'tab-button',
}

export const Tabs = (props) => {
  const { tabs = [], align, tabType, tabsWrapperClassName } = props
  const [activeTabIndex, setActiveTabIndex] = useState(0)

  const setActiveTabByIndex = (tabIndex) => {
    if (tabIndex >= 0) setActiveTabIndex(tabIndex)
  }

  const setActiveTabBtTitle = (tabTitle) => {
    const activeTabIndex = tabs.findIndex((tab) => tab.title === tabTitle)
    setActiveTabByIndex(activeTabIndex)
  }

  const mappedTabs = tabs.map((tab, index) => {
    return (
      <Tab
        key={index}
        title={tab.title}
        isActive={String(activeTabIndex) === String(index)}
        onClick={() => setActiveTabByIndex(index)}
        tabClassName={tabType}
      />
    )
  })

  const mappedTabsContent = tabs.map((tab, index) => {
    const { content } = tab
    const isActive = String(activeTabIndex) === String(index)
    const contentStyle = { display: `${isActive ? 'block' : 'none'}` }
    const injectedProps = {
      setActiveTabByIndex: (tabIndex) => setActiveTabByIndex(tabIndex),
      setActiveTabBtTitle: (tabTitle) => setActiveTabBtTitle(tabTitle),
    }

    return (
      <FadeCSSTransition key={index} in={isActive}>
        <div style={contentStyle}>{typeof content === 'function' ? content(injectedProps) : content || null}</div>
      </FadeCSSTransition>
    )
  })

  return (
    <TabsContainer>
      <div className={clsx(tabsWrapperClassName, 'tabs', { 'tabs--button': tabType === TabType.BUTTON })} align={align}>
        <ul className="tab-list">{mappedTabs}</ul>
        <div className="tab-content">{mappedTabsContent}</div>
      </div>
    </TabsContainer>
  )
}

export default Tabs
