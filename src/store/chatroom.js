import { createSelector, createSlice } from "@reduxjs/toolkit";

export const chatRoomSlice = createSlice({
  name: "Chatroom",
  initialState: {
    // chat messages
    messages: [],
    // name of user entering the chat
    username: "",
    // used to toggle overlay on and off
    overlay: true,
  },
  reducers: {
    sendMessage: (state, action) => {
      // when a message is sent an object with {username: '', message: '', time: ''} will be created to push to the chat array
      state.messages = [
        ...state.messages,
        { message: action.payload, username: state.username, time: Date.now() },
      ];
    },
    saveName: (state, action) => {
      // save username
      state.username = action.payload;
    },
    showOverlay: (state, action) => {
      // turn overlay on or off
      state.overlay = action.payload;
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
// get the overlay state
export const getOverlayState = (state) => state.chatRoom.overlay;
//get username
export const getUsername = (state) => state.chatRoom.username;

// action creators need to be generated for each reducer created
export const { sendMessage, saveName, showOverlay } = chatRoomSlice.actions;

// export your reducer
export default chatRoomSlice.reducer;
