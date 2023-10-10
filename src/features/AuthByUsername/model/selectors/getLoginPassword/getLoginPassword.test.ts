import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword', () => {
  test('Должен вернуть true', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: '123',
      },
    };
    expect(getLoginPassword(state as StateSchema)).toEqual('123');
  });
  test('Пустой state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginPassword(state as StateSchema)).toEqual('');
  });
});