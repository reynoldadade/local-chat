import { createSlice, configureStore } from "@reduxjs/toolkit";

export const chatRoomSlice = createSlice({
  name: "Chatroom",
  initialState: {
    // chat messages
    messages: [],
    // name of user entering the chat
    username: "",
  },
  reducers: {
    sendMessage: (state, action) => {
      state.messages = [
        ...state.messages,
        { message: action.payload, username: state.username },
      ];
    },
  },
});

// action creators need to be generated for each reducer created
export const { sendMessage } = chatRoomSlice.actions;

// export your reducer
export default chatRoomSlice.reducer;
