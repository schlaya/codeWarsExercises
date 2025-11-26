function dnaStrand(dna) {
    let result = [];

    for (let i = 0; i < dna.length; i++)
        switch (dna[i]) {
            case "T":
                result.push("A");
                break;
            case "A":
                result.push("T");
                break;
            case "C":
                result.push("G");
                break;
            case "G":
                result.push("C");
                break;
        }

    return result.join("");
}
