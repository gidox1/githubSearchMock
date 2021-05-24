export const isNotEmptyArray = (arr: any[]): boolean => Array.isArray(arr) && arr.length > 0

export const composeStrings = (...classes: Array<string | boolean | undefined>): string => classes
  .filter(i => i).join(' ')
