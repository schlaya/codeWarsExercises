const noSpace = (x) =>
    x
        .split("")
        .filter((char) => char !== " ")
        .join("");
