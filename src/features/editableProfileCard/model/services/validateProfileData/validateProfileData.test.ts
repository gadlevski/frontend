import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/test/avatar.png';
import { ValidateProfileError } from '../../consts/consts';
import { validateProfileData } from './validateProfileData';


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


describe('validateProfileData', () => {

  test('Успешное выполнение', async () => {
    const result = validateProfileData(data);
    expect(result).toEqual([]);
  });

  test('Не указан first и lastname', async () => {
    const result = validateProfileData({ ...data, first: '', lastname: '' });
    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
    ]);
  });

  test('Некорректно введен age', async () => {
    const result = validateProfileData({ ...data, age: undefined });
    expect(result).toEqual([
      ValidateProfileError.INCORRECT_AGE,
    ]);
  });

  test('Не указана country', async () => {
    const result = validateProfileData({ ...data, country: undefined });
    expect(result).toEqual([
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });

  test('Несколько ошибок', async () => {
    const result = validateProfileData({});
    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });
});