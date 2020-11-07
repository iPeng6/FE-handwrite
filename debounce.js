function debounce(fn, delay) {
  let st
  return function d(...args) {
    if (st) {
      clearTimeout(st)
    }
    st = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}
