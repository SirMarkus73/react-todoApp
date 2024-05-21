import { useId } from 'react'

import { pages } from '../../constants/pages.js'
import { usePages } from '../../hooks/usePages.jsx'
import { useTasks } from '../../hooks/useTasks.js'
import styles from './CreateTask.module.css'

function CreateTask() {
  const titleInput = useId()
  const bodyInput = useId()
  const { addTask } = useTasks()
  const { setMainPage } = usePages()

  const createTask = (event) => {
    event.preventDefault()
    const title = event.target[0].value
    const body = event.target[1].value

    addTask(title, body)
    setMainPage(pages.seeTasks)
  }

  return (
    <main className={styles.main}>
      <h1>Create Task</h1>

      <form onSubmit={createTask}>
        <label htmlFor={titleInput}>Title</label>
        <input id={titleInput} type="text" required />
        <label htmlFor={bodyInput}>Body</label>
        <textarea id={bodyInput} required />

        <button>Create</button>
      </form>
    </main>
  )
}

export { CreateTask }
