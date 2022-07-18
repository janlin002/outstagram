import Swal from 'sweetalert2'

export const SwalAlert = () => (
  Swal.fire({
    icon: 'error',
    title: '錯誤',
    text: '請先選擇一個使用者',
  })
)

export const SwalLogout = () => (
  Swal.fire({
    icon: 'success',
    title: 'Congratulations!',
    text: '登出成功',
  })
)

export const SwalSubmitSuccess = () => (
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: '變更完成',
    showConfirmButton: false,
    timer: 1500,
  })
)

export const SwalDeleteComment = (delFunc) => (
  Swal.fire({
    icon: 'warning',
    title: 'Warning!',
    text: '是否刪除留言?',
    showDenyButton: false,
    showCancelButton: true,
    confirmButtonText: '確定',
    cancelButtonText: '取消',
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('Saved!', '', 'success')
      delFunc()
    }
  })
)
