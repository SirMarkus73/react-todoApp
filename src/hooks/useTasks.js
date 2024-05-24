import { useContext, useEffect } from 'react'

import { TasksContext } from '../providers/TaskContextProvider.jsx'

function useTasks() {
  const { tasks, setTasks } = useContext(TasksContext)

  const addTask = (title, body) => {
    const id = tasks.length + 1
    setTasks([...tasks, { id, title, body }])
  }

  const deleteTask = (id) => {
    const newTasks = [...tasks]
    setTasks(newTasks.filter((task) => task.id !== id))
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  return { tasks, addTask, deleteTask }
}

export { useTasks }
