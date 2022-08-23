import { configureStore } from "@reduxjs/toolkit";
import chatRoomReducer from "./store/chatroom";

export default configureStore({
  reducer: {
    chatRoom: chatRoomReducer,
  },
});
