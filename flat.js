/**
 * [1, [2,[3, 4], 5]] => [1,2,3,4,5]
 */
function flat(arr) {
  return arr.reduce((ret, item) => {
    if (Array.isArray(item)) {
      return ret.concat(flat(item))
    }
    return ret.concat(item)
  }, [])
}

function flat2(arr, depth = 1) {
  function loop(arr, i) {
    return arr.reduce((ret, item) => {
      if (i < depth && Array.isArray(item)) {
        const res = ret.concat(loop(item, i + 1))
        return res
      }
      return ret.concat(item)
    }, [])
  }
  return loop(arr, 1)
}

console.log(flat2([1, [2, [3, [4, 5]]], 7, [[[8], 9], 0]], 2))
