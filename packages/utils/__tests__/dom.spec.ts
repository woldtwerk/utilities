/**
 * @jest-environment jsdom
 */

document.body.innerHTML = `
  <div class="one">1</div>
  <div class="two">2</div>
  <div class="three">3</div>
`

import { $, $$ } from '../src/index'

describe('test querySelector', () => {
  test('returns correct type', () => {
    expect($('.two')).toBeInstanceOf(Element)
  })
  test('returns null if not found', () => {
    expect($('.four')).toBe(null)
  })
  test('correct element', () => {
    expect($('.two')?.outerHTML).toBe('<div class="two">2</div>')
  })
})

describe('test querySelectorAll', () => {
  test('returns correct type', () => {
    expect($$('div')).toBeInstanceOf(Array)
  })
  test('returns all Elements', () => {
    expect($$('div').length).toEqual(3)
  })
  test('returns all Elements', () => {
    expect($$('span')).toEqual([])
  })
})
