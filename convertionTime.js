/**
 * Converte uma **String** com horario no formato americano `(12h)`
 * para o horario brasileiro `(24h)`
 * @param {string} s A hora em formato **12 horas**
 * @returns A hora em formato **24 horas**
 */
function timeConvertion(s) {
    s.split(""); //Split para transformar o String em Array.
    /**
     * Transformando os numeros **String** em numeros **Number** com parseInt e somando eles.
     */
    let hours = parseInt(s[0] + s[1]);
    console.log(hours);
    /**
     * Guardar os minutos, que não precisam ser transformados em Number.
     */
    let minutes = s[3] + s[4];
    /**
     * Guardar os segundos, que não precisam ser transformados em Number.
     */
    let seconds = s[6] + s[7];
    /**
     * Conta o tamanho do array e volta 2 casas, pegando o valor que está nessa casa.
     */
    let amPm = s[s.length - 2];

    // Se o valor de hours for maior que 12 e amPm for A, hours diminui 12 horas.
    // EX: Se 12:00:00AM, 1+2 = 12 (ele entende que é um dezena) então diminui 12 para formar 00h.
    if (hours >= 12 && amPm === "A") {
        hours -= 12;
    }
    // Se o valor de hours for menor que 12 e amPm for P, hours aumenta 12 horas.
    // EX: Se 11:00:00PM, 1 + 1 = 11 (ele entende que é um dezena) então aumenta 12 para formar 23 horas.
    else if (hours < 12 && amPm === "P") {
        hours += 12;
    }
    // Se o valor de hours for verdadeiro(true) à condição, menor que 10, retorna o if caso false o else.
    if (hours < 10) {
        return `0${hours}:${minutes}:${seconds}`;
    } else {
        return `${hours}:${minutes}:${seconds}`;
    }
}

console.log(timeConvertion("12:00:00AM"));
//Por fim o testes 12:00:00AM = 00:00:00, 12:00:00PM = 12:00:00, 06:00:00AM = 06:00:00 e 06:00:00PM = 18:00:00;
