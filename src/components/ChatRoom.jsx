import { useState } from "react";
import { getUsername } from "../store/chatroom";
import ChatBubble from "../components/ChatBubble";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useSelector } from "react-redux";

const ChatRoom = () => {
  // const chats = useSelector((state) => selectLastMessages(state, 1));
  const [chats, setChats] = useLocalStorage("messages", []);
  const username = useSelector(getUsername);
  // create message variable
  const [message, setMessage] = useState("");
  // handle when send message button is clicked
  const sendMessageHandler = () => {
    // dispatch(sendMessage(message));
    setChats([...chats, { message, username, time: Date.now() }]);
    // when message is sent clear message
    setMessage("");
  };
  //handle when input is used
  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="w-full p-2 shadow-lg bg-purple-400 text-white">
        Chatroom
      </div>
      <div
        id="message-view"
        className="flex flex-col justify-between flex-grow"
      >
        <div className="overflow-y-scroll flex-grow h-72">
          {chats.map((chat, index) => (
            <ChatBubble chat={chat} key={index} />
          ))}
        </div>

        <div id="inputs" className="flex p-1">
          <textarea
            type="text"
            name="message"
            className="border rounded-lg flex-grow"
            value={message}
            onChange={handleChange}
          />
          <button
            onClick={sendMessageHandler}
            className="bg-blue-500 text-white rounded-lg py-1 px-4 flex items-center"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
