// overlay component will cover chat window until user enters a name

import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveName, showOverlay } from "../store/chatroom";

const Overlay = () => {
  // create dispatch
  const dispatch = useDispatch();
  // state to save username
  const [name, setName] = useState("");
  // handle when input is used
  const nameInputHandler = (event) => {
    setName(event.target.value);
  };

  const saveNameHandler = () => {
    // save username to store
    dispatch(saveName(name));
    // turn off overlay
    dispatch(showOverlay(false));
  };

  return (
    <div
      className="w-screen h-screen fixed bg-black bg-opacity-50 z-20 flex items-center justify-center"
      data-testid="overlayComponent"
    >
      {/* insert a modal to collect the users name */}
      <div className="rounded-lg shadow-lg bg-white text-blue-500 w-72 h-40 text-center p-4">
        <div>Enter username</div>
        <div>
          <input
            type="text"
            className="p-2 rounded-lg border w-full"
            placeholder="username"
            value={name}
            onInput={nameInputHandler}
            data-testid="usernameInput"
          />
        </div>
        <div>
          <button
            className="border w-full my-2 p-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
            disabled={!name}
            onClick={saveNameHandler}
            data-testid="startButton"
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
