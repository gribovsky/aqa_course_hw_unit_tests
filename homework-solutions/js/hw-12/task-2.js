/**Напишите асинхронную функцию createTodo, принимающая на вход тело создаваемой тудушки.
   Внутри функции шлите пост запрос на "https://jsonplaceholder.typicode.com/todos" используя fetch.
   После получения респонса проверьте что статус === 201. Если статус не 201 - пробросить ошибку
   Преобразуйте респонс из JSON в объект
   Проверьте, что айди в респонсе === 201
   Функция должна возвращать полученный объект из респонса
   Обрабатывайте ошибки с помощью try/cath, в конце выведите в консоль текст, что работа функции завершена
   */

const toDushka = {
  userId: 1,
  title: 'dum spiro spero',
  completed: true,
};

async function createTodo(toDushka) {
  try {
    const postResponce = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(toDushka),
    });

    if (postResponce.status !== 201) {
      throw new Error('Incorrect status');
    }

    const responseData = await postResponce.json();
    if (responseData.id !== 201) {
      throw new Error('Incorrect id');
    }
    console.log(responseData);
  } catch (error) {
    console.error('Creation failed', error.message);
  } finally {
    console.log('Работа функции завершена');
  }
}
createTodo();
