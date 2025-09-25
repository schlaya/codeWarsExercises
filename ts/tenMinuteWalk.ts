export function isValidWalk(walk: string[]) {
    if (walk.length !== 10) return false;

    let ns = 0;
    let ew = 0;

    for (const dir of walk) {
        switch (dir) {
            case "n":
                ns++;
                break;
            case "s":
                ns--;
                break;
            case "e":
                ew++;
                break;
            case "w":
                ew--;
                break;
        }
    }

    return ns === 0 && ew === 0;
}
