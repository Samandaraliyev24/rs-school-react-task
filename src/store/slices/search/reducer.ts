/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit';

interface SearchState {
  query: string;
  results: any[];
  submissions: any[];
}

const initialState: SearchState = {
  query: '',
  results: [],
  submissions: [],
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload.query;
    },
    setResults: (state, action) => {
      state.results = action.payload.results;
    },
    setSubmissions: (state, action) => {
      state.submissions = [...state.submissions, action.payload.submission];
    },
  },
});

export const { setQuery, setResults, setSubmissions } = searchSlice.actions;

export default searchSlice.reducer;
