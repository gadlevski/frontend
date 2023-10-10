import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { User } from '@/entities/User';
import { userActions } from '@/entities/User/model/slice/userSlice';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';

interface LoginByUserNameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUserNameProps, ThunkConfig<string>>(
  'login/loginByUsername',
  async (authdata, thunkApi) => {
    const { extra, dispatch, rejectWithValue } = thunkApi;
    try {
      const response = await extra.api.post<User>('/login', authdata);
      if (!response.data) {
        throw new Error();
      }
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      dispatch(userActions.setAuthData(response.data));
      return response.data;
    } catch (error) {
      console.log('error', error);
      return rejectWithValue('error');
    }
  },
);