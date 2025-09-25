export const listSquared = (m: number, n: number): number[][] => {
    const result: [number, number][] = [];

    for (let num = m; num <= n; num++) {
        let divisors = [];

        for (let i = 1; i <= num; i++) {
            if (num % i === 0) divisors.push(i);
        }

        const sumSquares = divisors.reduce((sum, d) => sum + d * d, 0);

        if (Number.isInteger(Math.sqrt(sumSquares))) {
            result.push([num, sumSquares]);
        }
    }

    return result;
};
