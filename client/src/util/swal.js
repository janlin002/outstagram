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
    text: '是否要刪除留言?',
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

export const SwalDeletePost = (delFunc) => (
  Swal.fire({
    icon: 'warning',
    title: 'Warning!',
    text: '是否要刪除貼文?',
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

export const SwalCreateUser = (createFunc) => (
  Swal.fire({
    icon: 'success',
    title: 'Success!',
    text: '新增使用者成功!',
    showDenyButton: false,
    showCancelButton: true,
    confirmButtonText: '確定',
    cancelButtonText: '取消',
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('Saved!', '', 'success')
      createFunc()
    }
  })
)

export const SwalUnKnowUser = (clearFunc) => (
  Swal.fire({
    icon: 'error',
    title: '無效的使用者!',
    text: '請確認輸入的使用者是否有誤!',
    showDenyButton: false,
    showCancelButton: true,
    confirmButtonText: '確定',
    cancelButtonText: '取消',
  }).then((result) => {
    if (result.isConfirmed) {
      clearFunc()
    }
  })
)

export const SwalDeleteUserCheck = (delFunc) => (
  Swal.fire({
    icon: 'warning',
    title: '刪除使用者',
    text: '請確認是否刪除該使用者，一但刪除就無法還原!',
    showDenyButton: false,
    showCancelButton: true,
    confirmButtonText: '確定',
    cancelButtonText: '取消',
  }).then((result) => {
    if (result.isConfirmed) {
      delFunc()
    }
  })
)
