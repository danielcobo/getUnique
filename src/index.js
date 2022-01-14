/**
 * Filter array for unqiue primitive data values
 * @public
 * @param {array} arr - array of JS primitives (see https://developer.mozilla.org/en-US/docs/Glossary/Primitive)
 * @returns {array} - array of unique values
 */
module.exports = function getUnique(arr) {
  const exists = {};
  return arr.filter(function (val) {
    if (!exists[val]) {
      exists[val] = true;
      return true;
    }
  });
};
