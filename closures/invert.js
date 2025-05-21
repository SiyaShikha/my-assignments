const invert = function (f) {
  return function (...args) {
    return !f(...args)
  }
}