import { useId } from 'react'

import { themes } from '../../constants/theme.js'
import { useTheme } from '../../hooks/useTheme.js'

function Settings() {
  const languageSelector = useId()
  const themeSelector = useId()
  const { theme, changeTheme } = useTheme()

  return (
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
  )
}

export { Settings }
