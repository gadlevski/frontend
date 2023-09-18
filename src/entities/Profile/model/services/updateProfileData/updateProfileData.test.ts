import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/test/avatar.png';
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { updateProfileData } from './updateProfileData';
import { ValidateProfileError } from '../../types/profile';

const data = {
  id: '1',
  avatar: avatar,
  first: 'Andrei',
  lastname: 'Gadlevski',
  age: 33,
  city: 'Kazan',
  username: 'admin',
  country: Country.Russia,
  currency: Currency.RUB,
};


describe('updateProfileData', () => {

  test('Успешное выполнение', async () => {

    const thunk = new TestAsyncThunk(
      updateProfileData,
      {
        profile: {
          form: data,
        },
      });

    thunk.api.put.mockReturnValue(Promise.resolve({ data: data }));
    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('C ошибкой', async () => {

    const thunk = new TestAsyncThunk(
      updateProfileData,
      {
        profile: {
          form: data,
        },
      });

    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([
      ValidateProfileError.SERVER_ERROR,
    ]);
  });

  test('Ошибка при валидации', async () => {

    const thunk = new TestAsyncThunk(
      updateProfileData,
      {
        profile: {
          form: { ...data, lastname: '' },
        },
      });

    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
    ]);
  });
});