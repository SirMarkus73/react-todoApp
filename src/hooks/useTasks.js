import { useContext } from 'react'

import { TasksContext } from '../providers/TaskContextProvider.jsx'

function useTasks() {
  const { tasks, setTasks } = useContext(TasksContext)

  const addTask = (title, body) => {
    const id = tasks.length + 1
    setTasks([...tasks, { id, title, body }])
  }

  console.log(tasks)

  return { tasks, addTask }
}

export { useTasks }
