function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function (num) {
        return num % 2 === 0
    });
}

// Refactor to use the rest oprater and an arrow function

const filterOutOddsArrow = (...args) => args.filter(num => num % 2 === 0)

// Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.

const findMin = (...args) => Math.min(...args);

// Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

const mergeObjects = (obj1, obj2) => newObj = { ...obj1, ...obj2 }

// Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.

const doubleAndReturnArgs = (arr, ...extra) => newArr = [...arr, ...extra.map(value => value * 2)]

// For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = items => {
    let randIndex = Math.floor(Math.random() * items.length);
    return [...items.slice(0, randIndex), ...items.slice(randIndex + 1)]
}

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => newArr = [...array1, ...array2]


/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => newObj = { ...obj, [key]: val }


/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
    let newObj = { ...obj }
    delete newObj[key]
    return newObj;
}


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => newObj = { ...obj1, ...obj2 }


/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
}