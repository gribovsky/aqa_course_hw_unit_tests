/**1. Объявите переменные для каждого из следующих типов данных с явным указанием типа после символв "двоеточие":
    - Число: переменная num1, значение 42.
    - Строка: переменная str, значение "Hello, TypeScript!".
    - Булево: переменная isComplete, значение true.
    - Массив чисел: переменная numbers, значения [1, 2, 3, 4, 5].
    - Массив строк: переменная cities, значения ["Minsk", "Warsaw", "London"].
    - Объект: переменная person, объект с полями name: "Alice", age: 30, city: "Minsk". */

let num1: number = 42;
let str: string = 'Hello, TypeScript!';
let isComplete: boolean = true;
const numbers: number[] = [1, 2, 3, 4, 5];
const cities: Array<string> = ['Minsk', 'Warsaw', 'London'];
const person: { [key: string]: string | number } = { name: 'Alice', age: 30, city: 'Minsk' };

/**2. Создайте псевдонимы типов:
    - Тип User, который содержит поля name (строка), age (число), и опциональное поле email (строка).
    - Тип Grade, который может принимать одно из значений: 'junior' | 'middle' | 'senior'. */

type User = {
  name: string;
  age: number;
  email?: string;
};
type Grade = 'middle' | 'senior' | 'junior';

/**3. Создайте интерфейс для объекта Car, который должен содержать поля:
    - brand (строка),
    - model (строка),
    - опциональное поле year (число). */

interface Car {
  brand: string;
  model: string;
  year?: number;
}

/**4. Создайте интерфейсы для:
    - Интерфейса Address с полями street (строка), city (строка), и zipCode (число).
    - Интерфейса FullAddress, который наследует интерфейс Address и добавляет поле country (строка). */
interface Address {
  street: string;
  city: string;
  zipCode: number;
}
interface FullAddress extends Address {
  country: string;
}

/**5. Создайте объединение типов:
    - Тип Product с полями id (число), name (строка), и price (число).
    - Тип DiscountedProduct, который объединяет Product и добавляет поле discount (число). */
type Product = {
  id: number;
  name: string;
  price: number;
};

type DiscountedProduct = {
  discount: number;
} & Product;

/**6. Создайте функцию calculateDiscount, которая принимает объект типа DiscountedProduct и возвращает итоговую цену с учетом скидки. 
   Затипизировать явно и входные и выходные данные. Используйте следующие данные:
console.log(calculateDiscount(product)); // Ожидается: 900 */
const product: DiscountedProduct = {
  id: 1,
  name: 'Laptop',
  price: 1000,
  discount: 10,
};

function calculateDiscount(product: DiscountedProduct): number {
  let finalPrice = product.price * (1 - product.discount / 100);
  return finalPrice;
}
console.log(calculateDiscount(product));
