import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginByUsername.test', () => {
    test('test set username', async () => {
        const state: DeepPartial<LoginSchema> = {
            username: 'admin',
        };
        expect(loginReducer(state as LoginSchema, loginActions.setUsername('admin'))).toEqual({ username: 'admin' });
    });

    test('test set password', async () => {
        const state: DeepPartial<LoginSchema> = {
            password: '123',
        };
        expect(loginReducer(state as LoginSchema, loginActions.setPassword('123'))).toEqual({ password: '123' });
    });
});
