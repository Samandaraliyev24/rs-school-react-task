/* eslint-disable @typescript-eslint/ban-ts-comment */
import { combineReducers } from '@reduxjs/toolkit';
import { IRootState } from './types';
import searchSliceReducer from './slices/search/reducer';

const rootReducer = combineReducers<IRootState>({
  search: searchSliceReducer,
});

export default rootReducer;
