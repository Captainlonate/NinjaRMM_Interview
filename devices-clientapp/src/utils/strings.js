export const isString = (str) => typeof str === 'string'

export const replaceSeparators = (str) => (
  isString(str)
    ? str.replace(/[-_]/g, ' ')
    : str
)