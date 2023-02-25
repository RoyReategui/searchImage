import { type ChangeEvent, createContext } from 'react'
import { type IContext } from '../interfaces'

const initialContext: IContext = {
  formState: { search: '' },
  onChange: (event: ChangeEvent<HTMLInputElement>): void => {},
  onSearch: () => {},
  busquedas: []
}

export const GifContext = createContext<IContext>(initialContext)
