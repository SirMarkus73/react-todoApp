import { useTasks } from '../../hooks/useTasks.js'

function SeeTasks() {
  const { tasks } = useTasks()

  return (
    <main>
      {tasks.map((task) => (
        <article key={task.id}>
          <h2>{task.title}</h2>
          <p>{task.body}</p>
        </article>
      ))}
    </main>
  )
}

export { SeeTasks }
