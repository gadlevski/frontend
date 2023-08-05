import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/user';
import { USER_LOCALESTORAGE_KEY } from 'shared/const/localestorage';

const initialState: UserSchema = {
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthdata: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    initAuthdata: (state, action: PayloadAction<User>) => {
      const user = localStorage.getItem(USER_LOCALESTORAGE_KEY);
      if (user) {
        state.authData = JSON.parse(user);
      }
      state.authData = action.payload;
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCALESTORAGE_KEY);
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;