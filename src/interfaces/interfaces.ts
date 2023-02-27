import { type ChangeEvent } from 'react'

export interface initialFormState {
  search: string
}

export type paramSearch = React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement, MouseEvent> | string

export interface IContext {
  formState: initialFormState
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  onSearch: (event: paramSearch) => void
  busquedas: string []
  gifs: IMock[]
  isLoading: boolean
}

export interface IMock {
  title: string
  text: string
}

export interface IverifySearch {
  ok: boolean
  message: string
}
