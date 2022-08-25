import { configureStore } from "@reduxjs/toolkit";
import chatRoomReducer from "./store/chatroom";

// persisted state loaded if it exists

const store = configureStore({
  reducer: {
    chatRoom: chatRoomReducer,
  },
});

export default store;
