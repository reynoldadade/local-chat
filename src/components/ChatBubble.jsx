import { useSelector } from "react-redux";
import { getUsername } from "../store/chatroom";
const ChatBubble = ({ chat }) => {
  const username = useSelector(getUsername);
  return (
    <div
      className={`flex p-4 md:w-1/2 w-4/5 ${
        username === chat.username ? "flex-row-reverse self-end" : "flex-row"
      }`}
    >
      <div className="w-20 h-20 rounded-full overflow-hidden border">
        <img
          src="https://e7.pngegg.com/pngimages/885/607/png-clipart-dynamics-365-computer-icons-user-profile-login-others-miscellaneous-angle.png"
          alt="avatar"
          className="object-contain w-full h-full"
        />
      </div>
      <div
        className={`p-2 rounded-lg text-white flex-grow m-2 text-sm ${
          chat.username === username ? "bg-blue-500" : "bg-gray-700"
        }`}
      >
        <div className="text-xs font-bold mb-2">
          {chat.username} @ {new Date(chat.time).toLocaleTimeString("en-US")}
        </div>
        {chat.message}{" "}
      </div>
    </div>
  );
};

export default ChatBubble;
