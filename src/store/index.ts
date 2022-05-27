import { createSlice, configureStore } from '@reduxjs/toolkit'
import {clockSlice} from './reducers';

const store = configureStore({
  reducer: clockSlice.reducer
})

export default store;
