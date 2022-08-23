import { createSlice, configureStore } from "@reduxjs/toolkit";

const chatRoomSlice = createSlice({
  name: "Chatroom",
  initialState: {
    // chat messages
    messages: [],
    // name of user entering the chat
    username: "",
  },
  reducers: {
    sendMessage: (state, payload) => {
      state.messages = [
        ...state.messages,
        { message: payload, username: state.username },
      ];
    },
  },
});
