function enough(cap, on, wait) {
    if (on + wait <= cap) return 0;
    else return Math.abs(cap - on - wait);
}

const enough = (cap, on, wait) =>
    on + wait <= cap ? 0 : Math.abs(cap - on - wait);
