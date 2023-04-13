import { type ReactElement, useState } from 'react'
import { useForm } from '../hooks/useForm'
import 'sweetalert2/src/sweetalert2.scss'

import { type paramSearch, type initialFormState, type IGifs, type ICardInfo } from '../interfaces'
import { GifContext } from './GifContext'
import { useList } from '../hooks'
import { checkString, showAlert, formatWords } from '../helpers'
import { getApiGif } from '../helpers/getGif'

interface props {
  children: ReactElement | ReactElement[]
}

const initialState: initialFormState = {
  search: ''
}

export const GifProvider = ({ children }: props) => {
  const [gifs, setGif] = useState<IGifs[]>([])
  const [isLoading, setisLoading] = useState<boolean>(false)
  // const { data, isLoading, getFetchGif } = useFetch()

  const { addBusqueda, busquedas } = useList()
  const { search, formState, onChange, reset } = useForm(initialState)

  const onSearch = (event: paramSearch) => {
    if (isLoading) return
    let searchCopy = search

    if (typeof event !== 'string' &&
        event?.type === 'keydown' &&
        (event as React.KeyboardEvent<HTMLInputElement>).code !== 'Enter') {
      return
    } else if (typeof event === 'string') {
      searchCopy = event
    }

    if (typeof event !== 'string') {
      const { ok, message } = checkString(searchCopy, busquedas)
      if (!ok) {
        showAlert(message)
        reset(initialState)
        return
      }
    }

    setisLoading(true)

    getApiGif(searchCopy).then(res => {
      const listGif: ICardInfo[] | undefined = res?.map(ele => (
        {
          title: ele.title,
          img_url: ele.images.fixed_height_small.url,
          img_urlModal: ele.images.downsized_medium.url,
          id: ele.id
        }
      ))
      const newGif: IGifs = {
        title: formatWords(searchCopy),
        listGifs: listGif
      }

      setGif([newGif, ...gifs])

      if (typeof event !== 'string') addBusqueda(searchCopy)
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
