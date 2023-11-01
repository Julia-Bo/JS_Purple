/* 
Дан массив чисел 
const arr = [1, 40, -5, 10, 0];
Написать функцию, которая сортирует данный массив при помощи циклов.

подсказка:
- нужно использовать 2 цикла, вложенных друг в друга,
- нужно сравнивать и менять элементы
*/

const arr = [1, 40, -5, 10, 0];

function sortLoops (arr){
    for (i = 0; i <= arr.length; i++) {
        for (j = 0; j <= arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let timeVar = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = timeVar;
            }
        }
    }
    console.log(arr)
}

sortLoops(arr);