import { createReduxStore, AppDispatch } from './config/store';
import { StoreProvider } from './ui/StoreProvider';
import type { ReduxStoreWithManager, StateSchema, ThunkConfig } from './config/StateSchema';

export {
    StoreProvider,
    createReduxStore,
};

export type {
    StateSchema,
    ReduxStoreWithManager,
    AppDispatch,
    ThunkConfig,
};
