import { useEffect, useState } from 'react'

const themes = ['light', 'dark']

function useTheme() {
  const [theme, setTheme] = useState(themes[0])

  const changeTheme = (newTheme) => {
    if (themes.includes(newTheme)) {
      setTheme(newTheme)
    }
  }

  useEffect(() => {
    console.log(theme)
    document.querySelector('html').classList.add(theme)

    return () => {
      document.querySelector('html').removeAttribute('class')
    }
  }, [theme])

  return { theme, changeTheme }
}

export { themes, useTheme }
