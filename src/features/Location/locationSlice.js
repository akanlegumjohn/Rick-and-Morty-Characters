import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import locationService from './locationService';

const initialState = {
  pageNumber: 1,
  locationDetails: {},
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: '',
};
//Get rick and morty location, 20 per page
export const getLocations = createAsyncThunk(
  'rickAndMorty/get/locations',
  async (data, thunkAPI) => {
    const { pageNumber } = data;

    try {
      return await locationService.getLocations(pageNumber);
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

const locationSlice = createSlice({
  name: 'locations',
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
    setPageNumber: (state, action) => {
      state.pageNumber = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      //Runs whenever the data fetching is in the pending state
      .addCase(getLocations.pending, (state) => {
        state.isLoading = true;
      })
      //Runs when the data fetching is successfull
      .addCase(getLocations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.locationDetails = action.payload;
      })
      //Runs when the data fetching is rejected
      .addCase(getLocations.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      });
  },
});

export default locationSlice.reducer;
export const { reset, prevPage, nextPage, setSearchedName, setPageNumber } =
  locationSlice.actions;
