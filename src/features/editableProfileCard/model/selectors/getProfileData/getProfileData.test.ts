import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileData } from './getProfileData';
import avatar from '@/shared/assets/test/avatar.png';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

describe('getProfileData', () => {
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
        data,
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });
  test('Должен вернуть undefined', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});