import { AddCommentFormSchema } from 'features/addCommentForm';
import { addCommentFormActions, addCommentFormReducer } from './addCommentFormSlice';

describe('addCommentFormSlice.test', () => {
    test('test set text', async () => {
        const state: DeepPartial<AddCommentFormSchema> = {
            text: '',
        };
        expect(addCommentFormReducer(state as AddCommentFormSchema, addCommentFormActions.setText('hi!'))).toEqual({ text: 'hi!' });
    });
});
