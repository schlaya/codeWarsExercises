function longest(s1, s2) {
    let newArray = s1.concat(s2).split("");
    let resultArray = [];

    for (const letters of newArray) {
        if (!resultArray.includes(letters)) {
            resultArray.push(letters);
        }
    }

    return resultArray.sort().join("");
}
