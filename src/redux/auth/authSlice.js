import { createSlice } from '@reduxjs/toolkit';
import { signUp, logIn, logOut, current } from './authThunk';

// Определяется начальное состояние для среза состояния authSlice. Это объект, содержащий поля user 
// (пользователь), isLogin (флаг авторизации), token (токен), loading (флаг загрузки) и error (ошибка).
const initialState = {
  user: {},
  isLogin: false,
  token: '',
  loading: false,
  error: null,
};

// Создается срез состояния authSlice с помощью функции createSlice. Определяются экстра-редюсеры, 
// которые реагируют на различные действия (pending, fulfilled, rejected) функций signUp, logIn, logOut, current. 
// Каждый экстра-редюсер изменяет состояние store в соответствии с результатом выполнения соответствующей 
// асинхронной операции. Например, signUp.pending устанавливает флаг loading в true и 
// сбрасывает error. signUp.fulfilled сбрасывает loading в false и обновляет user, token и isLogin на основе 
// полученных данных. signUp.rejected сбрасывает loading в false и сохраняет ошибку в error.
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signUp.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [signUp.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.user = payload.user;
      store.token = payload.token;
      store.isLogin = true;
    },
    [signUp.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    [logIn.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [logIn.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.user = payload.user;
      store.token = payload.token;
      store.isLogin = true;
    },
    [logIn.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    [logOut.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [logOut.fulfilled]: store => {
      store.loading = false;
      store.user = {};
      store.token = '';
      store.isLogin = false;
    },
    [logOut.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },

    [current.pending]: store => {
      store.loading = true;
      store.error = null;
    },
    [current.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.user = payload;
      store.isLogin = true;
    },
    [current.rejected]: (store, { payload }) => {
      store.loading = false;
      store.token = '';
      store.error = payload;
    },
  },
});

export default authSlice.reducer;
// Экспортируется редюсер authSlice.reducer, который будет использоваться в корневом редюсере 
// для обработки действий, связанных с аутентификацией и авторизацией