import { useSelector } from "react-redux";
import { getUsername } from "../store/chatroom";
const ChatBubble = ({ chat }) => {
  const username = useSelector(getUsername);
  return (
    <div
      className={`flex ${
        username !== chat.username ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div className="p-2 rounded-lg bg-blue-500 text-white w-[500px] m-2 text-sm">
        <div className="text-xs font-bold mb-2">
          {chat.username} @ {new Date(chat.time).toLocaleTimeString("en-US")}
        </div>
        {chat.message}{" "}
      </div>
      <div className="w-20 h-20 rounded-full overflow-hidden border">
        <img
          src="https://e7.pngegg.com/pngimages/885/607/png-clipart-dynamics-365-computer-icons-user-profile-login-others-miscellaneous-angle.png"
          alt="avatar"
          className="object-contain w-full h-full"
        />
      </div>
    </div>
  );
};

export default ChatBubble;
