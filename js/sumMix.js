function sumMix(x) {
    let sum = 0;
    for (let i = 0; i < x.length; i++)
        if (typeof x[i] !== Number) sum += parseInt(x[i]);
        else sum += x[i];
    return sum;
}

// will return sum of an array where numbers are mixed from strings and numbers

const sumMix = (x) => {
    let sum = 0;
    for (let i = 0; i < x.length; i++)
        typeof x[i] !== Number ? (sum += parseInt(x[i])) : (sum += x[i]);
    return sum;
};
