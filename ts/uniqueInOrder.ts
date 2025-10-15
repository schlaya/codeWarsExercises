export function uniqueInOrder(
    iterable: string | (string | number)[]
): (string | number)[] {
    let lastValue: string | number | null = null;

    const inputArray: (string | number)[] =
        typeof iterable === "string" ? iterable.split("") : iterable;

    const newArray: (string | number)[] = [];

    for (let i = 0; i < inputArray.length; i++) {
        if (lastValue === null) {
            newArray.push(inputArray[i]);
            lastValue = inputArray[i];
        } else if (lastValue !== inputArray[i]) {
            newArray.push(inputArray[i]);
            lastValue = inputArray[i];
        }
    }

    return newArray;
}
