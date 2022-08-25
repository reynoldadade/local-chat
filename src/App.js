import { useSelector } from "react-redux";
import "./App.css";

import ChatRoom from "./components/ChatRoom";
import Overlay from "./components/Overlay";
import { getOverlayState } from "./store/chatroom";

function App() {
  const overlay = useSelector(getOverlayState);
  return (
    <div>
      {overlay ? <Overlay /> : ""}

      <ChatRoom />
    </div>
  );
}

export default App;
