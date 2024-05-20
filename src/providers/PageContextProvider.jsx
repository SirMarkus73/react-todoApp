import PropTypes from 'prop-types'
import { createContext, useState } from 'react'

import { pages } from '../constants/pages.js'

const PageContext = createContext()

function PageContextProvider({ children }) {
  const [mainPage, setMainPage] = useState(pages.index)
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
