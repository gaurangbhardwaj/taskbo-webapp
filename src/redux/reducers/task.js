import { ReduxEvent } from "constant";

const initialState = [{}];

const getTaskIndexById = (tasks) => {
  if (!tasks?.length) return -1;
  return tasks.findIndex((task) => task._id === tasks.data?.taskData?._id);
};

export default function task(state = initialState, action) {
  switch (action.type) {
    case ReduxEvent.GET_TASK:
      return [...action.data?.taskData];
    case ReduxEvent.ADD_TASK:
      return [...state, action.data?.taskData];
    case ReduxEvent.UPDATE_TASK:
      const updateIndex = getTaskIndexById(state);
      if (updateIndex > -1) state[updateIndex] = action.data?.taskData;
      return state;
    case ReduxEvent.DELETE_TASK:
      const deleteIndex = getTaskIndexById(state);
      if (deleteIndex > -1) state.splice(deleteIndex, 1);
      return state;
    default:
      return state;
  }
}
