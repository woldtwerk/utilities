import { color } from '../src/index'

describe('use css custom properties with tailwind', () => {
  test('without opacity value', () => {
    expect(color('50 150 200')({})).toEqual(`rgb(var(50 150 200))`)
  })
  test('with opacity value', () => {
    expect(
      color('50 150 200')({ opacityValue: 'var(--tw-text-opacity)' })
    ).toEqual(`rgb(var(50 150 200) / var(--tw-text-opacity))`)
  })
})
