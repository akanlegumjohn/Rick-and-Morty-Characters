import { configureStore } from '@reduxjs/toolkit';

import statusReducer from '../features/status/statusSlice';
import genderReducer from '../features/gender/genderSlice';
import speciesReducer from '../features/species/speciesSlice';
import episodeReducer from '../features/episode/episodeSlice';
import locationReducer from '../features/Location/locationSlice';
import characterReducer from '../features/characters/characterSlice';

export const store = configureStore({
  reducer: {
    characters: characterReducer,
    gender: genderReducer,
    species: speciesReducer,
    status: statusReducer,
    locations: locationReducer,
    episodes: episodeReducer,
  },
});
