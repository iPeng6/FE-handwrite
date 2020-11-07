function compose(...fns) {
  return (...args) => {
    return fns.slice(1).reduce((ret, fn) => fn(ret), fns[0](...args))
  }
}

const add = (x, y) => x + y
const square = (z) => z * z
const doble = (m) => m * 2

const nf = compose(add, square, doble)

console.log(nf(1, 2))
