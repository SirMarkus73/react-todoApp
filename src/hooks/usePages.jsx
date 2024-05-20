import { useContext } from 'react'

import { pages } from '../constants/pages.js'
import { CreateTask } from '../pages/CreateTask/CreateTask.jsx'
import { Index } from '../pages/index.jsx'
import { PageContext } from '../providers/PageContextProvider.jsx'

function usePages() {
  const { setMainPage, mainPage } = useContext(PageContext)

  let pageNow = <Index />

  if (mainPage === pages.createTask) {
    pageNow = <CreateTask />
  } else if (mainPage === pages.index) {
    pageNow = <Index />
  }

  return { setMainPage, pageNow }
}

export { usePages }
