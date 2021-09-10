import { calcLuminance } from '../src/index'

describe('Test luminance with string input', () => {
  test('Check if dark color is > 0.5', () => {
    expect(calcLuminance('100', '100', '100')).toBeLessThan(0.5)
  })
  test('Check if dark color is < 0.5', () => {
    expect(calcLuminance('200', '200', '200')).toBeGreaterThan(0.5)
  })
})

describe('Test luminance with number input', () => {
  test('Check if dark color is > 0.5', () => {
    expect(calcLuminance(100, 100, 100)).toBeLessThan(0.5)
  })
  test('Check if dark color is < 0.5', () => {
    expect(calcLuminance(200, 200, 200)).toBeGreaterThan(0.5)
  })
})
