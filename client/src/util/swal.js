import Swal from 'sweetalert2'

const SwalAlert = () => (
  Swal.fire({
    icon: 'error',
    title: '錯誤',
    text: '請先選擇一個使用者',
  })
)

export default SwalAlert
