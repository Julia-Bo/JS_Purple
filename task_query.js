/*
написать функцию, которая принимает объект query параметры
и возвращает строку для вставки

// search=Вася&take=10
*/

function string (query) {
    const stingQuery = Object.keys(query)
    .map(key => `${key}=${query[key]}`)
    .join('&');

    return stingQuery;
};

const query = {
    search: 'Вася',
    take: 10,
};

console.log(string(query));
