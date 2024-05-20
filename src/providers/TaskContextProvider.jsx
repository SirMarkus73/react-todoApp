import PropTypes from 'prop-types'
import { createContext, useState } from 'react'

const TasksContext = createContext()

function TaskContextProvider({ children }) {
  const [tasks, setTasks] = useState([])
  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  )
}

TaskContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { TasksContext, TaskContextProvider }
