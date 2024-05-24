import { useContext } from 'react'

import { pages } from '../constants/pages.js'
import { CreateTask } from '../pages/CreateTask/CreateTask.jsx'
import { Index } from '../pages/Index/index.jsx'
import { SeeTasks } from '../pages/SeeTasks/SeeTasks.jsx'
import { PageContext } from '../providers/PageContextProvider.jsx'

function usePages() {
  const { setMainPage, mainPage } = useContext(PageContext)

  let pageNow = <Index />

  if (mainPage === pages.createTask) {
    pageNow = <CreateTask />
  } else if (mainPage === pages.index) {
    pageNow = <Index />
  } else if (mainPage === pages.seeTasks) {
    pageNow = <SeeTasks />
  }

  return { setMainPage, pageNow }
}

export { usePages }
