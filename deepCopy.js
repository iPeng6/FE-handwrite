function deepCopy(obj) {
  if (typeof obj !== 'object') return obj
  const o = { ...obj }
  Object.keys(o).forEach((key) => {
    const value = o[key]
    if (Array.isArray(value)) {
      o[key] = value.map((item) => {
        return deepCopy(item)
      })
    } else if (
      Object.prototype.toString.call(value).slice(8, -1) === 'Object'
    ) {
      o[key] = deepCopy(value)
    }
  })
  return o
}

const a = { a: { b: null }, b: [{ a: 1 }], c: function () {} }
const b = deepCopy(a)

b.a.b = 2
b.b[0].a = 2

console.log(a, b)
