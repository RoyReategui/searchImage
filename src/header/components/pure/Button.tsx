import { useContext, useRef } from 'react'
import { GifContext } from '../../../context/GifContext'

interface ButtonsProps {
  className: string
}
export const Button = ({ className }: ButtonsProps) => {
  const { onSearch, isLoading } = useContext(GifContext)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const onEnterClick = () => {
    buttonRef.current?.click()
  }

  return (
    <div className={ className } >
      <button
        className={`btn ${isLoading ? 'btn--secundary' : ''}`}
        disabled={ isLoading }
        onClick={ onSearch }
        ref = { buttonRef }
      >
        {
          isLoading ? 'Cargando...' : 'Buscar'
        }
      </button>
      <span
        className='infoInput'
        style={{ color: `${isLoading ? 'grey' : ''}` }}
        onClick={ onEnterClick} >
        { isLoading ? '...' : '/enter' }
      </span>
    </div>
  )
}
