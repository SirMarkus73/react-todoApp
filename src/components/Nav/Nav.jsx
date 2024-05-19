import { useId, useState } from 'react'

import NavCollapsed from '../../icons/NavCollapsed.jsx'
import NavExpanded from '../../icons/NavExpanded.jsx'
import styles from './Nav.module.css'

function Nav() {
    const inputID = useId()
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

            <ul>
                <button>Home</button>
                <button>Create Task</button>
                <button>Create Collection</button>
            </ul>
        </nav>
    )
}

export default Nav
