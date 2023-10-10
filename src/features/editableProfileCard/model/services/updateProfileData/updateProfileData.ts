import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Profile } from '@/entities/Profile';
import { ValidateProfileError } from '../../consts/consts';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { validateProfileData } from '../validateProfileData/validateProfileData';

/*
<
  1 Тип возвращаемого значения асинхронной функции (или action.payload, когда он выполняется успешно)
  2 Тип передаваемого аргумента в асинхронную функцию
  3 Тип конфига для thunk
>
*/

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
  'profile/updateProfileData',
  async (_, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;
    const formData = getProfileForm(getState());
    const errors = validateProfileData(formData);

    if (errors.length) {
      return rejectWithValue(errors);
    }

    // formData?.id - id профиля
    try {
      const response = await extra.api.put<Profile>(`/profile/${formData?.id}`, formData);

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      console.log('error', error);
      return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
    }
  },
);