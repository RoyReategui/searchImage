import { useEffect, useState } from 'react'
import { formatWords } from '../helpers'

/**
 * Inicializa la lista de busqudas - si no existe nada en el localStorage retorna un strin vacio
 * @returns
 */
const initialSearch = (): string [] => {
  let misBusquedas = []
  const getBusquedas = localStorage.getItem('busquedas')
  if (getBusquedas !== null) {
    misBusquedas = JSON.parse(getBusquedas)
  }
  return misBusquedas
}

export const useList = () => {
  const [busquedas, setBusquedas] = useState<string[]>(initialSearch)

  useEffect(() => {
    localStorage.setItem('busquedas', JSON.stringify(busquedas))
  }, [busquedas])

  const addBusqueda = (search: string) => {
    formatWords(search)
    const updateList = [formatWords(search), ...busquedas].slice(0, 10)
    setBusquedas(updateList)
  }
  return { addBusqueda, busquedas }
}
