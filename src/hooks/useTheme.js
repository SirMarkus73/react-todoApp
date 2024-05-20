import { useEffect, useState } from 'react'

import { themes } from '../constants/theme.js'

function useTheme() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  const changeTheme = (newTheme) => {
    if (themes.includes(newTheme)) {
      setTheme(newTheme)
    }
  }

  useEffect(() => {
    document.querySelector('html').classList.add(theme)
    localStorage.setItem('theme', theme)

    return () => {
      document.querySelector('html').removeAttribute('class')
    }
  }, [theme])

  return { theme, changeTheme }
}

export { useTheme }
