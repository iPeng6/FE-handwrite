function instanceOf(left, right) {
  left = left.__proto__
  let rightV = right.prototype
  while (left) {
    if (left === rightV) {
      return true
    }
    left = left.__proto__
  }
  return false
}

function A() {}
let a = new A()
b = Object.create(a)

console.log(b instanceof A)
console.log(instanceOf(b, A))
