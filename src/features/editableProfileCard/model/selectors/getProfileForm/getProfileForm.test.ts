import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileForm } from './getProfileForm';
import avatar from 'shared/assets/test/avatar.png';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

describe('getProfileForm', () => {
  test('Должен вернуть data', () => {
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

    const state: DeepPartial<StateSchema> = {
      profile: {
        form: data,
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(data);
  });
  test('Должен вернуть undefined', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});