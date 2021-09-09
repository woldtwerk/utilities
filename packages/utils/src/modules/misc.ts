/**
 * Calculates a luminance value of a given rgb value.
 *
 * @param red Red value 0 - 255.
 * @param green Green value 0 - 255.
 * @param blue Blue value 0 - 255.
 * @return Luminance value between 0 - 1.
 */
export const calcLuminance = (
  red: number | string,
  green: number | string,
  blue: number | string
): number => {
  const rgb = [
    typeof red === 'string' ? parseInt(red, 10) : red,
    typeof green === 'string' ? parseInt(green, 10) : green,
    typeof blue === 'string' ? parseInt(blue, 10) : blue,
  ]
  return (rgb[0] * 0.299 + rgb[1] * 0.587 + rgb[2] * 0.114) / 255
}
