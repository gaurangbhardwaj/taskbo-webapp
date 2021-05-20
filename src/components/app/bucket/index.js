import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {dispatchAction} from "utility";
import {ReduxEvent} from "constant";
import Bucket from "./bucket";
import {getBuckets} from "services/bucket";
import BucketForm from "components/shared/bucket-form";

const BucketController = () => {
  const dispatch = useDispatch();
  const triggerDispatchAction = (reduxEvent, data) =>
    dispatch(dispatchAction(reduxEvent, data || ""));
  const reduxState = useSelector(({bucket}) => {
    return {bucket};
  });
  const [updateBucketId, setUpdateBucketId] = useState("");

  useEffect(() => {
    getBuckets().then(({responseData}) => {
      if (responseData?.length)
        triggerDispatchAction(ReduxEvent.GET_BUCKET, responseData);
    });
  }, []);

  return (
    <>
      <Bucket
        bucketData={reduxState.bucket}
        setUpdateBucketId={setUpdateBucketId}
      />
      {updateBucketId && (
        <BucketForm
          closeBucketForm={() => setUpdateBucketId("")}
          bucketData={reduxState.bucket.find(({_id}) => _id === updateBucketId)}
        />
      )}
    </>
  );
};

export default BucketController;
