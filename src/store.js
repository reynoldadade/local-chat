import { configureStore } from "@reduxjs/toolkit";
import chatRoomReducer from "./store/chatroom";

const store = configureStore({
  reducer: {
    chatRoom: chatRoomReducer,
  },
});

export default store;
