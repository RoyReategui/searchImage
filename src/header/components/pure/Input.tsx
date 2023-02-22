interface InputProps {
  className: string
}
export const Input = ({ className }: InputProps) => {
  return (
    <div className={ className }>
      <input
        type="text"
        className="header__input"
        placeholder="Escribe el gif a buscar"
      />
    </div>
  )
}
