import { ReduxEvent } from "constant";

const initialState = {
  isLoading: false,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case ReduxEvent.SHOW_LOADER:
      return {
        ...state,
        isLoading: true,
      };
    case ReduxEvent.HIDE_LOADER:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}
