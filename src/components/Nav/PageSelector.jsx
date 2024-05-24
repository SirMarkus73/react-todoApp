import PropTypes from 'prop-types'

import { pages } from '../../constants/pages'
import { usePages } from '../../hooks/usePages'

function PageSelector({ setNavExpanded }) {
  const { setMainPage } = usePages()
  return (
    <fieldset>
      <legend>Pages</legend>
      {Object.values(pages).map((page) => (
        <button
          key={page}
          onClick={() => {
            setMainPage(page)
            setNavExpanded(false)
          }}
        >
          {page}
        </button>
      ))}
    </fieldset>
  )
}

PageSelector.propTypes = {
  setNavExpanded: PropTypes.func.isRequired,
}

export { PageSelector }
