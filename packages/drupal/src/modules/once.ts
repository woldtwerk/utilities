export {}

const __ONCE_PROP__ = 'drupalOnce'
const __DEFAULT_KEY__ = 'once'

declare global {
  interface NodeList {
    once(key?: string): Array<Element>
    removeOnce(key?: string): Array<Element>
    findOnce(key?: string): Array<Element>
  }

  interface Element {
    [__ONCE_PROP__]: Set<string>
  }
}

/*
 * jQuery once() equivalent.
 */
NodeList.prototype.once = function addOnce(
  key: string = __DEFAULT_KEY__
): Array<Element> {
  return Array.from(this as NodeListOf<Element>).filter((element: Element) => {
    if (
      element.hasOwnProperty(__ONCE_PROP__) &&
      !element[__ONCE_PROP__].has(key)
    ) {
      element[__ONCE_PROP__].add(key)
    } else {
      element[__ONCE_PROP__] = new Set([key])
    }
    return element
  })
}

/*
 * jQuery removeOnce() equivalent.
 * @return Array with HTMLElements who's once has been removed.
 */
NodeList.prototype.removeOnce = function removeOnce(
  key: string = __DEFAULT_KEY__
): Array<Element> {
  return Array.from(this as NodeListOf<Element>).filter((element: Element) => {
    if (!element.hasOwnProperty(__ONCE_PROP__)) return
    element[__ONCE_PROP__].delete(key)
    return element
  })
}

/*
 * jQuery findOnce() equivalent.
 */
NodeList.prototype.findOnce = function findOnce(
  key: string = __DEFAULT_KEY__
): Array<Element> {
  return Array.from(this as NodeListOf<Element>).filter((element: Element) => {
    if (!element.hasOwnProperty(__ONCE_PROP__)) return
    if (!element[__ONCE_PROP__].has(key)) return
    return element
  })
}
