import PropTypes from 'prop-types'
import { createContext, useState } from 'react'

import { pages } from '../constants/pages.js'

const PageContext = createContext()

function PageContextProvider({ children }) {
  const [mainPage, setMainPage] = useState(() => {
    const mainPage = localStorage.getItem('mainPage')
    return mainPage || pages.index
  })
  return (
    <PageContext.Provider value={{ mainPage, setMainPage }}>
      {children}
    </PageContext.Provider>
  )
}

PageContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { PageContext, PageContextProvider }
