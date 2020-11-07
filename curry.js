/**
 * function sum(a, b, c) {
 *  return a+b+c
 * }
 *
 * sum(1,2,3) => sum(1)(2)(3)
 */

function curry(fn) {
  const params = []
  const l = fn.length
  return function f(a) {
    params.push(a)
    if (params.length === l) {
      return fn.apply(null, params)
    }
    return f
  }
}

function sum(a, b, c) {
  return a + b + c
}

const csum = curry(sum)

const res = csum(1)(2)(3)
console.log(res)
