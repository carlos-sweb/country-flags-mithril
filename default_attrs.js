/**
 * Returns default SVG attributes for a flag component.
 * @param {number} width - The desired width in pixels (default 640)
 * @param {number} height - The desired height in pixels (default 480)
 * @returns {object} SVG attribute object
 */
export default function(width = 640, height = 480) {
  return {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 640 480',
    width,
    height,
  }
}
