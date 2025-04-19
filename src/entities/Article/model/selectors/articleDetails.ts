import { StateSchema } from 'app/providers/StoreProvider';

export const getAricleDetailsData = (state: StateSchema) => state.articleDetails?.data;
export const getAricleDetailsIsLoading = (state: StateSchema) => state.articleDetails?.isLoading || false;
export const getAricleDetailsError = (state: StateSchema) => state.articleDetails?.error;
