import { type ReactElement, useCallback, useContext, useState } from 'react'
import { GifContext } from '../../../context/GifContext'
import { isInclude } from '../../../helpers'
import { Li } from '../pure/Li'

interface props {
  children?: ReactElement | ReactElement[]
  className: string
}

export const ListSearch = ({ className }: props) => {
  const [selectIndex, setSelectIndex] = useState(-1)
  const { busquedas, gifs, onSearch, isLoading } = useContext(GifContext)
  /**
   * Este método permite seleccionar el elemento de la lista de busquedas para darle la clase de active
   * Tambien permite hacer el llamado de petición para mostrar los gif (si no existe sus gifs en el grid)
   */
  const handleClick = useCallback((index: number, search: string) => {
    const previousSearches = gifs.map(ele => ele.title)
    if (!isLoading && !isInclude(previousSearches, search)) {
      onSearch(search)
    }
    setSelectIndex(index)
  }, [selectIndex, gifs])

  return (
    <div className={ className }>
      <div className='divsearch__list' id='listSearch'>
        <h2>Historial de Busqueda</h2>
        <ul>
          {
            busquedas.map((ele, index) => (
              <Li
                key={ index }
                ele={ ele }
                index={ index }
                handleClick={ handleClick }
                selectIndex={ selectIndex }
              />
            ))
          }
        </ul>
        <p> Registros: { busquedas.length } -  Max: 10  </p>
      </div>
    </div>
  )
}
