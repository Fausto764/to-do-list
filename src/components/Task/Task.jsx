import './Task.css'
import { NewTask } from '../NewTask/NewTask'
import { useState, useContext } from 'react'
import { ThemeContext } from '../../Context/ThemeContext'
import { useLocalStorage } from '../hooks/useLocalStorage'

const Task = () => {
  const { darkMode, setDarkMode, darkTheme, lightTheme } = useContext(ThemeContext)

  const [input, setInput] = useState('')
  const [tasks, setTasks] = useLocalStorage('tasks', [])

  function createTask () {
    if (input !== '') {
      setTasks([...tasks, input])
      setInput('')
    }
  }
  function toggleMode () {
    if (darkMode) {
      setDarkMode(false)
    } else {
      setDarkMode(true)
    }
  }

  return (
        <>
            <header className='header' style={{ backgroundColor: darkMode ? darkTheme.headerBackground : lightTheme.headerBackground }}>
                <h1 className='header__h1'style={{ color: darkMode ? darkTheme.text : lightTheme.text }}>{darkMode ? darkTheme.mode : lightTheme.mode} </h1>
                <button className='header__button' onClick={toggleMode} style={{ backgroundColor: darkMode ? darkTheme.backgroundButton : lightTheme.backgroundButton }} ></button>
            </header>
            <main className="Task"style={{ backgroundColor: darkMode ? darkTheme.background : lightTheme.background }}>
                <section className='Task__section-dashboard'>
                    <input className='Task__input' value={input} style={{ backgroundColor: darkMode ? darkTheme.input : lightTheme.input, border: 'none', color: darkMode ? darkTheme.text : lightTheme.text }}onChange={event => {
                      setInput(event.target.value)
                    }}/>
                    <button className='Task__button-create' onClick={(event) => { createTask() }} style={{ backgroundColor: darkMode ? darkTheme.input : lightTheme.input, border: 'none', color: darkMode ? darkTheme.text : lightTheme.text }}>Crear</button>
                </section>

                <section className='Task__section-task'>
                    <ul className='Task__ul'>
                        <NewTask lista={tasks} setLista={setTasks}/>
                    </ul>
                </section>

            </main>
        </>

  )
}
export default Task
