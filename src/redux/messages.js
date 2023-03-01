import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getMessages = createAsyncThunk(
  'messageSlice/getMessages', async () => {
    const response = await fetch('http://127.0.0.1:4000/messages')
      .then((messages) => messages.json());
    return response;
  },
);

const messageSlice = createSlice({
  name: 'message',
  initialState: {
    messages: [],
    loading: true,
    status: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMessages.fulfilled, (state, action) => {
      const newState = state;
      newState.messages.push(action.payload);
      return newState;
    });
  },
});

export default messageSlice;