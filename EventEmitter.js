class EventEmitter {
  constructor() {
    this.events = Object.create(null)
  }
  on(type, callback) {
    if (this.events[type]) {
      this.events[type].push(callback)
    } else {
      this.events[type] = [callback]
    }
  }
  off(type, callback) {
    if (this.events[type]) {
      if (callback === undefined) {
        this.events[type] = []
        return
      }
      this.events = this.events.filter(
        (fn) => fn !== callback && fn !== callback.realCallback
      )
    }
  }
  once(type, callback) {
    const wrap = (...args) => {
      callback.apply(this, args)
      this.off(type, callback)
    }
    wrap.realCallback = callback // 存储真实的 callback 用于  off(type, callback) 移除
    this.on(type, wrap)
  }
  emit(type, ...args) {
    if (this.events[type]) {
      this.events[type].forEach((fn) => fn.apply(this, args))
    }
  }
}

const girl = new EventEmitter()

girl.on('失恋', () => console.log('哭了'))
girl.on('失恋', () => console.log('喝酒'))

girl.emit('失恋')
