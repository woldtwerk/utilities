export {}

const ONCE_PROP = 'drupalOnce'
const DEFAULT_KEY = 'once'

declare global {
  interface NodeList {
    once(key?: string): Array<Element>
    removeOnce(key?: string): Array<Element>
    findOnce(key?: string): Array<Element>
  }

  interface Element {
    [ONCE_PROP]?: Set<string>
  }
}

/**
 * jQuery once() equivalent.
 *
 * @param key Key to use as once ID.
 * @returns Array of onced elements.
 */
NodeList.prototype.once = function (key = DEFAULT_KEY): Array<Element> {
  return Array.from(this as NodeListOf<Element>).filter((element: Element) => {
    if (element.hasOwnProperty(ONCE_PROP)) {
      if (element[ONCE_PROP]!.has(key)) return
      element[ONCE_PROP]!.add(key)
    } else {
      element[ONCE_PROP] = new Set([key])
    }
    return element
  })
}

/**
 * jQuery removeOnce() equivalent.
 *
 * @param key Key to use as once ID.
 * @returns Array with Elements which once has been removed.
 */
NodeList.prototype.removeOnce = function (key = DEFAULT_KEY): Array<Element> {
  return Array.from(this as NodeListOf<Element>).filter((element: Element) => {
    if (!element.hasOwnProperty(ONCE_PROP)) return
    if (element[ONCE_PROP]!.size === 1) {
      delete element[ONCE_PROP]
    } else {
      element[ONCE_PROP]!.delete(key)
    }
    return element
  })
}

/**
 * jQuery findOnce() equivalent.
 *
 * @param key Key to use as once ID.
 * @returns Array with Elements which were onced.
 */
NodeList.prototype.findOnce = function findOnce(
  key = DEFAULT_KEY
): Array<Element> {
  return Array.from(this as NodeListOf<Element>).filter((element: Element) => {
    if (!element.hasOwnProperty(ONCE_PROP)) return
    if (!element[ONCE_PROP]!.has(key)) return
    return element
  })
}
