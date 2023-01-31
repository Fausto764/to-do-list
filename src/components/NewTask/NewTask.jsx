import { useContext } from 'react'
import { ThemeContext } from '../../Context/ThemeContext'

const NewTask = ({ lista, setLista }) => {
  const { darkMode, setDarkMode, darkTheme, lightTheme } =
    useContext(ThemeContext)
  if (lista !== []) {
    return lista.map((element, index) => {
      function borrada () {
        setLista(lista.filter((item) => item !== element))
      }
      return (
        <li
          className="Task__li"
          key={index}
          style={{
            backgroundColor: darkMode ? darkTheme.input : lightTheme.input
          }}
        >
          <p
            className="Task__p"
            style={{ color: darkMode ? darkTheme.text : lightTheme.text }}
          >
            {element}
          </p>
          <button className="Task__button-delete" onClick={borrada} />
        </li>
      )
    })
  }
}

export { NewTask }
