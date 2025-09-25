export function setAlarm(employed: boolean, vacation: boolean) {
    return employed && vacation
        ? false
        : employed && !vacation
        ? true
        : !employed && vacation
        ? false
        : false;
}
