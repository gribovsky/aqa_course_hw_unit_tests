/*
  У вас есть массив названий пицц вашего конкурента.
  Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и набор названий пицц конкурента (массив), пицц которых нет у конкурента присвойте в переменную "resultUnique" (массив).
  Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull".

  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Воспользуйтесь наборами пицц, что приведены ниже.

  Пиццы:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
  const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
*/

let resultUnique;
let resultNull;
const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];

resultUnique = [];
const competitorPizzasArray = [...competitorPizzas];

for (let i = 0; i < competitorPizzasArray.length; i++) {
  competitorPizzasArray[i] = competitorPizzasArray[i].toLowerCase();
}
// первый массив наших пицц
for (let i = 0; i < myPizzasT1.length; i++) {
  if (!competitorPizzasArray.includes(myPizzasT1[i].toLowerCase())) {
    resultUnique.push(myPizzasT1[i]);
  }
  if (!resultUnique.length) {
    resultNull = null;
  }
}
// второй массив наших пицц
for (let i = 0; i < competitorPizzasArray.length; i++) {
  competitorPizzasArray[i] = competitorPizzasArray[i].toLowerCase();
}
for (let i = 0; i < myPizzasT2.length; i++) {
  if (!competitorPizzasArray.includes(myPizzasT2[i].toLowerCase())) {
    resultUnique.push(myPizzasT2[i]);
  }
  if (!resultUnique.length) {
    resultNull = null;
  }
}
// вариант через функцию не проходит юнит тест, но это для себя проба
// function getUniquePizza(myPizzasArray, competitorPizzas) {
//   let resultUnique = [];
//   const competitorPizzasArray = [...competitorPizzas];

//   for (let i = 0; i < competitorPizzasArray.length; i++) {
//     competitorPizzasArray[i] = competitorPizzasArray[i].toLowerCase();
//   }

//   for (let i = 0; i < myPizzasArray.length; i++) {
//     if (!competitorPizzasArray.includes(myPizzasArray[i].toLowerCase())) {
//       resultUnique.push(myPizzasArray[i]);
//     }
//   }

//   return resultUnique.length ? resultUnique : (resultNull = null);
// }
// console.log(getUniquePizza(myPizzasT1, competitorPizzas));
// console.log(getUniquePizza(myPizzasT2, competitorPizzas));
export { resultNull, resultUnique };
