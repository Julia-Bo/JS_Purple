let language = prompt('Set a language', 'srp');

switch (language) {
    case 'ru':
        console.log('Привет, родной!');
        break;
    case 'en':
        console.log("G'day, mate!");
        break;
    case 'de':
        console.log('Moin, heimisch!');
        break;
    case 'fr':
        console.log('Bonjour, chéri!');
        break;
    case 'srp':
        console.log('Здраво драга!');
        break;
    default:
        console.log('Set a different language');
}