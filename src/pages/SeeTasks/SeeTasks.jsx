import { Task } from '../../components/Task/Task.jsx'
import { useTasks } from '../../hooks/useTasks.js'

function SeeTasks() {
  const { tasks } = useTasks()

  return (
    <main>
      {tasks.map((task) => (
        <Task task={task} key={task.id} />
      ))}
    </main>
  )
}

export { SeeTasks }
