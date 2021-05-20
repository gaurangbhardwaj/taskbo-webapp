export const addTask = async (data) => {
  let error = "";
  let response = await fetch("http://localhost:3001/add-task", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).catch((err) => (error = err));
  return error ? Promise.reject(error) : Promise.resolve(response.json());
};

export const getTasks = async () => {
  let error = "";
  let response = await fetch("http://localhost:3001/get-tasks", {
    method: "GET",
  }).catch((err) => (error = err));
  return error ? Promise.reject(error) : Promise.resolve(response.json());
};

export const updateTask = async (data) => {
  let error = "";
  let response = await fetch("http://localhost:3001/update-task", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).catch((err) => (error = err));
  return error ? Promise.reject(error) : Promise.resolve(response.json());
};

export const deleteTask = async (taskId) => {
  let error = "";
  let response = await fetch(
    `http://localhost:3001/delete-task?taskId=${taskId}`,
    {
      method: "DELETE",
    }
  ).catch((err) => (error = err));
  return error ? Promise.reject(error) : Promise.resolve(response.json());
};
