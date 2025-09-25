function solution(str) {
    return str.split("").reverse().join("");
}

// same as

// the spread operator does the same to the string as split
const solution = (str) => [...str].reverse().join("");
