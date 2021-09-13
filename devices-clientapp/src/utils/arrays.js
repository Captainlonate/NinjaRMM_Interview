export const sortObjectsByKey = (key) => (order) => (arrOfObjects) => {
  return [...arrOfObjects].sort((a, b) => {
    if (a[key] === b[key]) {
      return 0
    }
    if (a[key] < b[key]) {
      return (order === 'ASC') ? -1 : 1
    }
    return (order === 'ASC') ? 1 : -1
  })
}

export const isNonEmptyArray = (arr) => Array.isArray(arr) && arr.length > 0

export const filterObjectsWithKeyAmong = (key) => (filters, arrOfObjects) => (
  isNonEmptyArray(filters)
    ? arrOfObjects.filter((obj) => filters.includes(obj[key]))
    : arrOfObjects
)
