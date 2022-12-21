import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import speciesService from './speciesService';

const initialState = {
  human: {},
  alien: {},
  humanoid: {},
  animal: {},
  robot: {},
  disease: {},
  mytholog: {},
  poopybutthole: {},
  unknownSpecie: {},
  cronenberg: {},
};

export const getHuman = createAsyncThunk(
  'rickAndMorty/species/human',
  async () => {
    try {
      return await speciesService.getHuman();
    } catch (error) {
      console.log(error);
    }
  }
);

export const getAlien = createAsyncThunk(
  'rickAndMorty/species/alien',
  async () => {
    try {
      return await speciesService.getAlien();
    } catch (error) {
      console.log(error);
    }
  }
);

export const getHumanoid = createAsyncThunk(
  'rickAndMorty/species/humanoid',
  async () => {
    try {
      return await speciesService.getHumanoid();
    } catch (error) {
      console.log(error);
    }
  }
);

export const getAnimal = createAsyncThunk(
  'rickAndMorty/species/animal',
  async () => {
    try {
      return await speciesService.getAnimal();
    } catch (error) {
      console.log(error);
    }
  }
);

export const getRobot = createAsyncThunk(
  'rickAndMorty/species/robot',
  async () => {
    try {
      return await speciesService.getRobot();
    } catch (error) {
      console.log(error);
    }
  }
);

export const getCronenberg = createAsyncThunk(
  'rickAndMorty/species/cronenberg',
  async () => {
    try {
      return await speciesService.getCronenberg();
    } catch (error) {
      console.log(error);
    }
  }
);

export const getMytholog = createAsyncThunk(
  'rickAndMorty/species/mytholog',
  async () => {
    try {
      return await speciesService.getMytholog();
    } catch (error) {
      console.log(error);
    }
  }
);

export const getDisease = createAsyncThunk(
  'rickAndMorty/species/disease',
  async () => {
    try {
      return await speciesService.getDisease();
    } catch (error) {
      console.log(error);
    }
  }
);
export const getPoopybutthole = createAsyncThunk(
  'rickAndMorty/species/poopybutthole',
  async () => {
    try {
      return await speciesService.getPoopybutthole();
    } catch (error) {
      console.log(error);
    }
  }
);

export const getUnknown = createAsyncThunk(
  'rickAndMorty/species/unknown',
  async () => {
    try {
      return await speciesService.getUnknown();
    } catch (error) {
      console.log(error);
    }
  }
);
const speciesSlice = createSlice({
  name: 'species',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getHuman.fulfilled, (state, action) => {
        state.human = action.payload;
      })
      .addCase(getHumanoid.fulfilled, (state, action) => {
        state.humanoid = action.payload;
      })
      .addCase(getAlien.fulfilled, (state, action) => {
        state.alien = action.payload;
      })
      .addCase(getAnimal.fulfilled, (state, action) => {
        state.animal = action.payload;
      })
      .addCase(getCronenberg.fulfilled, (state, action) => {
        state.cronenberg = action.payload;
      })
      .addCase(getMytholog.fulfilled, (state, action) => {
        state.mytholog = action.payload;
      })
      .addCase(getPoopybutthole.fulfilled, (state, action) => {
        state.poopybutthole = action.payload;
      })
      .addCase(getDisease.fulfilled, (state, action) => {
        state.disease = action.payload;
      })
      .addCase(getRobot.fulfilled, (state, action) => {
        state.robot = action.payload;
      })
      .addCase(getUnknown.fulfilled, (state, action) => {
        state.unknownSpecie = action.payload;
      });
  },
});

export default speciesSlice.reducer;
