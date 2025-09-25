export function past(h: number, m: number, s: number): number {
    let hoursToMs = h * 3600000;
    let minutesToMs = m * 60000;
    let secondsToMs = s * 1000;

    let sum = hoursToMs + minutesToMs + secondsToMs;

    return sum;
}
