import { useState } from "react";
import { useDispatch } from "react-redux";
import { sendMessage } from "../store/chatroom";

const ChatRoom = () => {
  // create dispatch instance
  const dispatch = useDispatch();
  // create message variable
  const [message, setMessage] = useState("");
  // handle when send message button is clicked
  const sendMessageHandler = () => {
    console.log(message);
  };
  //handle when input is used
  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="w-screen h-screen">
      <div className="w-full p-2 shadow-lg bg-purple-400 text-white flex flex-col justify-between">
        Chatroom
      </div>
      <div id="message-view" className="flex-grow"></div>
      <div id="inputs" className="flex">
        <textarea
          type="text"
          name="message"
          className="border rounded-lg flex-grow"
          value={message}
          onChange={handleChange}
        />
        <button onClick={sendMessageHandler}>Send</button>
      </div>
    </div>
  );
};

export default ChatRoom;
