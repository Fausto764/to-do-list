import { useContext } from 'react'
import { ThemeContext } from '../../Context/ThemeContext'

const NewTask = () => {
  const { darkMode, darkTheme, lightTheme, input, tasks, setTasks } = useContext(ThemeContext)
  const setStyles = (key) => {
    return darkMode ? darkTheme[key] : lightTheme[key]
  }
  if (tasks !== []) {
    return tasks.map((element, index) => {
      function borrada () {
        setTasks(tasks.filter((item) => item !== element))
      }
      function update () {
        if (input !== '') {
          setTasks(prevList => {
            prevList = [...tasks]
            prevList[index] = input
            window.localStorage.setItem('tasks', JSON.stringify(prevList))
            return prevList
          })
        } else {
          console.log('el input estaba vacio')
        }
      }

      return (
        <li
          className="Task__li"
          key={index}
          style={{
            backgroundColor: setStyles('input')
          }}
        >
          <p
            className="Task__p"
            style={{ color: setStyles('text') }}
          >
            {element}
          </p>
          <section className='buttons__container'>
            <button className="Task__button-update" onClick={update}>Update</button>
            <button className="Task__button-delete" onClick={borrada} >Delete</button>
          </section>
        </li>
      )
    })
  }
}

export { NewTask }
