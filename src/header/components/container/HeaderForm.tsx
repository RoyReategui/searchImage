import { type ReactElement } from 'react'

interface headerProps {
  children?: ReactElement | ReactElement[]
  className?: string
}
export const HeaderForm = ({ children, className }: headerProps) => {
  return (
    <div className={className }>
      { children }
    </div>
  )
}
