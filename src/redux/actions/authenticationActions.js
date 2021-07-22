// eslint-disable-next-line import/no-unresolved
import { loginService } from 'src/services/authenticationServices';
import { hasError, setAuthenticationState, startLoading, stoploading } from '../slices/auth';

// eslint-disable-next-line consistent-return
// function handleError(err) {
//   if (err.password) {
//     return `Password error, ${err.password.join('')}`;
//   }
//   if (err.username) {
//     return `Username error, ${err.username.join('')}`;
//   }
//   if (err.status === 504) {
//     return 'Session Timedout';
//   }
// }

// eslint-disable-next-line consistent-return
export const loginAction = (payload) => async (dispatch) => {
  try {
    // eslint-disable-next-line no-undef
    dispatch(startLoading());
    const _result = await loginService(payload);
    if (_result.status === 200) {
      console.log('tcs appln crested');
      localStorage.setItem('username', _result.data.username);
      localStorage.setItem('email', _result.data.email);
      localStorage.setItem('id', _result.data.id);
      localStorage.setItem('token', _result.data.tokens.access_token);
      localStorage.setItem('refresh', _result.data.tokens.refresh_token);
      dispatch(setAuthenticationState(_result.data));
      dispatch(stoploading());
      return true;
    }
  } catch (error) {
    dispatch(hasError(error));
    dispatch(stoploading());
    // throw error.response.data.detail ? error.response.data.detail : handleError(error.response.data);
  }
};
