import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import characterService from './characterService';

const initialState = {
  pageNumber: 1,
  searchedName: ''.toLowerCase(),
  charactersDetails: {},
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: '',
};
//Get rick and morty characters, 20 per page
export const getCharacters = createAsyncThunk(
  'rickAndMorty/getCharacters',
  async (data, thunkAPI) => {
    const { pageNumber, searchedName } = data;
    try {
      return await characterService.getCharacters(pageNumber, searchedName);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const characterSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    reset: () => {
      initialState;
    },
    nextPage: (state) => {
      state.pageNumber += 1;
    },
    prevPage: (state) => {
      if (state.pageNumber > 1) {
        state.pageNumber -= 1;
      }
    },
    setSearchedName: (state, action) => {
      state.searchedName = action.payload;
      console.log('action payload:', action.payload);
      console.log('state:', state.searchedName);
    },
  },
  extraReducers: (builder) => {
    builder
      //Runs whenever the data fetching is in the pending state
      .addCase(getCharacters.pending, (state) => {
        state.isLoading = true;
      })
      //Runs when the data fetching is successfull
      .addCase(getCharacters.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.charactersDetails = action.payload;
      })
      //Runs when the data fetching is rejected
      .addCase(getCharacters.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default characterSlice.reducer;
export const { reset, prevPage, nextPage, setSearchedName } =
  characterSlice.actions;
