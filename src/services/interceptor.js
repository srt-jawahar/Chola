import axios from 'axios';
// import { refreshAccessTokenService } from '~/services/authenticationServices';

const axiosApiInstance = axios.create();

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
  async (config) => {
    config.headers = {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// Response interceptor for API calls
axiosApiInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      (error.response.status === 403 && !originalRequest._retry) ||
      (error.response.status === 401 && !originalRequest._retry)
    ) {
      originalRequest._retry = true;
      // const payload = {
      //   refresh: localStorage.getItem('refresh')
      // };
      // eslint-disable-next-line camelcase
      // const access_token = await refreshAccessTokenService(payload);
      // localStorage.setItem('token', access_token);
      // axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
      return axiosApiInstance(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default axiosApiInstance;
