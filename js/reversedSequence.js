const reverseSeq = (n) => {
    let result = [];

    for (let i = 0; i < n; i++) result.push(n - i);

    console.log(result);
    return result;
};
