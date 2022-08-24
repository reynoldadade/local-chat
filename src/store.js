import { configureStore } from "@reduxjs/toolkit";
import {
  createStateSyncMiddleware,
  initMessageListener,
} from "redux-state-sync";
import chatRoomReducer from "./store/chatroom";

const config = {};
const middlewares = [createStateSyncMiddleware(config)];

const store = configureStore({
  reducer: {
    chatRoom: chatRoomReducer,
  },
  middleware: middlewares,
});
initMessageListener(store);

export default store;
