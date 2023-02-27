import { type ChangeEvent, createContext } from 'react'
import { type paramSearch, type IContext } from '../interfaces'

const initialContext: IContext = {
  formState: { search: '' },
  onChange: (event: ChangeEvent<HTMLInputElement>): void => {},
  onSearch: (event: paramSearch) => {},
  busquedas: [],
  gifs: [],
  isLoading: false
}

export const GifContext = createContext<IContext>(initialContext)
