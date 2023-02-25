import { type ChangeEvent } from 'react'

export interface initialFormState {
  search: string
}

export type paramSearch = React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>

export interface IContext {
  formState: initialFormState
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  onSearch: (event: paramSearch) => void
  busquedas: string []
}
