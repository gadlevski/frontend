import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError', () => {
  test('Должен вернуть error', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: 'error',
      },
    };
    expect(getLoginError(state as StateSchema)).toEqual('error');
  });
  test('Пустой state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginError(state as StateSchema)).toEqual(undefined);
  });
});