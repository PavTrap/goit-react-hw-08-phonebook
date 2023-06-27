import axios from 'axios';

// Создается экземпляр axios с предварительно установленными настройками, включая базовый URL
//  Этот экземпляр будет использоваться для выполнения всех запросов.
export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

// Определяется функция setToken, которая устанавливает заголовок authorization в HTTP-запросах с помощью токена. 
// Если передан токен, он добавляется в заголовок с префиксом 'Bearer', иначе заголовок устанавливается пустым.
const setToken = token => {
  if (token) {
    return (instance.defaults.headers.common.authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.common.authorization = '';
};

// Определяется асинхронная функция getSignUp, которая выполняет POST-запрос к /users/signup с переданными 
// данными пользователя. Полученные данные из ответа сохраняются в переменную result, а затем вызывается 
// функция setToken с токеном из result для установки заголовка authorization. Возвращается значение result
export const getSignUp = async data => {
  const { data: result } = await instance.post('/users/signup', data);
  setToken(result.token);
  return result;
};

// Определяется асинхронная функция getLogIn, которая выполняет POST-запрос к /users/login с переданными 
// данными пользователя. Полученные данные из ответа сохраняются в переменную result, а затем вызывается 
// функция setToken с токеном из result для установки заголовка authorization. Возвращается значение result.
export const getLogIn = async data => {
  const { data: result } = await instance.post('/users/login', data);
  setToken(result.token);
  return result;
};

// Определяется асинхронная функция getLogOut, которая выполняет POST-запрос к /users/logout. 
// Полученные данные из ответа сохраняются в переменную data, а затем вызывается функция setToken 
// без аргументов для удаления заголовка authorization. Возвращается значение data
export const getLogOut = async () => {
  const { data } = await instance.post('/users/logout');
  setToken();
  return data;
};

// Определяется асинхронная функция getCurrent, которая получает текущего пользователя. 
// Сначала вызывается функция setToken с переданным токеном для установки заголовка authorization. 
// Затем выполняется GET-запрос к /users/current, и полученные данные сохраняются в переменную data. 
// Если происходит ошибка, функция setToken вызывается без аргументов для удаления заголовка authorization, 
// а затем ошибка перебрасывается для обработки во внешнем коде.
export const getCurrent = async token => {
  try {
    setToken(token);
    const { data } = await instance.get('/users/current');
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

// Общий смысл этого кода заключается в экспорте функций для выполнения операций аутентификации 
// и авторизации на сервере, используя предварительно сконфигурированный HTTP-клиент (instance) с 
// базовым URL и установкой заголовка authorization с токеном при необходимости.