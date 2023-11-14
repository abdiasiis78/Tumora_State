import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

 const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    SignInStart: (state) => {
      state.loading = true;
    },
    siginSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    signinFalier: (state, action) => {
        state.error = action.payload;
        state.loading = false;
        state.currentUser = null;
    }
  },
});

export const { SignInStart, siginSuccess, signinFalier } = userSlice.actions;

export default userSlice