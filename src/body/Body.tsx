import { useCallback, useContext, useState } from 'react'
import { GifContext } from '../context/GifContext'
import { isInclude } from '../helpers'

export const Body = () => {
  const [selectIndex, setSelectIndex] = useState(-1)
  const { busquedas, gifs, onSearch, isLoading } = useContext(GifContext)

  /**
   * Este método permite seleccionar el elemento de la lista de busquedas para darle la clase de active
   * Tambien permite hacer el llamado de peticion para mostrar los gif (si aun no se mustra los gifs correspodiente)
   */
  const handleClick = useCallback((index: number, search: string) => {
    const previousSearches = gifs.map(ele => ele.title)
    if (!isLoading && !isInclude(previousSearches, search)) {
      console.log(gifs)
      onSearch(search)
    }
    setSelectIndex(index)
  }, [selectIndex, gifs])

  return (
    <div className="body">
      <div className="divsearch">
        <ul className='divsearch__list'>
          {
            busquedas.map((ele, index) => (
              <li className='divsearch__item' key={ index }>
                <a
                  href={`#${ele}`}
                  className={`divsearch__link ${(index === selectIndex) ? 'active' : ''}`}
                  onClick={ () => { handleClick(index, ele) } }
                >
                  { ele }
                </a>
              </li>
            ))
          }
        </ul>
      </div>
      <div className='divGrid'>
        {
          gifs.map((gif, index) => (
            <div
              key={ index }
              id={gif.title}
              className='divGridItem'
            >
              <h2 className='divGridItem__title'>{ gif.title }</h2>
              <div className='divGridItem__grid'>
                <p>{ gif.text }</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
