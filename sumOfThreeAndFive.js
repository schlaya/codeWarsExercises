const solution = (num) => {
    let sum = 0;
    for (let i = 0; i < num; i++)
        i % 3 === 0 || i % 5 === 0 ? (sum += i) : null;
    return sum;
};
