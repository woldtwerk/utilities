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

describe('Test remomveOnce()', () => {
  test('Check if removeOnce returns all elements', () => {
    document.body.innerHTML = dom
    expect(document.querySelectorAll('.once-me-please').removeOnce()).toEqual(
      []
    )
    document.querySelectorAll('.once-me-please').once()
    expect(
      document.querySelectorAll('.once-me-please').removeOnce().length
    ).toEqual(2)
  })

  test('Check if prop gets removed when set is empty', () => {
    document.body.innerHTML = dom
    document.querySelectorAll('.once-with-key').once()
    expect(
      document.querySelector('.once-with-key')!.drupalOnce?.has('once')
    ).toBeTruthy()
    document.querySelectorAll('.once-with-key').removeOnce()
    expect(
      document.querySelector('.once-with-key')!.hasOwnProperty('drupalOnce')
    ).toBeFalsy()
  })

  test('Check removing multiple onces', () => {
    document.body.innerHTML = dom
    document.querySelectorAll('.once-with-key').once()
    document.querySelectorAll('.once-with-key').once('once2')
    expect(document.querySelector('.once-with-key')!.drupalOnce?.size).toEqual(
      2
    )
    document.querySelectorAll('.once-with-key').removeOnce('once')
    expect(document.querySelector('.once-with-key')!.drupalOnce?.size).toEqual(
      1
    )
    document.querySelectorAll('.once-with-key').removeOnce('once2')
    expect(
      document.querySelector('.once-with-key')!.hasOwnProperty('drupalOnce')
    ).toBeFalsy()
  })
})
