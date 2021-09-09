/**
 *
 * @param css
 * @param context
 * @returns
 */
export const $ = (
  css: string,
  context: Element | ShadowRoot | Document = document
): Element | null => context.querySelector(css)

/**
 *
 * @param css
 * @param context
 * @returns
 */
export const $$ = (
  css: string,
  context: Element | ShadowRoot | Document = document
): Element[] => Array.from(context.querySelectorAll(css))
