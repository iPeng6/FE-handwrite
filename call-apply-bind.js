/**
 * fn.call(ctx,p1,p2)
 */
Function.prototype.call = function (ctx, ...args) {
  ctx = typeof ctx === 'object' && ctx !== null ? ctx : window
  const key = Symbol()
  ctx[key] = this
  const res = ctx[key](...args)
  delete ctx[key]
  return res
}

fn.call({ a: 1 })

/**
 * fn.apply(ctx, [p1, p2])
 */
Function.prototype.apply = function (ctx, args) {
  ctx = typeof ctx === 'object' && ctx !== null ? ctx : window
  const key = Symbol()
  ctx[key] = this
  return ctx[key](...args)
}

/**
 * newFn = fn.bind(this, p1, p2)
 */
Function.prototype.bind = function (ctx, ...args) {
  ctx = typeof ctx === 'object' && ctx != null ? ctx : window
  const key = Symbol()
  ctx[key] = this
  return (...parms) => {
    return ctx[key](...[...args, ...parms])
  }
}
