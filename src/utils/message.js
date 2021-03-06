// 弹出信息
const alertMessage = (th, action, a) => {
  var msg, type
  switch (a) {
    case '1':
      type = 'success'
      msg = action + '成功'
      break
    case '2':
      type = 'warning'
      msg = action
      break
    case '3':
      type = 'info'
      msg = '取消' + action
      break
    case '4':
      type = 'error'
      msg = action + '失败'
      break
    default:
      break
  }
  th.$message({
    message: msg,
    type: type
  })
}
export default alertMessage

