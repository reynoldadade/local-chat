import { useMemo, useState } from "react";
import { getUsername } from "../store/chatroom";
import ChatBubble from "../components/ChatBubble";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useSelector } from "react-redux";

const ChatRoom = () => {
  const [chats, setChats] = useLocalStorage("messages", []);
  const username = useSelector(getUsername);

  //pageNumbers
  const [page, setPage] = useState("1");
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

  const handleScroll = (e) => {
    if (e.target.scrollTop === 0) {
      console.log(true);
      // if the totalPages is greater than current page we can increase pages number
      if (totalPages > setPage) {
        return setPage(page + 1);
      }
      // else return the maximum page number
      return setPage(totalPages);
    }
  };

  // filter first 25
  const paginate = (page = 1, chats = []) => {
    return chats.slice(-25 * page);
  };

  const calcPages = (chats = []) => {
    const length = chats.length;
    if (length <= 25) return 1;
    return Math.ceil(chats.length / 25);
  };
  //memoize these expensive calculations
  // get current chats to display on screen
  const currentChats = useMemo(() => paginate(page, chats), [page, chats]);
  // get total number of pages possible if there are only 25 items per page
  const totalPages = useMemo(() => calcPages(chats), [chats]);

  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="w-full p-2 shadow-lg bg-purple-400 text-white">
        Chatroom
      </div>
      <div
        id="message-view"
        className="flex flex-col justify-between flex-grow"
      >
        <div
          className="overflow-y-scroll flex-grow h-72"
          onScroll={handleScroll}
        >
          {currentChats.map((chat, index) => (
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
            className="bg-blue-500 text-white rounded-lg py-1 px-4 flex items-center disabled:bg-gray-500 disabled:bg-opacity-50"
            disabled={!message}
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
