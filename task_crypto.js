const word = 'blackberry';

function crypto(word) {
    let wordArr = word.split('');
    const halfPart = wordArr.length / 2;

    const firstPart = wordArr.slice(0, halfPart);
    let secondPart = wordArr.splice(halfPart, wordArr.length);

    switch (true) {
        case firstPart.includes ('a'):
            const a = firstPart.indexOf('a');
            firstPart[a] = '1';
        case firstPart.includes ('b'):
            const b = firstPart.indexOf('b');
            firstPart[b] = '2';
        case firstPart.includes('c'):
            const c = firstPart.indexOf('c');
            firstPart[c] = '3';
    }

    firstPart.unshift(firstPart[firstPart.length - 1]);
    firstPart.pop();
    secondPart.reverse();
    const[one, ...other] = secondPart;
    secondPart = [...other, ...one];
    
    wordArr = ([...secondPart,...firstPart]).join('')

    return wordArr
}


function check (code, word) {
    let codeArr = code.split('');
    const halfPart = Math.ceil(codeArr.length / 2);
    
    const firstPart = codeArr.slice(0, halfPart);
    const secondPart = codeArr.slice(halfPart, codeArr.length);
    
    firstPart.unshift(firstPart[firstPart.length - 1]);
    firstPart.pop();
    firstPart.reverse();
    secondPart.push(secondPart[0]);
    secondPart.shift();

    switch (true) {
        case secondPart.includes('1'):
            const a = secondPart.indexOf('1');
            secondPart[a] = 'a';
        case secondPart.includes('2'):
            const b = secondPart.indexOf('2');
            secondPart[b] = 'b';
        case secondPart.includes('3'):
            const c = secondPart.indexOf('3');
            secondPart[c] = 'c';
    }
   
    codeArr = ([...secondPart, ...firstPart]).join('');

    return codeArr === word ? true : false;
}


console.log(crypto(word));
console.log(check (crypto(word), word));