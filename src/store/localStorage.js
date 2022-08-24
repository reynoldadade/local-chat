export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("chatState");
    if (serializedState === null) {
      //if serialised state is null return undefined to let redux used the default state
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch {
    //if there is an error return undefined to let reducers create their own state
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    //serilaize and save state
    console.log(state, "full state");
    const serializedState = JSON.stringify(state);
    localStorage.setItem("chatState", serializedState);
  } catch (err) {
    //Ignore write errors.
  }
};
