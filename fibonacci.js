function fibonacci(n) {
  if (n === 0 || n === 1) return n
  return fibonacci(n - 1) + fibonacci(n - 2)
}

for (let i = 0; i < 8; i++) {
  console.log('fibonacci', fibonacci(i))
}

function fibonacci2(n) {
  if (n === 0 || n === 1) return n
  if (n === 2) return 1
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

for (let i = 0; i < 8; i++) {
  console.log('fibonacci2', fibonacci2(i))
}

const list = []
function fibonacci3(n) {
  if (n === 0 || n === 1) {
    return (list[n] = n)
  }
  if (list[n] !== undefined) return list[n]
  return (list[n] = fibonacci3(n - 1) + fibonacci3(n - 2))
}
fibonacci3(8)
console.log(list)
