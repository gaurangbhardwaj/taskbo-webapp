import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {dispatchAction} from "utility";
import {ReduxEvent} from "constant";
import Task from "./task";
import {getTasks} from "services/task";
import TaskForm from "components/shared/task-form";

const TaskController = () => {
  const dispatch = useDispatch();
  const triggerDispatchAction = (reduxEvent, data) =>
    dispatch(dispatchAction(reduxEvent, data || ""));
  const reduxState = useSelector(({task}) => {
    return {task};
  });
  const [updateTaskId, setUpdateTaskId] = useState("");

  useEffect(() => {
    getTasks().then(({responseData}) => {
      if (responseData?.length)
        triggerDispatchAction(ReduxEvent.GET_TASK, responseData);
    });
  }, []);

  return (
    <>
      <Task taskData={reduxState.task} setUpdateTaskId={setUpdateTaskId} />
      {updateTaskId && (
        <TaskForm
          closeTaskForm={() => setUpdateTaskId("")}
          taskData={reduxState.task.find(({_id}) => _id === updateTaskId)}
        />
      )}
    </>
  );
};

export default TaskController;
