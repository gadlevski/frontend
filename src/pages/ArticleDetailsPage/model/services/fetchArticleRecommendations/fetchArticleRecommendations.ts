import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article } from '@/entities/Article';

/*
<
  1 Тип возвращаемого значения асинхронной функции (или action.payload, когда он выполняется успешно)
  2 Тип передаваемого аргумента в асинхронную функцию
  3 Тип конфига для thunk
>
*/

export const fetchArticleRecommendations = createAsyncThunk<
  Article[],
  void,
  ThunkConfig<string>
>('articleDetailsPage/fetchArticleRecommendations', async (_, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  try {
    const response = await extra.api.get<Article[]>('/articles', {
      params: {
        _limit: 4,
      },
    });

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    return rejectWithValue('error');
  }
});
