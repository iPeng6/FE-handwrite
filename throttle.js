function throttle(fn, cycle) {
  let lastTime = Date.now()
  let now
  let st
  return function t(...args) {
    now = Date.now()
    clearTimeout(st)
    if (now - lastTime >= cycle) {
      fn.apply(this, args)
      lastTime = now
    } else {
      st = setTimeout(() => {
        fn.apply(this, args)
      }, cycle)
    }
  }
}
