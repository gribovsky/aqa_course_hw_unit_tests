/*
 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
     Объект должен иметь поля name (string) и age (number)
 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)
 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)
 */

const characters = [
  { name: 'Barney', age: 35 },
  { name: 'Fred', age: 40 },
  { name: 'Jack', age: 49 },
];

function addCharacter(character) {
  // Ваш код
  if (typeof character !== 'object' || typeof character.name !== 'string' || typeof character.age !== 'number') {
    throw new Error('Некорректный ввод: Объект должен иметь поля name (string) и age (number)');
  }
  return characters.push(character);
}

function getCharacter(name) {
  for (const obj of characters) {
    if (obj.name === name) {
      return obj;
    }
  }
  // вариант через reduce (но церез цикл как-то проще)
  // return characters.reduce((result, obj) => {
  //     if (obj.name === name) {
  //       result = obj;
  //     } return result
  //   }, undefined);
}

function getCharactersByAge(minAge) {
  // Ваш код
  if (typeof minAge !== 'number') {
    throw new Error('Некорректный ввод');
  }
  return characters.reduce((result, obj) => {
    if (obj.age >= minAge) {
      result.push(obj);
    }
    return result;
  }, []);
}

function updateCharacter(name, newCharacter) {
  // Ваш код
  const oldCharacter = getCharacter(name);
  if (!oldCharacter) {
    throw new Error(`Character ${name} isn't found`);
  }
  oldCharacter.name = newCharacter.name;
  oldCharacter.age = newCharacter.age;
  return characters;
}

function removeCharacter(name) {
  // Ваш код
  const ind = characters.findIndex((obj) => obj.name === name);
  if (ind === -1) {
    throw new Error('Character is not found');
  } else return characters.splice(ind, 1);
}

export { characters, addCharacter, updateCharacter, getCharacter, getCharactersByAge, removeCharacter };
