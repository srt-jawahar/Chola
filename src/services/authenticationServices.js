import axios from 'axios';
// import axiosApiInstance from './interceptor';

const url = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_BACKEND_HOST : '';

export const loginService = async (payload) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.post(`${url}/helpdesk/Login`, payload);
    return response;
  } catch (error) {
    throw error;
  }
};
