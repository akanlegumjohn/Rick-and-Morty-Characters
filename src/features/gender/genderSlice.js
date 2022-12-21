import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import genderService from './genderService';

const initialState = {
  females: {},
  males: {},
  unknown: {},
  genderLess: {},
};

export const getAllMales = createAsyncThunk(
  'rickAndMorty/getAllMales',
  async () => {
    try {
      return await genderService.getAllMales();
    } catch (error) {
      console.log(error);
    }
  }
);
export const getAllGenderless = createAsyncThunk(
  'rickAndMorty/getAllGenderLess',
  async () => {
    try {
      return await genderService.getAllGenderless();
    } catch (error) {
      console.log(error);
    }
  }
);
export const getAllFemales = createAsyncThunk(
  'rickAndMorty/getAllFemales',
  async () => {
    try {
      return await genderService.getAllFemales();
    } catch (error) {
      console.log(error);
    }
  }
);
export const getAllUnknown = createAsyncThunk(
  'rickAndMorty/getAllUknown',
  async () => {
    try {
      return await genderService.getAllUnknown();
    } catch (error) {
      console.log(error);
    }
  }
);
const genderSlice = createSlice({
  name: 'gender',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllMales.fulfilled, (state, action) => {
        state.males = action.payload;
      })
      .addCase(getAllFemales.fulfilled, (state, action) => {
        state.females = action.payload;
      })
      .addCase(getAllUnknown.fulfilled, (state, action) => {
        state.unknown = action.payload;
      })
      .addCase(getAllGenderless.fulfilled, (state, action) => {
        state.genderLess = action.payload;
      });
  },
});

export default genderSlice.reducer;
