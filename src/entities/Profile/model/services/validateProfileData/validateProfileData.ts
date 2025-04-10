import { Profile } from 'entities/Profile';
import { ValidateProfileError } from '../../types/profile';

export const validateProfileData = (profile?: Profile) => {
    if (!profile) {
        return [ValidateProfileError.NO_DATA];
    }
    const { first, lastname, age } = profile;
    const errors: ValidateProfileError[] = [];

    if (!first || !lastname) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA);
    }

    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileError.INCORRECT_AGE);
    }

    if (age! < 0 || age! > 150) {
        errors.push(ValidateProfileError.INCORRECT_AGE);
    }

    return errors;
};
