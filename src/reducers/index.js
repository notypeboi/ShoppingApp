const initialState = {
  number: 0
};

function counter(state = initialState, action) {
  const {
    counter
  } = state;
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state, number: state.number + 1
      };
    case "REMOVE":
      return {
        ...state, number: 0

      };
    default:
      return state;
  }
}
export default counter;