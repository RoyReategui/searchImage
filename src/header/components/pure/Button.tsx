import { useContext } from 'react'
import { GifContext } from '../../../context/GifContext'

interface ButtonsProps {
  className: string
}
export const Button = ({ className }: ButtonsProps) => {
  const { onSearch, isLoading } = useContext(GifContext)
  return (
    <div className={ className } >
      <button
        className={`btn ${isLoading ? 'btn--secundary' : ''}`}
        disabled={ isLoading }
        onClick={ onSearch }
      >
        {
          isLoading ? 'Cargando...' : 'Buscar'
        }
      </button>
      <span className='infoInput' >/ent</span>
    </div>
  )
}
