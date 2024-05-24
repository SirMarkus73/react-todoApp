import { useContext, useEffect } from 'react'

import { TasksContext } from '../providers/TaskContextProvider.jsx'

function useTasks() {
  const { tasks, setTasks } = useContext(TasksContext)

  const addTask = (title, body) => {
    const id = tasks.length + 1
    setTasks([...tasks, { id, title, body }])
  }

  const deleteTask = (id) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete the task?',
    )

    if (confirmDelete) {
      const newTasks = [...tasks]
      setTasks(newTasks.filter((task) => task.id !== id))
    }
  }

  const editTask = (id) => {
    const newTasks = [...tasks]
    const task = newTasks.find((task) => task.id === id)
    const index = newTasks.indexOf(task)
    const newTitle = prompt('Enter a new title', task.title)
    const newBody = prompt('Enter a new body', task.body)

    newTasks[index] = { ...task, title: newTitle, body: newBody }
    setTasks(newTasks)
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  return { tasks, addTask, deleteTask, editTask }
}

export { useTasks }
