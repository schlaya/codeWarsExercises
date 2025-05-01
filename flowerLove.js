function lovefunc(flower1, flower2) {
    if (
        (flower1 % 2 === 0 && flower2 % 2 !== 0) ||
        (flower2 % 2 === 0 && flower1 % 2 !== 0)
    )
        return true;
    else return false;
}

// same as

const lovefunc = (f1, f2) =>
    (f1 % 2 === 0 && f2 % 2 !== 0) || (f2 % 2 === 0 && f1 % 2 !== 0)
        ? true
        : false;
