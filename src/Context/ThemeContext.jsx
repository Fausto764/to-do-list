import { createContext, useState } from 'react'

import { useLocalStorage } from '../components/hooks/useLocalStorage'

export const ThemeContext = createContext()

export function ThemeContextProvider (props) {
  const [darkMode, setDarkMode] = useLocalStorage({ key: 'darkMode', initialValue: false })
  const [input, setInput] = useState('')
  const [tasks, setTasks] = useLocalStorage({ key: 'tasks', initialValue: [] })
  // dark
  const darkTheme = {
    mode: 'Dark Mode',
    background: '#100a0a',
    headerBackground: '#202020',
    backgroundButton: '#000',
    input: '#525252',
    text: '#000'
  }

  // light
  const lightTheme = {
    mode: 'Light Mode',
    background: '#0062ff',
    headerBackground: '#66a1ff',
    backgroundButton: '#fff',
    input: '#00ccff',
    text: '#fff'
  }

  return (
        <ThemeContext.Provider value={{
          darkMode,
          setDarkMode,
          darkTheme,
          lightTheme,
          input,
          tasks,
          setTasks,
          setInput
        }}>
            {props.children}
        </ThemeContext.Provider>
  )
}
