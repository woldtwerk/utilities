/**
 * @jest-environment jsdom
 */

import '../src/index'

const dom = `
    <div class="once-me-please">1</div>
    <div class="once-me-please">2</div>
    <div class="once-with-key">3</div>
    <div>4</div>
    <div>5</div>
  `

describe('Test findOnce()', () => {
  test('Check if findOnce returns all elements', () => {
    document.body.innerHTML = dom
    expect(document.querySelectorAll('.once-me-please').findOnce()).toEqual([])
    document.querySelectorAll('.once-me-please').once()
    expect(
      document.querySelectorAll('.once-me-please').findOnce().length
    ).toEqual(2)
    document.querySelectorAll('div').once('once2')
    expect(
      document.querySelectorAll('.once-me-please').findOnce().length
    ).toEqual(2)
    expect(
      document.querySelectorAll('.once-me-please').findOnce('wrong-key').length
    ).toEqual(0)
  })
})
