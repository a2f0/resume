import * as Constants from '../constants';
import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import Color from 'color';
import {RootState} from './store';

export interface ResumeConfigState {
  foregroundColor: string;
  backgroundColor: string;
  scale: number;
}

const initialState: ResumeConfigState = {
  foregroundColor: Constants.DARK_THEME_FOREGROUND,
  backgroundColor: Constants.DARK_THEME_BACKGROUND,
  scale: 1.3,
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
    setScale: (state, action: PayloadAction<number>) => {
      state.scale = action.payload;
    },
  },
});

export const {setForegroundColor, setBackgroundColor, setScale} =
  resumeConfigSlice.actions;

export const selectForegroundColor = (state: RootState) => {
  return state.resume.foregroundColor;
};

export const selectBackgroundColor = (state: RootState) => {
  return state.resume.backgroundColor;
};

export const selectScale = (state: RootState) => {
  return state.resume.scale;
};

export default resumeConfigSlice.reducer;
