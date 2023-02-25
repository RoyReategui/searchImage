import { type ReactElement } from 'react'
import { useForm } from '../hooks/useForm'
import 'sweetalert2/src/sweetalert2.scss'

import { type paramSearch, type initialFormState } from '../interfaces/interfaces'
import { GifContext } from './GifContext'
import { useList } from '../hooks/useList'

interface props {
  children: ReactElement | ReactElement[]
}

const initialState: initialFormState = {
  search: ''
}

export const GifProvider = ({ children }: props) => {
  const { search, formState, onChange, reset } = useForm(initialState)
  const { addBusqueda, busquedas } = useList()

  const onSearch = (event: paramSearch) => {
    if (event.type === 'keydown' &&
      (event as React.KeyboardEvent<HTMLInputElement>).code !== 'Enter'
    ) {
      return
    }
    addBusqueda(search)
    reset(initialState)
  }

  return (
    <GifContext.Provider
      value={{
        formState,
        onChange,
        onSearch,
        busquedas
      }} >
      { children }
    </GifContext.Provider>
  )
}
