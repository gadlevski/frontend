import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from '../../types/article';

/*
<
  1 Тип возвращаемого значения асинхронной функции (или action.payload, когда он выполняется успешно)
  2 Тип передаваемого аргумента в асинхронную функцию
  3 Тип конфига для thunk
>
*/

export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig<string>>(
  'articleDetails/fetchArticleById',
  async (articleId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;
    try {
      // Тип ожидаемого ответа
      // Принимает как аргумент запрашиваемый URL
      const response = await extra.api.get<Article>(`/articles/${articleId}`);
      if (!response.data) {
        throw new Error();
      }
      return response.data;
    } catch (error) {
      console.log('error', error);
      return rejectWithValue('error');
    }
  },
);