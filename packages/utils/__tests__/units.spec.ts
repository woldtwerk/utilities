import { remCalc } from '../src/index'

describe('Test remCalc()', () => {
  test('Check value', () => {
    expect(remCalc(20)).toEqual(`1.25rem`)
  })
  test('Check with different base', () => {
    expect(remCalc(20, 20)).toEqual(`1rem`)
  })
  test('Check rounding', () => {
    expect(remCalc(33, undefined, 6)).toEqual(`2.0625rem`)
  })
})
