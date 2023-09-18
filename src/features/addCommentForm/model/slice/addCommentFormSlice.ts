import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { addCommentFormSchema } from '../types/addCommentForm';

const initialState: addCommentFormSchema = {
  // isLoading: false,
  text: '',
  error: undefined,
  // data: undefined,
};

export const addCommentFormSlice = createSlice({
  name: 'addCommentForm',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchData.pending, (state) => {
  //       state.error = undefined;
  //       state.isLoading = true;
  //     })
  //     .addCase(fetchData.fulfilled, (state, action: PayloadAction<>) => {
  //       state.isLoading = false;
  //       state.data = action.payload;
  //       state.form = action.payload;
  //     })
  //     .addCase(fetchData.rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.error = action.payload;
  //     });
  // },
});

export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;