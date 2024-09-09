import axios from "axios";

const token = localStorage.getItem("token");

const defaultHeaders = {
  accept: "application/json",
  "Content-Type": "application/json",
  Authorization: token,
};

const handleError = async (error) => {
  if (error?.response?.status === 401) {
    localStorage.clear();
  }
  if (error.code === "ERR_NETWORK") {
    console.log(error);
    window.location.href = "/error";
  }
};

export const postMethod = async (
  url,
  entity,
  headersParameter = defaultHeaders
) => {
  let response;
  await axios
    .post(url, entity, { headers: headersParameter })
    .then((result) => {
      response = result;
    })
    .catch((error) => {
      handleError(error);
      response = error;
    });
  return response;
};

export const getMethod = async (url, headersParameter = defaultHeaders) => {
  let response;
  await axios
    .get(url, { headers: headersParameter })
    .then((result) => {
      response = result;
    })
    .catch((error) => {
      handleError(error);
      response = error;
    });
  return response;
};

export const getMethodWithParams = async (
  url,
  params,
  headersParameter = defaultHeaders
) => {
  let response;
  await axios
    .get(url, { params }, { headers: headersParameter })
    .then((result) => {
      response = result;
    })
    .catch((error) => {
      handleError(error);
      response = error;
    });
  return response;
};

export const putMethod = async (
  url,
  entity,
  headersParameter = defaultHeaders
) => {
  let response;
  await axios
    .put(url, entity, { headers: headersParameter })
    .then((result) => {
      response = result;
    })
    .catch((error) => {
      handleError(error);
      response = error;
    });
  return response;
};

export const deleteMethod = async (url, headersParameter = defaultHeaders) => {
  let response;
  await axios
    .delete(url, { headers: headersParameter })
    .then((result) => {
      response = result;
    })
    .catch((error) => {
      handleError(error);
      response = error;
    });
  return response;
};
