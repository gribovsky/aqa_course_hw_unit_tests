/*
Удалить дубликаты
  - Создайте массив из чисел [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9];
  - Напишите скрипт, который убирает из массива дубликаты
  - При удалении дубликата, длина массива должна уменьшаться

  Присвойте результат в переменную "unique"
*/
let unique;
const arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9];
// unique = [];
// for (const i of arr6) {
//   if (!unique.includes(i)) {
//     unique.push(i);
//   }
// }

// этот проходит тест
for (let i = 0; i < arr6.length; i++) {
  for (let j = i + 1; j < arr6.length; j++) {
    if (arr6[i] === arr6[j]) {
      arr6.splice(j, 1);
      j--;
    }
  }
}
unique = arr6;

//этот не проходит тест, но отрабатывает верно
// for (let i = 0; i < arr6.length; i++) {
//   if (arr6.slice(i + 1).includes(arr6[i])) {
//     arr6.splice(i, 1);
//     i--;
//   }
// }
// unique = arr6;
export { unique };
