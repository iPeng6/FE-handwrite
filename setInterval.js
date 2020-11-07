function interval(fn, cycle) {
  let raf
  let last = Date.now()
  let now
  function loop() {
    now = Date.now()
    if (now - last >= cycle) {
      fn()
      last = now
    }

    raf = requestAnimationFrame(loop)
  }
  loop()
  return () => {
    cancelAnimationFrame(raf)
  }
}

const cancel = interval(() => {
  console.log(1)
}, 1000)
