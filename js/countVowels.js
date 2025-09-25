const getCount = (str) => {
    let count = 0;
    for (let i = 0; i < str.length; i++)
        "aeiou".includes(str[i]) ? count++ : null;
    return count;
};
