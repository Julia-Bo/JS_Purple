/*
Делаем функцию, которая возвращает новый массив. 
Эта функция принимает массив чисел и вторую функцию. 
Если элемент массива при передачи во вторую функцию 
возвращает true, то значит в новом массиве элемент удаляем, 
если false, оставляем.
*/

const arr = [2, 8, 9, 16, 2, 4, 34, 17, 3, 101, 50];

function clean (arr, fn) {
    const newArr = [];

    for (let val of arr){
        if (!fn(val)) {
            newArr.push(val);
        }
    }
    return newArr;
}

function check (val) {
    return val > 5;
}

function check1 (val) {
    return val % 2 === 0;
}

console.log(clean(arr, check));
console.log(clean(arr, check1));
