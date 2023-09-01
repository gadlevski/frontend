import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice', () => {
  test('Проверка username', () => {
    const state: DeepPartial<LoginSchema> = { username: 'admin' };
    expect(loginReducer(
      (state as LoginSchema),
      loginActions.setUsername('1234'),
    )).toEqual({ username: '1234' });
  });

  test('Проверка password', () => {
    const state: DeepPartial<LoginSchema> = { password: '123' };
    expect(loginReducer(
      (state as LoginSchema),
      loginActions.setPassword('1234'),
    )).toEqual({ password: '1234' });
  });
});