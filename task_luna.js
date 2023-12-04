const card = '4561-2612-1234-5462';
const card1 = '4  5  6  1     2  6  1  2'
const card2 = '4  5  6  1     2  6  1  2     1  2  3  7'
const card3 = '5062 8212 3456 7892'
const card4 = '5 0 6 2 8 2 1 7 3 4 5 6 7 8 9 2'
const card5 = '5580-4733720247 33'
const card6 = '12-3456-1239'




function checkCard(card) {
    let cardClean = card
        .replaceAll('-', '')
        .replaceAll(' ', '');
    let sum = 0
    for (let i = 0; i < cardClean.length; i++) {
        let numberCard = Number(cardClean[i]);
        if (i % 2 === 0) {
            numberCard *= 2;
            if (numberCard > 9) {
                numberCard -= 9;
            }
        }

        sum += numberCard;

    }

    return sum % 10 === 0;
}

console.log(checkCard(card));
console.log(checkCard(card1));
console.log(checkCard(card2));
console.log(checkCard(card3));
console.log(checkCard(card4));
console.log(checkCard(card5));
console.log(checkCard(card6));