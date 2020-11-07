/**
 * 统一一段时间内总帧数，得到一帧需要的毫秒数，再用 1000 毫秒除以 一帧所需要的时间
 * 前面不是很准，但是时间越长越准确
 */
function fps() {
  let frame = 0
  let start = Date.now()
  let now
  let raf
  function loop() {
    frame++
    now = Date.now()

    const fps = Math.round(1000 / ((now - start) / frame))

    // 一秒内的可能不太准
    if (frame > 100) {
      console.log(fps)
    }

    raf = requestAnimationFrame(loop)
  }
  loop()
  return () => {
    cancelAnimationFrame(raf)
  }
}

// 直接统计 requestAnimationFrame 时间得到每一帧时间 得到fps 不太稳定
function fps2() {
  let last = Date.now()
  let raf
  function loop() {
    const fps = Math.round(1000 / (Date.now() - last))
    console.log(fps)
    last = Date.now()
    raf = requestAnimationFrame(loop)
  }
  loop()
  return () => {
    cancelAnimationFrame(raf)
  }
}
