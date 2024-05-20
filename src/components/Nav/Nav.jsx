import { useId, useState } from 'react'

import { themes, useTheme } from '../../hooks/useTheme.js'
import NavCollapsed from '../../icons/NavCollapsed.jsx'
import NavExpanded from '../../icons/NavExpanded.jsx'
import styles from './Nav.module.css'

function Nav() {
  const inputID = useId()
  const languageSelector = useId()
  const themeSelector = useId()

  const [navExpanded, setNavExpanded] = useState(false)
  const { theme, changeTheme } = useTheme()

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
            <select id={languageSelector}>
              <option value={'en'}>English</option>
              <option value={'es'}>Español</option>
            </select>
          </label>

          <label htmlFor={themeSelector}>
            Theme:
            <select
              id={themeSelector}
              onChange={(e) => changeTheme(e.target.value)}
              value={theme}
            >
              {themes.map((theme) => (
                <option key={theme} value={theme}>
                  {theme}
                </option>
              ))}
            </select>
          </label>
        </fieldset>
      </div>
    </nav>
  )
}

export default Nav
