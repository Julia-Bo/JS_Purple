const word = "it's my live, it's now or never";

function crypto(word) {
    let wordArr = word.split('');
    const halfPart = wordArr.length / 2;

    const firstPart = wordArr.slice(0, halfPart);
    let secondPart = wordArr.splice(halfPart, wordArr.length);

    firstPart.reverse();
    firstPart.unshift(firstPart[firstPart.length - 1]);
    firstPart.pop();
    secondPart.reverse();
    const[one, ...other] = secondPart;
    secondPart = [...other, ...one];
    const [two, ...another] = secondPart;
    secondPart = [...another, ...two];

    wordArr = [...secondPart,...firstPart].join('');

    return wordArr;
}


function check (code, word) {
    let codeArr = code.split('');
    const halfPart = Math.ceil(codeArr.length / 2);
    
    const firstPart = codeArr.slice(0, halfPart);
    const secondPart = codeArr.slice(halfPart, codeArr.length);

    
    firstPart.unshift(firstPart[firstPart.length - 1]);
    firstPart.pop();
    firstPart.unshift(firstPart[firstPart.length - 1]);
    firstPart.pop();
    firstPart.reverse();
    secondPart.push(secondPart[0]);
    secondPart.shift();
    secondPart.reverse();
   
    codeArr = [...secondPart, ...firstPart].join('');

    return codeArr === word ? true : false;
}


console.log(crypto(word));
console.log(check (crypto(word), word));