import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../services/authApi';

// Определяется асинхронное действие signUp с помощью функции createAsyncThunk. 
// Это действие отправляет запрос на регистрацию пользователя с переданными данными data. 
// Внутри обработчика запроса выполняется вызов функции api.getSignUp(data), которая возвращает результат запроса. 
// Если запрос выполнился успешно, возвращается полученный результат. В случае ошибки, в блоке catch извлекаются
//  данные из объекта response (статус и текст ошибки), создается объект error, который содержит статус и 
//  текст ошибки. Затем с помощью функции rejectWithValue возвращается объект error.
export const signUp = createAsyncThunk(
  'auth/signUp',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.getSignUp(data);
      return result;
    } catch ({ response }) {
      const { status, statusText } = response;
      const error = { status, statusText };      
      return rejectWithValue(error);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/logIn',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.getLogIn(data);
      return result;
    } catch ({ response }) {
      const { status, statusText } = response;
      const error = { status, statusText };
      // console.log(error)
      return rejectWithValue(error);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logOut',
  async (_, { rejectWithValue }) => {
    try {
      const result = await api.getLogOut();
      return result;
    } catch ({ response }) {
      const { status, statusText } = response;
      const error = { status, statusText };
      // console.log(error)
      return rejectWithValue(error);
    }
  }
);

export const current = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const result = await api.getCurrent(auth.token);
      return result;
    } catch ({ response }) {
      const { status, statusText } = response;
      const error = { status, statusText };
      return rejectWithValue(error);
    }
  }
);

// Аналогичным образом определены действия logIn, logOut и current. Каждое действие отправляет соответствующий 
// запрос с помощью функций из файла authApi и обрабатывает успешный результат или ошибку при помощи блоков try и 
// catch. Для обработки ошибок используется функция rejectWithValue, которая возвращает объект ошибки.

// Здесь функция logOut представляет асинхронное действие для выхода пользователя из системы. Она не принимает 
// никаких данных (_), и при успешном выполнении запроса возвращается полученный результат. В случае ошибки, 
// обрабатывается объект response и создается объект error