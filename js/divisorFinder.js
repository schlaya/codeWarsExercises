function getDivisorsCnt(n) {
    let results = [];

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) results.push(i);
    }

    console.log(results);
    return results.length;
}
