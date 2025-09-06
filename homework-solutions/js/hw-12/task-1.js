// 1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds

function HelloWorld() {
  console.log('Hello world');
}

function delayTwoSeconds(callbackFunction) {
  setTimeout(() => {
    callbackFunction();
  }, 2000);
}
delayTwoSeconds(HelloWorld);

/**2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. Обработайте промис методом .then и выведите результат
  его резолва в консоль */

const promise = new Promise((resolve, reject) => {
  resolve('1');
});
promise.then((result) => {
  console.log(result);
});

/**3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed". 
  Обработайте промис методом .catch и выведите результат его резолва в консоль */
const promise2 = new Promise((resolve, reject) => {
  reject('Promise failed');
});
promise2.catch((result) => {
  console.log(result);
});

/**
4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.
5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
  в консоль результаты работы каждого промиса через .then
6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
  в консоль статус и результат каждого промиса через .then 
7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch */

function promiseNumber(number) {
  if (number <= 0) return Promise.reject('Not a positive number');
  return Promise.resolve(number);
}

Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then((result) => {
  for (const i of result) console.log(i);
});

Promise.allSettled([promiseNumber(-1), promiseNumber(2), promiseNumber(3)]).then((results) => {
  results.forEach((result) => {
    if (result.status === 'fulfilled') {
      console.log(result.status, result.value);
    } else console.log(result.status, result.reason);
  });
});

async function asyncFunction() {
  try {
    const results = await Promise.allSettled([promiseNumber(-1), promiseNumber(2), promiseNumber(3)]); //без await ловим ошибку
    results.forEach((result) => {
      if (result.status === 'fulfilled') {
        console.log(result.status, result.value);
      } else console.log(result.status, result.reason);
    });
  } catch (error) {
    console.error('something goes wrong', error.message);
  }
}

asyncFunction();
