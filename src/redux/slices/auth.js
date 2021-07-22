import { createSlice } from '@reduxjs/toolkit';

// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  user: null,
  error: ''
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },

    stoploading(state) {
      state.isLoading = false;
    },

    setAuthenticationState(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload;
    },

    hasError(state, action) {
      state.error = action.payload;
    },
    setIsAuthFalse(state) {
      state.isAuthenticated = false;
    },
    setCurrentUser(state, action) {
      state.user = action.payload;
    }
  }
});

// Reducer
export default slice.reducer;

// Actions
export const {
  startLoading,
  stoploading,
  setAuthenticationState,
  hasError,
  setIsAuthFalse,
  setAvatar,
  setCurrentUser
} = slice.actions;

export const selectIsLoadingFromAuth = (state) => state.auth.isLoading;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectCurrentUser = (state) => state.auth.user;
export const selectLoginError = (state) => state.auth.error;
