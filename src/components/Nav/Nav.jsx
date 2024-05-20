import { useId, useState } from 'react'

import NavCollapsed from '../../icons/NavCollapsed.jsx'
import NavExpanded from '../../icons/NavExpanded.jsx'
import styles from './Nav.module.css'

function Nav() {
  const inputID = useId()
  const languageSelector = useId()
  const themeSelector = useId()

  const [navExpanded, setNavExpanded] = useState(false)

  return (
    <nav className={styles.nav}>
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
      <div className={styles.dropDownMenu}>
        <fieldset>
          <legend>Settings</legend>
          <label htmlFor={languageSelector}>
            Language:
            <select>
              <option value={'en'}>English</option>
              <option value={'es'}>Español</option>
            </select>
          </label>

          <label htmlFor={themeSelector}>
            Theme:
            <select>
              <option value={'light'}>Light</option>
              <option value={'dark'}>Dark</option>
            </select>
          </label>
        </fieldset>
      </div>
    </nav>
  )
}

export default Nav
