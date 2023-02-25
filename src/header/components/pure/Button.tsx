import { useContext } from 'react'
import { GifContext } from '../../../context/GifContext'

interface ButtonsProps {
  className: string
}
export const Button = ({ className }: ButtonsProps) => {
  const { onSearch } = useContext(GifContext)
  return (
    <div className={ className } >
      <button
        className="header_button btn"
        onClick={ onSearch }
      > Buscar </button>
    </div>
  )
}
