export function toAlternatingCase(s: string): string {
    let splitted = s.split("");

    for (let i = 0; i < splitted.length; i++) {
        if (splitted[i] === splitted[i].toUpperCase()) {
            splitted[i] = splitted[i].toLowerCase();
        } else {
            splitted[i] = splitted[i].toUpperCase();
        }
    }

    return splitted.join("");
}

export function toAlternatingCase2(s: string): string {
    return s
        .split("")
        .map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
        .join("");
}
