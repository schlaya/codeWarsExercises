function solution(str) {
    // if str is odd fill it up
    if (str.length % 2 !== 0) str += "_";

    const result = [];

    for (let i = 0; i < str.length; i += 2)
        // slice needs a beginning and an end
        // here i is the beginning and i + 2 is where it should end
        result.push(str.slice(i, i + 2));

    return result;
}
