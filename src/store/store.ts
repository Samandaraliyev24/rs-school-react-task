import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import rootReducer from './rootReducer';

function MyStore() {
  const store = configureStore({
    reducer: rootReducer,
  });
  return store;
}

const store = MyStore();
export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useReduxDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useReduxSelector: TypedUseSelectorHook<IRootState> = useSelector;
export { store };
