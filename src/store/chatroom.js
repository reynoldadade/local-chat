import { createSelector, createSlice } from "@reduxjs/toolkit";

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
      // when a message is sent an object with {username: '', message: '', time: ''} will be created to push to the chat array
      state.messages = [
        ...state.messages,
        { message: action.payload, username: state.username, time: Date.now() },
      ];
    },
  },
});

// selectors
export const selectMessages = (state) => state.chatRoom.messages;
export const selectLastMessages = createSelector(
  // accept a parameter of page number
  [selectMessages, (state, pageNumber) => pageNumber],
  // and when page number is passed use it to get last items in the array
  (messages, pageNumber = 1) => messages.slice(-25 * pageNumber)
);

// action creators need to be generated for each reducer created
export const { sendMessage } = chatRoomSlice.actions;

// export your reducer
export default chatRoomSlice.reducer;
