import PropTypes from 'prop-types'

import { useTasks } from '../../hooks/useTasks'
import { DeleteIcon } from '../../icons/DeleteIcon'
import { EditIcon } from '../../icons/EditIcon'
import styles from './Task.module.css'

function Task({ task }) {
  const { deleteTask } = useTasks()
  const handleDelete = () => {
    deleteTask(task.id)
  }

  return (
    <article className={styles.task}>
      <section>
        <h2>{task.title}</h2>
        <p>{task.body}</p>
      </section>
      <section className={styles.taskSettings}>
        <button className={styles.taskDelete} onClick={handleDelete}>
          <DeleteIcon />
        </button>
        <button className={styles.taskEdit}>
          <EditIcon />
        </button>
      </section>
    </article>
  )
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
}

export { Task }
