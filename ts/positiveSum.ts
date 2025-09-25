export function positiveSum(arr: number[]): number {
    let sum = 0;

    for (let number of arr) {
        if (number > 0) {
            sum += number;
        }
    }

    return sum;
}
