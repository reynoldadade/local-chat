import React from "react";
import { render, fireEvent, screen } from "../test-utils.js";
import ChatRoom from "./ChatRoom";

describe("Chatroom", () => {
  beforeEach(() => {
    localStorage.clear();
  });
  afterEach(() => {
    localStorage.clear();
  });
  test("message must show on screen after being sent", () => {
    render(<ChatRoom />);
    // get message box
    const messageBox = screen.getByTestId("messageBox");
    const sendButton = screen.getByTestId("sendButton");
    //chatroom container
    const chatRoomContainer = screen.getByTestId("chatRoomContainer");
    // create test message
    const message = "this is my first test";
    // enter content into textbox
    fireEvent.input(messageBox, { target: { value: message } });
    // check value
    expect(messageBox.value).toBe(message);
    // get button
    fireEvent.click(sendButton);
    expect(chatRoomContainer.textContent).toContain(message);
  });
});
