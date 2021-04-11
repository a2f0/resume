import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import resumeReducer from './resumeForegroundColorSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    resume: resumeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
