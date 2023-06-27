import { instance } from './authApi';

// Определяется асинхронная функция getContacts, которая выполняет GET-запрос к /contacts с использованием 
// instance. Полученные данные из ответа сохраняются в деструктурированном объекте { data }, 
// и возвращается значение data
export const getContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

// Определяется асинхронная функция addContact, которая выполняет POST-запрос к /contacts с переданными 
// параметрами options. Полученные данные из ответа сохраняются в деструктурированном объекте { data }, 
// и возвращается значение data
export const addContact = async options => {
  const { data } = await instance.post('/contacts', options);
  return data;
};

// Определяется асинхронная функция removeContact, которая выполняет DELETE-запрос по указанному пути 
// /contacts/${id} с переданным идентификатором id. Полученные данные из ответа сохраняются в деструктурированном 
// объекте { data }, и возвращается значение data.
export const removeContact = async id => {
  const { data } = await instance.delete(`/contacts/${id}`);
  return data;
};

// Общий смысл этого кода заключается в экспорте функций для выполнения операций связанных с 
// контактами (получение, добавление и удаление) с использованием предварительно сконфигурированного 
// HTTP-клиента (instance), который обеспечивает аутентификацию и авторизацию.