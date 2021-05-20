export const addBucket = async (data) => {
  let error = "";
  let response = await fetch("http://localhost:3001/add-bucket", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).catch((err) => (error = err));

  return error ? Promise.reject(error) : Promise.resolve(response.json());
};

export const getBuckets = async (data) => {
  let error = "";
  let response = await fetch("http://localhost:3001/get-buckets", {
    method: "GET",
  }).catch((err) => (error = err));

  return error ? Promise.reject(error) : Promise.resolve(response.json());
};

export const updateBucket = async (data) => {
  let error = "";
  let response = await fetch("http://localhost:3001/update-bucket", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).catch((err) => (error = err));

  return error ? Promise.reject(error) : Promise.resolve(response.json());
};

export const deleteBucket = async (bucketId) => {
  let error = "";
  let response = await fetch(
    `http://localhost:3001/delete-bucket?bucketId=${bucketId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).catch((err) => (error = err));

  return error ? Promise.reject(error) : Promise.resolve(response.json());
};
