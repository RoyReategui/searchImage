import { useContext } from 'react'
import { GifContext } from '../../../context/GifContext'

interface InputProps {
  className: string
}
export const Input = ({ className }: InputProps) => {
  const { onChange, formState, onSearch } = useContext(GifContext)

  return (
    <div className={ className }>
      <input
        type="text"
        className="header__input"
        placeholder="Escribe el gif a buscar"
        name='search'
        onChange={ onChange }
        onKeyDown= { onSearch }
        value={ formState.search}
      />
    </div>
  )
}
