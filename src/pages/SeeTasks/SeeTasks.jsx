import { Task } from '../../components/Task/Task.jsx'
import { useTasks } from '../../hooks/useTasks.js'
import styles from './SeeTasks.module.css'

function SeeTasks() {
  const { tasks } = useTasks()

  return (
    <main className={styles.main}>
      <h1>Pendent Tasks</h1>
      {tasks.map((task) => (
        <Task task={task} key={task.id} />
      ))}
    </main>
  )
}

export { SeeTasks }
