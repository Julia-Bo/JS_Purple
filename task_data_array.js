/* Дан массив строк [`10-02-2022`, `тест`, `11/12/2023`, `00/13/2022`, `41/12/2023`]
Необходимо написать функцию, которая бы удаляла бы из массива все строки,
которые нельзя перевести в дату (можно:10-02-2022 11/12/2023)
и возвращала бы новый массив вида:
- [`10-02-2022`, `12-11-2023`] */

const arr = [`10-02-2022`, `тест`, `11/12/2023`, `02/28/2023`, `02/29/2023`, `00/13/2022`, `41/12/2023`];
const calendar = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


function data(arr) {
    const newArr = arr
        .map(el => {
            if (el.includes('/')) {
                const newEl = el.split('/');
                const timeVar = newEl[0];
                newEl[0] = newEl[1];
                newEl[1] = timeVar;
                return newEl;
            }
            if (el.includes('-')) {
                return el.split('-');
            }
        })
        .filter(newEl => {
            if (newEl === undefined) {
                return false;
            }

            const month = Number(newEl[1]);

            if (month <= 0 || month > 12) {
                return false;
            }

            const day = Number(newEl[0]);
            const counDayInMonth = calendar[month - 1]

            if (day <= 0 || day > counDayInMonth) {
                return false;
            }
            if (day > counDayInMonth) {
                return false;
            }
            return true;
        })
        .flatMap(newEl => newEl.join('-'));

    return newArr;
}

console.log(data(arr));

