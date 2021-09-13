import { complement, propEq } from 'ramda'

export const isFunction = (func) => typeof func === 'function'

export const propNotEq = complement(propEq)