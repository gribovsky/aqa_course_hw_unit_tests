/**Создайте функцию validatePassword, которая принимает строку (пароль) и возвращает true, 
если пароль соответствует следующим правилам:
  - Пароль должен содержать хотя бы одну заглавную букву.
  - Пароль должен содержать хотя бы одну букву в нижнем регистре.
  - Пароль должен содержать хотя бы одну цифру.
  - Пароль должен быть не менее 8 символов.
  - Пароль не должен состоять из одних пробелов
Функция должна возвращать false, если хотя бы одно из условий не выполнено.
 */

function validatePassword(password: string): boolean {
  if (password.length < 8) return false;

  if (password.trim().length === 0) return false;

  const includeUpperCase = /[A-Z]/.test(password);

  const includeLowerCase = /[a-z]/.test(password);

  const includeDigit = /\d/.test(password);

  return includeUpperCase && includeLowerCase && includeDigit;
}
console.log(validatePassword('fcz'));
console.log(validatePassword('      '));
console.log(validatePassword('!Vassssssssya'));
console.log(validatePassword('F        '));
console.log(validatePassword('!Vassssssssya1'));
console.log(validatePassword('F        a1'));
