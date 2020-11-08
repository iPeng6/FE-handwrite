function fibonacci(n) {
  if (n === 0) return 0
  if (n === 1 || n === 2) return 1
  return fibonacci(n - 1) + fibonacci(n - 2)
}

function fibonacci2(n) {
  if (n === 0) return 0
  if (n === 1 || n === 2) return 1
  let n1 = 1,
    n2 = 1,
    sum = n1 + n2
  for (let i = 3; i <= n; i++) {
    sum = n1 + n2
    n1 = n2
    n2 = sum
  }
  return sum
}

console.log(fibonacci2(3))

const list = []
function fibonacci3(n) {
  if (list[n] !== undefined) return list[n]
  if (n === 0 || n === 1) {
    return (list[n] = n)
  }
  return (list[n] = fibonacci3(n - 1) + fibonacci3(n - 2))
}
fibonacci3(10)
console.log(list)
