/**
 * Кастомная реализация метода Array.prototype.filter
 * 
 * @param {Array} array - массив
 * @param {Function} filterFn - фильтрующая функция
 * @param {Boolean} inplace - флаг "модифицируем исходный массив или нет"
 * @returns {Array} - отфильтрованный массив
 */
function filter(array, filterFn, inplace = false) {
  const resultArr = inplace ? array : [...array];  
  let i = 0  
  while (i < resultArr.length) {
    const result = filterFn(resultArr[i]);
    if (!result) {
      resultArr.splice(i, 1);
    } else {
      i++
    }
  }
  return resultArr;
}

let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = filter(words, (word) => word.length > 6, inplace = false);

console.log(result); // ["exuberant", "destruction", "present"]

console.log(words); // ["exuberant", "destruction", "present"]