/*
написать функцию которая получает на вход строку с:
- суммой стредвств - 1000;
- валютой - руб;
- целевой валютой - $;
Возвращает число с новой заданной валютой, 
если конвертация поддерживается, или null если не поддерживается.
Ставки конвертации хранятся внутри функции  

*/

const USD_TO_RUB = 97.41;
const EUR_TO_RUB = 103.16;
const EUR_TO_USD = EUR_TO_RUB / USD_TO_RUB;

function con(sum, originalCurrency, targetСurrency) {
    switch (true) {
        case originalCurrency === 'rub':
            if (targetСurrency === 'usd') {
                return sum / USD_TO_RUB;
            } else if (targetСurrency === 'eur') {
                return sum / EUR_TO_RUB;
            }
            break;
        case originalCurrency === 'usd':
            if (targetСurrency === 'rub') {
                return sum * USD_TO_RUB;
            } else if (targetСurrency === 'eur') {
                return sum / EUR_TO_USD;
            }
            break;
        case originalCurrency === 'eur':
            if (targetСurrency === 'rub') {
                return sum * EUR_TO_RUB;
            } else if(targetСurrency === 'usd') {
                return sum * EUR_TO_USD;
            }
            break;
    }


    return null;
}

console.log(con(1000, 'usd', 'rub'))