function timeout(fn, delay) {
  let raf
  let start = Date.now()
  function loop() {
    if (Date.now() - start > delay) {
      fn()
      return
    }
    raf = requestAnimationFrame(loop)
  }
  loop()
  return () => {
    cancelAnimationFrame(raf)
  }
}

const cancel = timeout(() => {
  console.log('timeout')
}, 2000)
