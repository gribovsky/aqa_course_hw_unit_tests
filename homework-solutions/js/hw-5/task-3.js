/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';

let vowelsAndConsonantsResult = '';
const vowels = 'аеёиоуыэюяaeiou';
const consonants = 'bcdfghjklmnpqrstvwxyzбвгджзйклмнпрстфхцчшщ';

let vowelsCounter = 0;
let consonantsCounteer = 0;

for (const i of word.toLowerCase()) {
  vowelsCounter += vowels.includes(i) ? 1 : 0;
  consonantsCounteer += consonants.includes(i) ? 1 : 0;
}
vowelsAndConsonantsResult += `${word} contains ${vowelsCounter} vowels and ${consonantsCounteer} consonants`;
console.log(vowelsAndConsonantsResult);
export { vowelsAndConsonantsResult };
