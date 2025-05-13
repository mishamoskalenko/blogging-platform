import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema, ValidateProfileError } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';

const data = {
    first: 'Andrew',
    lastname: 'Johns',
    age: 22,
    currency: Currency.EUR,
    country: Country.France,
    city: 'Paris',
    username: 'admin',
};

describe('profileSlice.test', () => {
    test('test set readonly', async () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
        };
        expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toEqual({ readonly: true });
    });

    test('test cancel edit', async () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
            form: { username: '' },
            data,
        };
        expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
            readonly: true, validateErrors: undefined, data, form: data,
        });
    });

    test('test update profile', async () => {
        const state: DeepPartial<ProfileSchema> = {
            form: { username: 'Andrew' },
        };
        expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({ username: 'Daniel' }))).toEqual({ form: { username: 'Daniel' } });
    });

    test('test update profile service pending', async () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };
        expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({ isLoading: true, validateErrors: undefined });
    });

    test('test update profile service fulfilled', async () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
            validateErrors: undefined,
        };
        expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, ''))).toEqual({
            isLoading: false, validateErrors: undefined, readonly: true, validateError: undefined, form: data, data,
        });
    });
});
