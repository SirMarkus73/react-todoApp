import { useState } from 'react'

import styles from './Nav.module.css'
import { NavExpandButton } from './NavExpandButton.jsx'
import { PageSelector } from './PageSelector.jsx'
import { Settings } from './Settings.jsx'

function Nav() {
  const [navExpanded, setNavExpanded] = useState(false)

  return (
    <nav className={styles.nav}>
      <NavExpandButton
        navExpanded={navExpanded}
        setNavExpanded={setNavExpanded}
      />

      <div className={styles.dropDownMenu}>
        <PageSelector setNavExpanded={setNavExpanded} />
        <Settings />
      </div>
    </nav>
  )
}

export { Nav }
