const foo = async () => {
  throw new Error('err foo')
}

const main = async () => {
  try {
    return foo()
  } catch {
    console.log('catched')
  }
}

main()
