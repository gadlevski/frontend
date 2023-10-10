import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError', () => {
  test('Должен вернуть error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: 'ошибка',
      },
    };
    expect(getProfileError(state as StateSchema)).toEqual('ошибка');
  });
  test('Должен вернуть undefined', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileError(state as StateSchema)).toEqual(undefined);
  });
});