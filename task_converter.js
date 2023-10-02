/*
написать функцию которая получает на взод строку с:
- суммой стредвств - 1000;
- валютой - руб;
- целевой валютой - $;
Возвращает число с новой заданной валютой, 
если конвертация поддерживается, или null если не поддерживается.
Ставки конвертации хранятся внутри функции  

*/

function con(sum, originalCurrency, targetСurrency) {
    (originalCurrency === 'rub' && targetСurrency === 'usd') ? 
        res = sum / 97.41 : 
    (originalCurrency === 'usd' && targetСurrency === 'rub') ?
        res = sum * 97.41 :
    (originalCurrency === 'rub' && targetСurrency === 'eur') ?
        res = sum / 103.16 :
    (originalCurrency === 'eur' && targetСurrency === 'rub') ?  
        res = sum * 103.16  :
    (originalCurrency === 'usd' && targetСurrency === 'eur') ?
        res = sum / 1.05 :
    (originalCurrency === 'eur' && targetСurrency === 'usd') ?
        res = sum * 1.05 :
        res = null;
    return res;
}

console.log(con(1000, 'eur', 'usd'))