import PropTypes from 'prop-types'
import { useId } from 'react'

import { NavCollapsed } from '../../icons/NavCollapsed.jsx'
import { NavExpanded } from '../../icons/NavExpanded.jsx'
import styles from './Nav.module.css'

function NavExpandButton({ navExpanded, setNavExpanded }) {
  const inputID = useId()
  return (
    <>
      <label htmlFor={inputID} className={styles.navCheckBox}>
        {navExpanded ? (
          <NavExpanded width={'5rem'} />
        ) : (
          <NavCollapsed width={'5rem'} />
        )}
      </label>
      <input
        type={'checkbox'}
        id={inputID}
        checked={navExpanded}
        className={styles.navCheckBoxInput}
        onChange={() => {
          setNavExpanded(!navExpanded)
        }}
      />
    </>
  )
}

NavExpandButton.propTypes = {
  navExpanded: PropTypes.bool.isRequired,
  setNavExpanded: PropTypes.func.isRequired,
}

export { NavExpandButton }
