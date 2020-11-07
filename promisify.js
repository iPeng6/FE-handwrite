function promisify(fn) {
  return (...args) =>
    new Promise((resolve, reject) => {
      fn(args, (error, value) => {
        if (error) {
          reject(error)
        } else {
          resolve(value)
        }
      })
    })
}

function test(name, callback) {
  setTimeout(() => {
    callback(null, name + ' ok')
  }, 1000)
}

test('test', (error, value) => {
  if (error) {
    console.log(error)
    return
  }
  console.log(value)
})

const ptest = promisify(test)

ptest('ptest')
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })
