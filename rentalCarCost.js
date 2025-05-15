const rentalCarCost = (d) => {
    let sum = 0;
    d >= 7
        ? (sum += d * 40 - 50)
        : d >= 3
        ? (sum += d * 40 - 20)
        : (sum += d * 40);
    return sum;
};

// if longer than seven days, - 50 of total
// if longer than three days, - 20 of total

const rentalCarCost2 = (d) => d * 40 - (d > 6 ? 50 : d > 2 ? 20 : 0);
