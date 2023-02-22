
interface ButtonsProps {
  className: string
}
export const Button = ({ className }: ButtonsProps) => {
  return (
    <div className={ className } >
      <button className="header_button btn" > Buscar </button>
    </div>
  )
}
