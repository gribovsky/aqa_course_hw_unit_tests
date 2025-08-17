/*
  Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число) 
  и возвращает пропущенное число. Массив не отсортирован и НЕ может содержать дубликаты. 
  Решите эту задачу, используя эффективные методы массива.

  Пример: const arr = [5,2,7,3,8,1,6] //4
*/

function findMissingNumber(numbers) {
  // Ваш код
  return [...numbers]
    .sort((a, b) => a - b)
    .reduce((res, el, ind, arr) => {
      if (arr[ind - 1] !== el - 1) res = el - 1;
      return res !== 0 ? res : arr[arr.length - 1] + 1;
    }, 0);
}

export { findMissingNumber };
