import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import 'isomorphic-fetch';

export const rtkApi = createApi({
  // Указываем путь к редьюсеру в Redux Store
  reducerPath: 'api',

  // Указываем базовый запрос
  baseQuery: fetchBaseQuery({
    // Базовый URL для всех запросов
    baseUrl: __API__,

    // Функция для подготовки заголовков перед отправкой запроса
    prepareHeaders: (headers) => {
      // Получаем токен из LocalStorage
      const token = localStorage.getItem(USER_LOCALSTORAGE_KEY) || '';

      // Если токен существует, добавляем его в заголовки
      if (token) {
        headers.set('Authorization', token);
      }

      // Возвращаем подготовленные заголовки
      return headers;
    },
  }),

  // Здесь будут указаны конечные точки (endpoints) API
  endpoints: () => ({}),
});
