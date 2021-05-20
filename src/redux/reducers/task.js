import {ReduxEvent} from "constant";

const initialState = [];

const getTaskIndexById = (tasks, id) => {
  if (!tasks?.length || !id) return -1;
  return tasks.findIndex((task) => task._id === id);
};

export default function task(state = initialState, action) {
  switch (action.type) {
    case ReduxEvent.GET_TASK:
      return [...action.data];
    case ReduxEvent.DELETE_TASK:
      const deleteIndex = getTaskIndexById(state, action.data._id);
      if (deleteIndex > -1) state.splice(deleteIndex, 1);
      return state;
    default:
      return state;
  }
}
