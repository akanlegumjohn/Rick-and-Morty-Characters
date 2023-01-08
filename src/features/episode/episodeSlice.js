import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import episodeService from './episodeService';

const initialState = {
  pageNumber: 1,
  episodeDetails: {},
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: '',
};
//Get rick and morty location, 20 per page
export const getEpisodes = createAsyncThunk(
  'rickAndMorty/get/episodes',
  async (data, thunkAPI) => {
    const { pageNumber } = data;

    try {
      return await episodeService.getEpisodes(pageNumber);
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

const episodeSlice = createSlice({
  name: 'episodes',
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
      .addCase(getEpisodes.pending, (state) => {
        state.isLoading = true;
      })
      //Runs when the data fetching is successfull
      .addCase(getEpisodes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.episodeDetails = action.payload;
      })
      //Runs when the data fetching is rejected
      .addCase(getEpisodes.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      });
  },
});

export default episodeSlice.reducer;
export const { reset, prevPage, nextPage, setSearchedName, setPageNumber } =
  episodeSlice.actions;
