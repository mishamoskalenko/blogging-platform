import { StateSchema } from '@/app/providers/StoreProvider';
import { getAddCommentFormText, getAddCommentFormError } from './addCommentFormSelectors';

describe('addCommentFormSelectors.test.test', () => {
    test('should return text', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                text: 'hi',
            },
        };
        expect(getAddCommentFormText(state as StateSchema)).toEqual('hi');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getAddCommentFormText(state as StateSchema)).toEqual('');
    });

    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                error: 'error',
            },
        };
        expect(getAddCommentFormError(state as StateSchema)).toEqual('error');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getAddCommentFormError(state as StateSchema)).toEqual(undefined);
    });
});
