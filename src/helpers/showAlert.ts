import Swal from 'sweetalert2'
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
})

export const showAlert = (message: string) => {
  swalWithBootstrapButtons.fire({
    title: '<h2 class="alert__title">¡Upss, Ten en Cuenta!</h2>',
    // width: 400,
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
}
