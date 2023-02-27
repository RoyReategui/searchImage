import { type IverifySearch } from '../interfaces'

export const isInclude = (lista: string[], element: string): boolean => {
  lista = lista.map(ele => ele.trim().toLowerCase())
  return lista.includes(element.toLowerCase())
}

export const checkString = (newSearch: string, lista: string[]): IverifySearch => {
  const result: IverifySearch = {
    ok: true,
    message: ''
  }
  if (newSearch.trim().length === 0) {
    result.ok = false
    result.message = 'El campo no tiene que estar vacio'
  } else if (newSearch.trim().length <= 1) {
    result.ok = false
    result.message = 'Minimo dos caracteres'
  } else if (isInclude(lista, newSearch)) {
    result.ok = false
    result.message = `"${newSearch}" - Ya se Encuentra en la Lista`
  }
  return result
}

export const formatWords = (words: string) => {
  const regex = /\s+/g
  const wordsSplit = words.split(regex)
  const wordsFormatted = wordsSplit.map(ele => {
    return `${ele[0].toUpperCase().concat(ele.toLowerCase().slice(1, ele.length))}`
  }).join(' ')

  return wordsFormatted
}
