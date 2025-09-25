function createPhoneNumber(numbers) {
    // join('') is needed because we want to group them togehter and not have them separated by a comma
    const area = numbers.slice(0, 3).join("");
    const mid = numbers.slice(3, 6).join("");
    const last = numbers.slice(6, numbers.length).join("");

    return `(${area}) ${mid}-${last}`;
}

// the same but cleverer

function createPhoneNumber(numbers) {
    var format = "(xxx) xxx-xxxx";

    for (var i = 0; i < numbers.length; i++) {
        format = format.replace("x", numbers[i]);
    }

    return format;
}
