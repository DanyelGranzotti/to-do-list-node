const { VITE_BACKEND_URL } = import.meta.env;

export const URLS = {
  LOGIN: `${VITE_BACKEND_URL}/auth/login`,
  REGISTER: `${VITE_BACKEND_URL}/auth/register`,
  TASKS: `${VITE_BACKEND_URL}/tasks`,
};
