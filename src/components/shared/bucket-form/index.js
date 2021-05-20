import React, {useState} from "react";
import {ReduxEvent} from "constant";
import {useDispatch, useSelector} from "react-redux";
import {dispatchAction} from "utility";
import BucketForm from "./bucket-form";
import {addBucket, updateBucket, deleteBucket} from "services/bucket";

const BucketFormController = ({closeBucketForm, bucketData}) => {
  const dispatch = useDispatch();
  const triggerDispatchAction = (reduxEvent, data) =>
    dispatch(dispatchAction(reduxEvent, data || ""));
  const reduxState = useSelector(({task}) => {
    return {task};
  });
  const [formData, setFormData] = useState({
    bucketId: bucketData?._id,
    title: bucketData?.title,
    description: bucketData?.description,
    taskIds: bucketData?.taskIds || [],
  });
  const [error, setError] = useState("");
  const addBucketData = async () => {
    triggerDispatchAction(ReduxEvent.SHOW_LOADER);
    let response = await addBucket({
      ...formData,
    }).catch((err) =>
      setError(err?.message || "Unable to add bucket, please try again later.")
    );
    triggerDispatchAction(ReduxEvent.HIDE_LOADER);
    if (response?.responseData) {
      closeBucketForm();
      triggerDispatchAction(ReduxEvent.ADD_BUCKET, response.responseData);
    }
  };
  const updateBucketData = async () => {
    triggerDispatchAction(ReduxEvent.SHOW_LOADER);
    let response = await updateBucket({
      ...formData,
    }).catch((err) =>
      setError(
        err?.message || "Unable to update bucket, please try again later."
      )
    );
    triggerDispatchAction(ReduxEvent.HIDE_LOADER);
    if (response?.responseData) {
      closeBucketForm();
      triggerDispatchAction(ReduxEvent.UPDATE_BUCKET, response.responseData);
    }
  };
  const deleteBucketData = async () => {
    triggerDispatchAction(ReduxEvent.SHOW_LOADER);
    let response = await deleteBucket(formData.bucketId).catch((err) =>
      setError(
        err?.message || "Unable to delete bucket, please try again later."
      )
    );
    triggerDispatchAction(ReduxEvent.HIDE_LOADER);
    if (response?.responseData) {
      closeBucketForm();
      triggerDispatchAction(ReduxEvent.DELETE_BUCKET, response.responseData);
    }
  };

  const bucketFormProps = {
    closeAction: closeBucketForm,
    saveAction: formData.bucketId ? updateBucketData : addBucketData,
    deleteAction: deleteBucketData,
    taskData: reduxState.task,
    formData,
    setFormData,
    error,
  };
  return <BucketForm {...bucketFormProps} />;
};

export default BucketFormController;
