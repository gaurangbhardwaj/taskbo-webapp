import React, {useState} from "react";
import {ReduxEvent} from "constant";
import {useDispatch} from "react-redux";
import {dispatchAction} from "utility";
import TaskForm from "./task-form";
import {addTask, updateTask, deleteTask, getTasks} from "services/task";
import {TaskPriority, TaskStatus} from "constant";

const TaskFormController = ({closeTaskForm, taskData}) => {
  const dispatch = useDispatch();
  const triggerDispatchAction = (reduxEvent, data) =>
    dispatch(dispatchAction(reduxEvent, data || ""));
  const [formData, setFormData] = useState({
    taskId: taskData?._id,
    title: taskData?.title,
    description: taskData?.description,
    priority: taskData?.priority || TaskPriority.MEDIUM,
    deadline:
      (taskData?.deadline && new Date(taskData?.deadline)) || new Date(),
    status: taskData?.status || TaskStatus.INCOMPLETE,
  });
  const [error, setError] = useState("");
  const getTasksData = async () =>
    getTasks().then(({responseData}) => {
      if (responseData?.length)
        triggerDispatchAction(ReduxEvent.GET_TASK, responseData);
    });
  const addTaskData = async () => {
    triggerDispatchAction(ReduxEvent.SHOW_LOADER);
    let response = await addTask({
      ...formData,
      deadline: Date.parse(formData.deadline),
    }).catch((err) =>
      setError(err?.message || "Unable to add task, please try again later.")
    );
    triggerDispatchAction(ReduxEvent.HIDE_LOADER);
    if (response?.responseData) {
      closeTaskForm();
      getTasksData();
    }
  };
  const updateTaskData = async () => {
    triggerDispatchAction(ReduxEvent.SHOW_LOADER);
    let response = await updateTask({
      ...formData,
      deadline: Date.parse(formData.deadline),
    }).catch((err) =>
      setError(err?.message || "Unable to update task, please try again later.")
    );
    triggerDispatchAction(ReduxEvent.HIDE_LOADER);
    if (response?.responseData) {
      closeTaskForm();
      getTasksData();
    }
  };
  const deleteTaskData = async () => {
    triggerDispatchAction(ReduxEvent.SHOW_LOADER);
    let response = await deleteTask(formData.taskId).catch((err) =>
      setError(err?.message || "Unable to delete task, please try again later.")
    );
    triggerDispatchAction(ReduxEvent.HIDE_LOADER);
    if (response?.responseData) {
      closeTaskForm();
      triggerDispatchAction(ReduxEvent.DELETE_TASK, response.responseData);
    }
  };

  const TaskFormProps = {
    closeAction: closeTaskForm,
    saveAction: formData.taskId ? updateTaskData : addTaskData,
    deleteAction: deleteTaskData,
    formData,
    setFormData,
    error,
  };
  return <TaskForm {...TaskFormProps} />;
};

export default TaskFormController;
