function mNew(Ctor, ...args) {
  const o = Object.create(Ctor.prototype)

  const res = Ctor.apply(o, args)

  return typeof res === 'object' && res !== null ? res : o
}
