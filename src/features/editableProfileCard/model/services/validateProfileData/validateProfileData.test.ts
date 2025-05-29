import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { validateProfileData } from './validateProfileData';
import { ValidateProfileError } from '../../consts/userConsts';

const data = {
    first: 'Andrew',
    lastname: 'Johns',
    age: 22,
    currency: Currency.EUR,
    country: Country.France,
    city: 'Paris',
    username: 'admin',
};

describe('validateProfileData.test', () => {
    test('success', async () => {
        const result = validateProfileData(data);
        expect(result).toEqual([]);
    });

    test('without first and last name', async () => {
        const result = validateProfileData({ ...data, first: '', lastname: '' });
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });

    test('incorrect age', async () => {
        const result = validateProfileData({ ...data, age: undefined });
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_AGE,
        ]);
    });

    test('incorrect all', async () => {
        const result = validateProfileData({});
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
        ]);
    });
});
