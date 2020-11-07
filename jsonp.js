/**
 * jsonp({
 *  url: 'http://a.b.com'
 *  data:{},
 *  ok: () => {},
 *  fail: () => {}
 * })
 */
function jsonp({ url, data, ok, fail }) {
  const callbackName = Math.random().toString(36).slice(-8)
  window[callbackName] = ok
  const script = document.createElement('script')
  script.src =
    url +
    (url.includes('?') ? '&' : '?') +
    query(data) +
    '&callback=' +
    callbackName
  script.onerror = fail

  document.head.appendChild(script)
}

function query(data) {
  return Object.keys(data)
    .map((key) => `${key}=${data[key]}`)
    .join('&')
}
