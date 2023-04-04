import { isTypeObject } from './type'
export function formatPerms(points) {
  if (!Array.isArray(points)) {
    return isTypeObject(points) ? points : {}
  }
  const objPoints = {}
  points.forEach((key) => {
    objPoints[key] = true
  })
  return objPoints
}
