import { configureStore } from '@reduxjs/toolkit';
import characterReducer from '../features/characters/characterSlice';
import genderReducer from '../features/gender/genderSlice';
import speciesReducer from '../features/species/speciesSlice';

export const store = configureStore({
  reducer: {
    characters: characterReducer,
    gender: genderReducer,
    species: speciesReducer,
  },
});
