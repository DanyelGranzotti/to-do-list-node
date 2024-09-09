import * as API from "./common/api_requests";
import { URLS } from "./common/api_urls";

export const postTask = async (task) => {
  return API.postMethod(`${URLS.TASKS}`, task);
};

export const getTasks = async (
  status = "",
  order = "asc",
  per_page = 10,
  page = 1
) => {
  return API.getMethod(
    `${
      URLS.TASKS +
      `?order=${order}&per_page=${per_page}&page=${page}` +
      (status ? `&status=${status}` : "")
    }`
  );
};

export const getTaskById = async (id) => {
  return API.getMethod(`${URLS.TASKS}/${id}`);
};

export const putTask = async (task) => {
  return API.putMethod(`${URLS.TASKS}/${task.id}`, task);
};

export const deleteTask = async (id) => {
  return API.deleteMethod(`${URLS.TASKS}/${id}`);
};

export const updateTaskStatus = async (id, status) => {
  const statusUpdate = status === 0 ? 1 : 0;
  return API.putMethod(`${URLS.TASKS}/${id}/status`, { status: statusUpdate });
};
