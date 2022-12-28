import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import statusService from './statusService';

const initialState = {
  dead: {},
  alive: {},
  unknownStatus: {},
};

export const getAlive = createAsyncThunk(
  'rickAndMorty/status/alive',
  async () => {
    try {
      return await statusService.getAlive();
    } catch (error) {
      console.log(error);
    }
  }
);
export const getDead = createAsyncThunk(
  'rickAndMorty/status/dead',
  async () => {
    try {
      return await statusService.getDead();
    } catch (error) {
      console.log(error);
    }
  }
);

export const getUnknownStatus = createAsyncThunk(
  'rickAndMorty/status/unknown',
  async () => {
    try {
      return await statusService.getUnknownStatus();
    } catch (error) {
      console.log(error);
    }
  }
);
const statusSlice = createSlice({
  name: 'status',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAlive.fulfilled, (state, action) => {
        state.alive = action.payload;
      })
      .addCase(getDead.fulfilled, (state, action) => {
        state.dead = action.payload;
      })
      .addCase(getUnknownStatus.fulfilled, (state, action) => {
        state.unknownStatus = action.payload;
      });
  },
});

export default statusSlice.reducer;
