export const pigIt = (a: string) => {
    let words = a.split(" ");

    let result = [];

    for (let word of words) {
        let letters = word.split("");
        letters.push(letters[0]);
        letters.push("ay");
        letters.shift();

        result.push(letters.join(""));
    }

    return result.join(" ");
};
