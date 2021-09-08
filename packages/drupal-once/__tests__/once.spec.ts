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

describe('Test once()', () => {
  document.body.innerHTML = dom

  test('Check if once returns all elements', () => {
    expect(document.querySelectorAll('.once-me-please').once().length).toBe(2)
    expect(document.querySelectorAll('.once-me-please').once().length).toBe(0)
  })

  test('Check if elements were onced', () => {
    document.querySelectorAll('.once-me-please').forEach((element) => {
      expect(element.drupalOnce.has('once')).toBeTruthy
    })
  })

  test('Check if other elements did not get onced', () => {
    document.querySelectorAll(':not(.once-me-please)').forEach((element) => {
      expect(element.hasOwnProperty('drupalOnce')).toBeFalsy
    })
  })
})

describe('Test once() with custom key', () => {
  document.body.innerHTML = dom

  test('Check if once returns all elements', () => {
    expect(
      document.querySelectorAll('.once-with-key').once('myOnceKey').length
    ).toBe(1)
  })

  test('Check if elements were onced', () => {
    document.querySelectorAll('.once-with-key').forEach((element) => {
      expect(element.drupalOnce.has('myOnceKey')).toBeTruthy
    })
  })

  test('Check if other elements did not get onced', () => {
    document.querySelectorAll(':not(.once-with-key)').forEach((element) => {
      expect(element.hasOwnProperty('drupalOnce')).toBeFalsy
    })
  })
})

describe('Test once() with multiple keys', () => {
  document.body.innerHTML = dom

  test('Check if all 3 once keys are present', () => {
    document.querySelectorAll('.once-with-key').once('myOnceKey')
    document.querySelectorAll('.once-with-key').once('myOnceKey2')
    document.querySelectorAll('.once-with-key').once('myOnceKey3')
    const element = document.querySelector('.once-with-key')

    expect(element.hasOwnProperty('drupalOnce')).toBeTruthy
    expect(element.drupalOnce.size).toEqual(3)
    expect(element.drupalOnce.has('myOnceKey'))
    expect(element.drupalOnce.has('myOnceKey2'))
    expect(element.drupalOnce.has('myOnceKey3'))
  })
})
