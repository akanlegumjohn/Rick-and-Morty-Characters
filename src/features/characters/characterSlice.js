import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import characterService from './characterService';

const initialState = {
  pageNumber: 1,
  searchedName: ''.toLowerCase(),
  filterdata: { status: '', gender: '', species: '' },
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
    const { pageNumber, searchedName, filterdata } = data;

    const { species, gender, status } = filterdata;
    try {
      return await characterService.getCharacters(
        pageNumber,
        searchedName,
        species,
        gender,
        status
      );
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
    resetFilters: (state) => {
      state.filterdata = {
        status: '',
        gender: '',
        species: '',
      };
      //Refresh the page in order to unchecked any radio button checked
      window.location.reload(false);
    },
    nextPage: (state) => {
      state.pageNumber += 1;
    },
    prevPage: (state) => {
      if (state.pageNumber > 1) {
        state.pageNumber -= 1;
      }
    },
    setPageNumber: (state, action) => {
      state.pageNumber = action.payload;
    },
    setSearchedName: (state, action) => {
      state.searchedName = action.payload;
    },
    handleFilter: (state, action) => {
      state.filterdata = action.payload;
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
        state.isSuccess = false;
        state.message = action.payload;
      });
  },
});

export default characterSlice.reducer;
export const {
  reset,
  prevPage,
  nextPage,
  setSearchedName,
  setPageNumber,
  handleFilter,
  resetFilters,
} = characterSlice.actions;
