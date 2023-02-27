import { type ReactElement, useState } from 'react'
import { useForm } from '../hooks/useForm'
import 'sweetalert2/src/sweetalert2.scss'

import { type paramSearch, type initialFormState, type IMock } from '../interfaces/interfaces'
import { GifContext } from './GifContext'
import { useList } from '../hooks/useList'
import { checkString, showAlert, createMock, formatWords } from '../helpers'

interface props {
  children: ReactElement | ReactElement[]
}

const initialState: initialFormState = {
  search: ''
}

export const GifProvider = ({ children }: props) => {
  const [gifs, setGif] = useState<IMock[]>([])
  const [isLoading, setisLoading] = useState<boolean>(false)

  const { addBusqueda, busquedas } = useList()
  const { search, formState, onChange, reset } = useForm(initialState)

  const onSearch = (event: paramSearch) => {
    if (isLoading) return
    let searchInList = search

    if (typeof event !== 'string' &&
        event?.type === 'keydown' &&
        (event as React.KeyboardEvent<HTMLInputElement>).code !== 'Enter') {
      return
    } else if (typeof event === 'string') {
      searchInList = event
    }

    if (typeof event !== 'string') {
      const { ok, message } = checkString(searchInList, busquedas)
      if (!ok) {
        showAlert(message)
        reset(initialState)
        return
      }
    }

    setisLoading(true)
    createMock(searchInList).then(res => {
      res.title = formatWords(res.title)
      setGif([res, ...gifs])
      if (typeof event !== 'string') addBusqueda(searchInList)
      reset(initialState)
      setisLoading(false)
    })
      .catch(error => {
        setisLoading(false)
        console.log(error)
      })
  }

  return (
    <GifContext.Provider
      value={{
        formState,
        onChange,
        onSearch,
        busquedas,
        gifs,
        isLoading
      }} >
      { children }
    </GifContext.Provider>
  )
}
