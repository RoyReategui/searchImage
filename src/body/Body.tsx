import { useContext } from 'react'
import { GifContext } from '../context/GifContext'

export const Body = () => {
  const { busquedas } = useContext(GifContext)
  return (
    <div className="body">
      <div className="listaSearch">
        <ul>
          {
            busquedas.map((ele, index) => (
              <li key={ index } > { ele } </li>
            ))
          }
        </ul>
      </div>
      <div>

      </div>
    </div>
  )
}
