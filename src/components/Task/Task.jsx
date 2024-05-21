import PropTypes from 'prop-types'

function Task({ task }) {
  return (
    <article>
      <h2>{task.title}</h2>
      <p>{task.body}</p>
    </article>
  )
}

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
}

export { Task }
