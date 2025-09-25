export function bouncingBall(
    h: number,
    bounce: number,
    window: number
): number {
    let bounces = 0;

    if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
        while (h > window) {
            bounces++;
            h *= bounce;
            if (h > window) bounces++;
        }
    } else {
        return -1;
    }

    return bounces;
}
