/**
 * document.cookie = 'a=1;b=2'
 */

const cookieStore = document.cookie.split(';').reduce((ret, item) => {
  const [key, value] = item.split('=')
  ret[key] = value
  return ret
}, {})

console.log(cookieStore)
