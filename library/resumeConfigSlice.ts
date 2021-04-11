import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from './store';
import Color from 'color';

export interface CounterState {
  foregroundColor: string;
  backgroundColor: string;
}

const initialState: CounterState = {
  foregroundColor: '#FFF',
  backgroundColor: '#000',
};

export const resumeConfigSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    setForegroundColor: (state, action: PayloadAction<string>) => {
      state.foregroundColor = Color(action.payload).hex();
    },
    setBackgroundColor: (state, action: PayloadAction<string>) => {
      state.backgroundColor = Color(action.payload).hex();
    },
  },
});

export const {
  setForegroundColor,
  setBackgroundColor,
} = resumeConfigSlice.actions;

export const selectForegroundColor = (state: RootState) => {
  return state.resume.foregroundColor;
};

export const selectBackgroundColor = (state: RootState) => {
  return state.resume.backgroundColor;
};

export default resumeConfigSlice.reducer;