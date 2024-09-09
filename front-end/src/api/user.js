import * as API from "./common/api_requests";
import { URLS } from "./common/api_urls";

export const checkLogin = async () => {
  return localStorage.getItem("token") == null ? false : true;
};

export const logout = async () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  window.location.href = "/";
};

export const login = async ({ email, password }) => {
  const response = await API.postMethod(`${URLS.LOGIN}`, { email, password });
  if (response.status === 200) {
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("userId", response.data.userId);
  }
  return response;
};

export const register = async ({ email, password }) => {
  return API.postMethod(`${URLS.REGISTER}`, { email, password });
};
