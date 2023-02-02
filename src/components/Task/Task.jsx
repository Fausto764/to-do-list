import './Task.css'
import { NewTask } from '../NewTask/NewTask'
import { useContext } from 'react'
import { ThemeContext } from '../../Context/ThemeContext'

const Task = () => {
  const { darkMode, setDarkMode, darkTheme, lightTheme, input, setInput, tasks, setTasks } = useContext(ThemeContext)

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
  const setStyles = (key) => {
    return darkMode ? darkTheme[key] : lightTheme[key]
  }
  return (
        <>
            <header className='header' style={{ backgroundColor: setStyles('headerBackground') }}>
                <h1 className='header__h1'style={{ color: setStyles('text') }}>{setStyles('mode')} </h1>
                <button className='header__button' onClick={toggleMode} style={{ backgroundColor: setStyles('backgroundButton') }} ></button>
            </header>
            <main className="Task"style={{ backgroundColor: setStyles('background') }}>
                <section className='Task__section-dashboard'>
                    <input className='Task__input' value={input} style={{ backgroundColor: setStyles('input'), border: 'none', color: setStyles('text') }}onChange={event => {
                      setInput(event.target.value)
                    }}/>
                    <button className='Task__button-create' onClick={(event) => { createTask() }} style={{ backgroundColor: setStyles('input'), border: 'none', color: setStyles('text') }}>Crear</button>
                </section>

                <section className='Task__section-task'>
                    <ul className='Task__ul'>
                        <NewTask/>
                    </ul>
                </section>

            </main>
        </>

  )
}
export default Task
