/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
function mergeArrays(...arrays) {
  let result = [];
  for (const i of arrays) {
    result.push(...i);
  }
  return result;
}
/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
function devideBy(sentence) {
  const sentenceArray = sentence.split(' ');
  const sentenceArrayNoSpaces = [];
  for (const i of sentenceArray) {
    if (i !== '') {
      sentenceArrayNoSpaces.push(i);
    }
  }
  for (let i = 0; i < sentenceArrayNoSpaces.length; i++) {
    if (i === 0) {
      sentenceArrayNoSpaces[i] = sentenceArrayNoSpaces[i].toLowerCase();
    } else
      sentenceArrayNoSpaces[i] =
        sentenceArrayNoSpaces[i][0].toUpperCase() + sentenceArrayNoSpaces[i].slice(1).toLowerCase();
  }
  return sentenceArrayNoSpaces.join('_');
}
/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */
function fibonacci(n) {
  const fb = [0, 1];
  for (let i = 2; i <= n; i++) {
    fb[i] = fb[i - 2] + fb[i - 1];
  }
  return fb[n];
}

export { mergeArrays, fibonacci, devideBy };
