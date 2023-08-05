import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from 'entities/User';
import { userActions } from 'entities/User/model/slice/userSlice';
import { USER_LOCALESTORAGE_KEY } from 'shared/const/localestorage';

interface LoginByUserNameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUserNameProps, { rejectValue: string; }>(
  'login/loginByUsername',
  async (authdata, thunkAPI) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', authdata);
      if (!response.data) {
        throw new Error();
      }
      localStorage.setItem(USER_LOCALESTORAGE_KEY, JSON.stringify(response.data));
      thunkAPI.dispatch(userActions.setAuthdata(response.data));
      return response.data;
    } catch (error) {
      console.log('error', error);
      return thunkAPI.rejectWithValue('error');
    }
  },
);