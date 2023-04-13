import { type ChangeEvent } from 'react'
import { type GifData } from './IGifResponse'

export interface initialFormState {
  search: string
}

export type paramSearch = React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement, MouseEvent> | string

export interface IContext {
  formState: initialFormState
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  onSearch: (event: paramSearch) => void
  busquedas: string []
  gifs: IGifs[]
  isLoading: boolean
}
export interface IGifs {
  title: string
  listGifs?: ICardInfo[]
}

export interface ICardInfo {
  title: string
  img_url: string
  img_urlModal: string
  id: string
}

export interface IverifySearch {
  ok: boolean
  message: string
}

export interface IGifState {
  data: GifData[]
  isLoading: boolean
  error: boolean
}
