import { isInclude } from '../../../helpers'
import { useContext, useEffect, useState } from 'react'
import { GifContext } from '../../../context/GifContext'

interface props {
  index: number
  ele: string
  selectIndex: number
  handleClick: (index: number, search: string) => void
}

export const Li = ({ index, ele, selectIndex, handleClick }: props) => {
  const [include, setInclude] = useState(false)

  const { gifs } = useContext(GifContext)

  useEffect(() => {
    const previousSearches = gifs.map(ele => ele.title)
    setInclude(isInclude(previousSearches, ele))
  }, [handleClick])

  return (
    <li className='divsearch__item'>
      <a
        href={`#${ele}`}
        className={`divsearch__link ${(index === selectIndex) ? 'active' : ''}`}
        onClick={ () => { handleClick(index, ele) } }
      >
        { ele }
        { include
          ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-2 h-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          : null
        }
      </a>
    </li>
  )
}
