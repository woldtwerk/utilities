/**
 * Wrap custom property with tailwind opacity value.
 * @param rgb - rgb value.
 * @returns a rgb value or rgba value.
 */
export const color =
  (rgb: string): Function =>
  ({ opacityValue }: { opacityValue: string | undefined }): string =>
    opacityValue !== undefined
      ? `rgb(var(${rgb}) / ${opacityValue})`
      : `rgb(var(${rgb}))`
