function solutionFn(obj) {
    const countTypes = {}

    for (const key in obj) {
        const type = typeof obj[key]
        if (countTypes[type] === undefined) {
            countTypes[type] = 1;
        } else {
            countTypes[type]++;
        }
    }

    return countTypes;
}

const initialObj = {
    a: 'some string 1',
    b: 42,
    c: { c1: 'some string 2' },
    d: [],
    e: 123,
};

const resultObj = solutionFn(initialObj);

console.log(resultObj);
/**
 * {
 *   string: 1,
 *   number: 2,
 *   object: 2
 * } 
 */