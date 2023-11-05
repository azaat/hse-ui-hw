function getMinimalCVS(initialArray) {
    const history = [initialArray];

    function head() {
        return history[history.length - 1];
    }

    function push(element) {
        const newArray = [...head(), element];
        history.push(newArray)
    }

    function pop() {
        if (head().length === 0) {
            throw new Error("Can't pop from an empty array.")
        }
        const newArray = [...head()];
        const poppedElement = newArray.pop()
        history.push(newArray);
        return poppedElement;
    }

    return {
        head,
        history: () => [...history],
        push,
        pop,
    };
}

const cvs = getMinimalCVS(['a', 'b', 'c']);


console.log(cvs.head());    // ['a', 'b', 'c']
console.log(cvs.pop());     // 'c'

cvs.push('d');
cvs.push('e');

console.log(cvs.head());    // ['a', 'b', 'd', 'e']
console.log(cvs.history());
/**
 * [
 *   ['a', 'b', 'c'],
 *   ['a', 'b'],
 *   ['a', 'b', 'd'],
 *   ['a', 'b', 'd', 'e']
 * ]
 */