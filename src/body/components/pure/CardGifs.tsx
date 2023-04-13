import { showImageAlert } from '../../../helpers'
import { type ICardInfo } from '../../../interfaces'

export const CardGifs = ({ id, img_url, img_urlModal, title }: ICardInfo) => {
  return (
    <div
      key= {id}
      className='cardGif'
    >
      <img
        className='cardGif__img'
        src={ img_url }
        alt={ title }
      />
      <div className='cardGif__body'>
        <h2 className='cardGif__title'>{ title }</h2>
        <div className='cardGif__buttons'>
          <button
            className='btn btn--view'
            onClick={ () => { showImageAlert({ img: img_urlModal, title }) } }
            title='Expandir'
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
              stroke="currentColor" className="w-2 h-2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>

          </button>
          <a
            href={ img_urlModal }
            className='btn btn--link'
            target="_blank" rel="noreferrer"
            title='Origen de la imagen'
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 24 24"
              strokeWidth={1.5} stroke="currentColor"
              className="w-2 h-2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
