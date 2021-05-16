import { ReduxEvent } from "constant";

const initialState = [{}];

const getBucketIndexById = (buckets) => {
  if (!buckets?.length) return -1;
  return buckets.findIndex(
    (bucket) => bucket._id === buckets.data?.bucketData?._id
  );
};

export default function bucket(state = initialState, action) {
  switch (action.type) {
    case ReduxEvent.GET_BUCKET:
      return [...action.data?.bucketData];
    case ReduxEvent.ADD_BUCKET:
      return [...state, action.data?.bucketData];
    case ReduxEvent.UPDATE_BUCKET:
      const updateIndex = getBucketIndexById(state);
      if (updateIndex > -1) state[updateIndex] = action.data?.bucketData;
      return state;
    case ReduxEvent.DELETE_BUCKET:
      const deleteIndex = getBucketIndexById(state);
      if (deleteIndex > -1) state.splice(deleteIndex, 1);
      return state;
    default:
      return state;
  }
}
