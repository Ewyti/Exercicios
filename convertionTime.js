/**
 * Converte uma **String** com horario no formato americano `(12h)`
 * para o horario brasileiro `(24h)`
 * @param {string} s A hora em formato **12 horas**
 * @returns A hora em formato **24 horas**
 */
function timeConvertion(s) {
    s.split("");

    let hours = parseInt(s[0] + s[1]);
    let minutes = s[3] + s[4];
    let seconds = s[6] + s[7];
    let amPm = s[s.length - 2];

    if (hours >= 12 && amPm === "A") {
        hours -= 12;
    } else if (hours < 12 && amPm === "P") {
        hours += 12;
    }

    if (hours < 10) {
        return `0${hours}:${minutes}:${seconds}`;
    } else {
        return `${hours}:${minutes}:${seconds}`;
    }
}

console.log(timeConvertion("06:40:03PM"));
//18:40:03
