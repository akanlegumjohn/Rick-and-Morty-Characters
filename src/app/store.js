import { configureStore } from '@reduxjs/toolkit';
import characterReducer from '../features/characters/characterSlice';
import genderReducer from '../features/gender/genderSlice';

export const store = configureStore({
  reducer: {
    characters: characterReducer,
    gender: genderReducer,
  },
});
