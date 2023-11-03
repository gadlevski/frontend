import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getArticleDetailsData } from '@/entities/Article';
import { Comment } from '@/entities/Comment';
import { getUserAuthData } from '@/entities/User';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

/*
<
  1 Тип возвращаемого значения асинхронной функции (или action.payload, когда он выполняется успешно)
  2 Тип передаваемого аргумента в асинхронную функцию (в данном случае это текст комментария)
  3 Тип конфига для thunk
>
*/

export const addCommentForArticle = createAsyncThunk<
  Comment,
  string,
  ThunkConfig<string>
>('articleDetails/addCommentForArticle', async (text, thunkApi) => {
  const { extra, rejectWithValue, dispatch, getState } = thunkApi;
  try {
    // text - содержимое инпута
    // информация о пользователе, который оставляет комментарий
    const userData = getUserAuthData(getState());
    // Статья, к которой добавляется комментарий (Id статьи будет записан при загрузке статьи через useParams)
    const article = getArticleDetailsData(getState());

    if (!userData || !text || !article) {
      return rejectWithValue('no data');
    }

    // Тип ожидаемого ответа
    // Принимает как аргумент запрашиваемый URL
    const response = await extra.api.post<Comment>('/comments', {
      articleId: article.id,
      userId: userData.id,
      text,
    });

    if (!response.data) {
      throw new Error();
    }

    // запрос всех комментариев по id статьи, чтобы отрендерить комментарии на странице статьи
    dispatch(fetchCommentsByArticleId(article.id));

    return response.data;
  } catch (error) {
    return rejectWithValue('error');
  }
});
