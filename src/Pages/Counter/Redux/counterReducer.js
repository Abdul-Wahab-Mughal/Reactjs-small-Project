export function counterReducer(state = 0, action) {
  switch (action.type) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    case "Resewt":
      return (state = 0);
    default:
      return state;
  }
}
