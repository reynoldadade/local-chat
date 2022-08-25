import { render, fireEvent, screen } from "./test-utils";
import App from "./App";

describe("App.jsx", () => {
  beforeEach(() => {
    localStorage.clear();
  });
  afterEach(() => {
    localStorage.clear();
  });

  test("overlay to be on screen", () => {
    // load app component
    render(<App />);
    // get overlay component
    const overlayComponent = screen.getByTestId("overlayComponent");
    // get input box in overlay component
    const usernameInput = screen.getByTestId("usernameInput");
    // get startbutton
    const startButton = screen.getByTestId("startButton");
    // check if overlay exists
    expect(overlayComponent).toBeInTheDocument();
    const name = "rey";
    //expect button to be disabled
    expect(startButton).toHaveAttribute("disabled");
    fireEvent.input(usernameInput, { target: { value: name } });
    // check if diabled attribute is gone
    expect(startButton).not.toHaveAttribute("disabled");
    //click start button
    fireEvent.click(startButton);
    //check if overlay has left screen
    expect(overlayComponent).not.toBeInTheDocument();
  });
});
