import {ReduxEvent} from "constant";

const initialState = [];

const getBucketIndexById = (buckets, id) => {
  if (!buckets?.length || !id) return -1;
  return buckets.findIndex((bucket) => bucket._id === id);
};

export default function bucket(state = initialState, action) {
  switch (action.type) {
    case ReduxEvent.GET_BUCKET:
      return [...action.data];
    case ReduxEvent.ADD_BUCKET:
      return [...state, action.data];
    case ReduxEvent.UPDATE_BUCKET:
      const updateIndex = getBucketIndexById(state, action.data._id);
      if (updateIndex > -1) state[updateIndex] = action.data;
      return state;
    case ReduxEvent.DELETE_BUCKET:
      const deleteIndex = getBucketIndexById(state, action.data._id);
      if (deleteIndex > -1) state.splice(deleteIndex, 1);
      return state;
    default:
      return state;
  }
}
