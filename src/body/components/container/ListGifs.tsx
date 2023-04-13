import React, { useContext, type ReactElement } from 'react'
import { GifContext } from '../../../context/GifContext'
import { CardGifs } from '../pure/CardGifs'
import { NoFound } from '../pure/NoFound'

interface props {
  children?: ReactElement | ReactElement[]
  className: string
}

export const ListGifs = ({ className }: props) => {
  const { gifs } = useContext(GifContext)
  return (
    <div className={ className }>
      {
        gifs.map((gif, index) => (
          <div
            key={ index }
            id={gif.title}
            className='divGridItem'
          >
            <h2 className='divGridItem__title'>
              { gif.title }
              <a href="#listSearch" className='a-icon'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-2 h-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
                </svg>
              </a>

            </h2>
            {
              (gif.listGifs !== undefined && gif.listGifs?.length > 0)
                ? <div className='divGridItem__grid'>
                  {
                    gif.listGifs?.map((card) => <CardGifs key={ card.id } { ...card } />)
                  }
                </div>
                : (<NoFound title={ gif.title } />)
            }
          </div>
        ))
      }
    </div>
  )
}
