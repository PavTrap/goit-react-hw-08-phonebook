// // import { configureStore } from "@reduxjs/toolkit";
// // import { sliceContacts } from './sliceContacts';
// // import { sliceFilter } from './sliceFilter';

// // export const store = configureStore({
// // 	reducer: {
// // 		contacts: sliceContacts.reducer,
// // 		filter: sliceFilter.reducer,
// // 	}
// // });


// import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import storage from 'redux-persist/lib/storage';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import { sliceContacts } from './sliceContacts';
// import { sliceFilter } from './sliceFilter';

// // Конфигурация для сохранения состояния в localStorage с использованием redux-persist
// const persistConfig = {
//   key: 'contacts', // Ключ, по которому состояние будет сохраняться
//   storage, // Хранилище, в данном случае, localStorage
//   whiteList: ['contacts'], // Список ключей состояния, которые нужно сохранить
// };

// // Комбинирование reducer'ов с использованием combineReducers из Redux Toolkit
// const rootReducer = combineReducers({
//   contacts: sliceContacts.reducer,
//   filter: sliceFilter.reducer,
// });

// // Создание персистентного reducer'а с использованием persistReducer из redux-persist
// const persistReducerContacts = persistReducer(persistConfig, rootReducer);

// // Создание и экспорт Redux store с использованием configureStore из Redux Toolkit
// export const store = configureStore({
//   reducer: persistReducerContacts, // Передача персистентного reducer'а в store
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], // Игнорирование определенных actions для сериализации
//       },
//     }),
// });

// // Создание и экспорт персистора для Redux store
// export const persistR = persistStore(store);


// Этот код создает Redux store с использованием Redux Toolkit и настраивает сохранение состояния с помощью redux-persist. 
// Весь стейт разделен на два редьюсера - sliceContact.reducer и sliceFilter.reducer, которые объединяются в rootReducer с помощью combineReducers.
// Затем rootReducer передается в persistReducer вместе с конфигурацией persistConfig, чтобы создать персистентный редьюсер persistReducerContacts.
// Функция configureStore используется для создания Redux store с переданным persistReducerContacts в качестве редьюсера. Здесь также настраивается 
// middleware для проверки сериализуемости действий, и некоторые действия (FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER) игнорируются при сериализации.
// Наконец, persistStore используется для создания и экспорта персистора, который используется для сохранения состояния Redux store в localStorage.
// Комментарии помогают понять каждую часть кода и объясняют, что делает каждый шаг в конфигурации Redux store с использованием Redux Toolkit и redux-persist.










import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import authReducer from './auth/authSlice';
import contactsReducer from './contacts/contactsSlice';
import filterReducer from './contacts/filterSlice';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedReducer,
    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);