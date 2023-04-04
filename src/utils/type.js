export function isTypeObject(value) {
  return Object.prototype.toString.call(value) === '[object Object]'
}
