import { useContext, useRef, useEffect } from 'react'
import { GifContext } from '../../../context/GifContext'

interface InputProps {
  className: string
}

export const Input = ({ className }: InputProps) => {
  const { onChange, formState, onSearch, isLoading } = useContext(GifContext)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!isLoading) inputRef.current?.focus()
  }, [isLoading])

  return (
    <div className={ className }>
      <input
        type="text"
        className="header__input"
        placeholder='buscar gif'
        name='search'
        disabled = { isLoading }
        onChange={ onChange }
        ref={ inputRef }
        onKeyDown= { onSearch }
        value={ formState.search}
      />
    </div>
  )
}
