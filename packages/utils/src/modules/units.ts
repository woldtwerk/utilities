/**
 * Transforms pixel value to rem.
 * @param {number} px - Pixel value which for transformation.
 * @param {number} base - Base pixel value.
 * @param {number} precision - Precision of decimal value.
 * @returns {string} Pixel value relative to base.
 */
export const remCalc = (
  px: number,
  base: number = 16,
  precision: number = 3
): string => `${(px / base).toFixed(precision).replace(/\.?0*$/, '')}rem`
