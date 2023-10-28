// const word = 'password';
const word = 'contract';
// const word = 'feedback';
// const word = 'producer';


function crypto(word) {
    const code = word.split('');
    if (code.length < 8) {
        return console.log('the password must have more than 8 symbol');
    }

    switch (true) {
        case code.includes('a'):
            const a = code.indexOf('a');
            code[a] = '1';
        case code.includes('b'):
            const b = code.indexOf('b');
            code[b] = '2';
        case code.includes('c'):
            const c = code.indexOf('c');
            code[c] = '3';
    }


    code.unshift(code[2], code[3]);
    code.push(code[6]);
    code.splice(4, 3);
    code.reverse();
    const newCode = code.join('');
    console.log(newCode);
    return newCode;
}


function check(code, word) {
    const decode = code.split('');
    const wordArr = word.split('');
    if (decode.length !== wordArr.length){
        return console.log (false);
    }

    decode.reverse();
    decode.unshift(decode[2], decode[3]);
    decode.splice(4, 2);
    decode.push(decode[4], decode[5], decode[6]); 
    decode.splice(4, 3);

    switch (true) {
        case decode.includes('1'):
            const a = decode.indexOf('1');
            decode[a] = 'a';
        case decode.includes('2'):
            const b = decode.indexOf('2');
            decode[b] = 'b';
        case decode.includes('3'):
            const c = decode.indexOf('3');
            decode[c] = 'c';
        }
    
    console.log(decode);

            return console.log((decode.join('')) === word ? true : false);
    }

crypto(word);
check(crypto(word),word);
