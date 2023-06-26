/**
 * Returns a random number within the specified range
 * @param {number} range - The range of the random number
 * @param {number} [offset=0] - The offset of the random number
 * @returns {number} A random number within the specified range
 */
export function rnd(range, offset = 0) {
    return Math.floor(Math.random() * Math.abs(range)) + offset;
}
