import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/test/avatar.png';
import { ProfileSchema, ValidateProfileError } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

describe('profileSlice', () => {

  const data = {
    avatar: avatar,
    first: 'Andrei',
    lastname: 'Gadlevski',
    age: 33,
    city: 'Kazan',
    username: 'admin',
    country: Country.Russia,
    currency: Currency.RUB,
  };

  test('Проверка readonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };
    expect(profileReducer(
      (state as ProfileSchema),
      profileActions.setReadonly(true),
    )).toEqual({ readonly: true });
  });

  test('Проверка cancelEdit', () => {
    const state: DeepPartial<ProfileSchema> = {
      data,
      form: {
        username: '',
      },
    };

    expect(profileReducer(
      (state as ProfileSchema),
      profileActions.cancelEdit(),
    )).toEqual({
      readonly: true,
      validateErrors: undefined,
      data,
      form: data,
    });
  });

  test('Проверка updateProfile', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: {
        username: 'admin1',
      },
    };

    expect(profileReducer(
      (state as ProfileSchema),
      profileActions.updateProfile({ username: 'admin2' }),
    )).toEqual({
      form: {
        username: 'admin2',
      },
    });
  });

  test('test update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };

    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.pending,
    )).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });

  test('Проверка updateProfile fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };

    expect(profileReducer(
      (state as ProfileSchema),
      updateProfileData.fulfilled(data, ''),
    )).toEqual({
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
      readonly: true,
      form: data,
      data,
    });
  });

});