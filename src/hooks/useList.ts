import { useState } from 'react'
import Swal from 'sweetalert2'

interface IverifySearch {
  ok: boolean
  message: string
}

const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
})

export const useList = () => {
  const [busquedas, setBusquedas] = useState<string[]>([])

  const verifySearch = (newSearch: string): IverifySearch => {
    const result: IverifySearch = {
      ok: true,
      message: ''
    }
    if (newSearch.trim().length === 0) {
      result.ok = false
      result.message = 'El campo no tiene que estar vacio'
    } else if (newSearch.trim().length <= 1) {
      result.ok = false
      result.message = 'La palabra tiene que tener al menos dos letras'
    }
    return result
  }

  const addBusqueda = (search: string) => {
    console.log('Agregando')
    const { ok, message } = verifySearch(search)
    if (!ok) {
      swalWithBootstrapButtons.fire({
        title: '<h2 class="alert__title">¡Upss, Ten en Cuenta!</h2>',
        width: 400,
        html: `<p class='alert__mg'>${message}</p>`,
        icon: 'warning',
        showCloseButton: true,
        confirmButtonText: '¡Ok!',
        background: '#fff',
        allowEnterKey: false,
        backdrop: `rgba(123, 121, 0, 0.295)`
      }).then(
        () => {},
        () => {}
      )
      return
    }
    setBusquedas([...busquedas, search])
  }

  return { addBusqueda, busquedas }
}
