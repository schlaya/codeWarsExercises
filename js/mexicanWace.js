function wave(str) {
    let result = [];
    let lower = str.toLowerCase();

    for (let i = 0; i < lower.length; i++) {
        if (lower[i] === " ") continue;

        let word = "";

        for (let j = 0; j < lower.length; j++) {
            if (j === i) {
                word += lower[j].toUpperCase();
            } else {
                word += lower[j];
            }
        }

        result.push(word);
    }

    return result;
}
