/** 1. Создайте дженерик функцию wrapInArray, которая принимает значение любого типа и возвращает его в виде массива этого типа.
    function wrapInArray<T> {
      // ваш код здесь
    }

    const numberArray = wrapInArray(5); // [5]
    const stringArray = wrapInArray('Hello'); // ['Hello'] */

function wrapInArray<T>(arg: T): T[] {
  return [arg];
}

/**2. Создайте дженерик функцию getLastElement, которая принимает массив элементов типа T, и возвращает последний элемент (типа T).

    function getLastItem<T> {
      // ваш код здесь
    }

    console.log(getLastItem([1, 2, 3, 4])); // 4
    console.log(getLastItem(['a', 'b', 'c'])); // 'c' */

function getLastItem<T>(arg: T[]): T {
  return arg[arg.length - 1];
}

/**3. Создайте дженерик интерфейс IPair, который принимает два типа T и U и содержит поля first: T и second: U. 
   Реализуйте функцию, принимающую IPair и возвращающую строку, описывающую пару.

    interface IPair<T, U> {
      // ваш код здесь
    }

    function describePair<T, U> {
      // ваш код здесь
    }

    console.log(describePair({ first: 'Alice', second: 30 })); // "Alice and 30" */

interface IPair<T, U> {
  first: T;
  second: U;
}

function describePair<T, U>(arg: IPair<T, U>): string {
  return `${arg.first} and ${arg.second}`;
}

