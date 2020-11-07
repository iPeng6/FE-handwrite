/**
 * 1. 实例化
 * 2. 打开
 * 3. 状态变化监听
 * 4. 发送
 */
const xhr = new XMLHttpRequest()
xhr.open('get', 'http://baidu.com')
xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText)
  }
}
xhr.send()
