/**
* Кастомная реализация суммы
* @param a - значение 1
* @param b - значение 2
* @returns Сумма чисел
 */
function sumSafe(a, b) {
    const isNumLeft = typeof a === 'number'
    const isNumRight = typeof b === 'number'

    if (isNumLeft & isNumRight) {
        return a + b;
    } else if (!isNumRight & isNumLeft) {
        throw new Error("The right operand is not number");
    } else if (!isNumLeft & isNumRight) {
        throw new Error("The left operand is not number");
    } else { 
      throw new Error("Operands are not numbers"); 
    }
}

console.log(sumSafe(1, 1))

