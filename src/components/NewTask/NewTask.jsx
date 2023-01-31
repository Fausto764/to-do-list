import { useContext } from 'react'
import { ThemeContext } from '../../Context/ThemeContext'

const NewTask = ({ lista, setLista }) => {
  const { darkMode, darkTheme, lightTheme } = useContext(ThemeContext)
  const setStyles = (key) => {
    return darkMode ? darkTheme[key] : lightTheme[key]
  }
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
            backgroundColor: setStyles('input')
          }}
        >
          <p
            className="Task__p"
            style={{ color: setStyles('text') }}
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
