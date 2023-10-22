import { createSlice } from "@reduxjs/toolkit";

// const getInitialTodos = () => {
//     const localUserData = window.localStorage.getItem("userData");
//     return localUserData
//       ? JSON.parse(localUserData)
//       : window.localStorage.setItem("userData", JSON.stringify([]));
//   };

const initialValue = {
  userData: {},
};

const userSlice = createSlice({
  name: "user",
  initialState: initialValue,
  reducers: {
    addNewUser: (state, action) => {
      const allExistingUsers = window.localStorage.getItem("userData");
      if (allExistingUsers) {
        const allExistingUsersArr = JSON.parse(allExistingUsers);
        const existingUser = allExistingUsersArr.find(
          (user) => user.email === action.payload.email
        );
        if (!existingUser) {
          allExistingUsersArr.push({ ...action.payload }) &&
            window.localStorage.setItem(
              "userData",
              JSON.stringify(allExistingUsersArr)
            );
          state.userData = { ...action.payload };
        } else {
          state.userData = { item: "Existing Account" };
        }
      } else {
        window.localStorage.setItem(
          "userData",
          JSON.stringify([{ ...action.payload }])
        );
        state.userData = { ...action.payload };
      }
    },

    logoutUser: (state, action) => {
      const allExistingUsers = window.localStorage.getItem("userData");
      if (allExistingUsers) {
        const allExistingUsersArr = JSON.parse(allExistingUsers);
        allExistingUsersArr.forEach((user) => {
          if (user.email === action.payload.email) {
            user.isAuthenticated = false;
          }
        });
        window.localStorage.setItem(
          "userData",
          JSON.stringify(allExistingUsersArr)
        );
        state.userData = {};
      }
    },

    authenticateUser: (state, action) => {
      const allExistingUsers = window.localStorage.getItem("userData");
      if (allExistingUsers) {
        const allExistingUsersArr = JSON.parse(allExistingUsers);
        allExistingUsersArr.forEach((user) => {
          if (user.email === action.payload.email) {
            if (user.pwd === action.payload.pwd) {
              user.isAuthenticated = true;
              state.userData = user;
            } else {
              state.userData = { item: "Wrong Password" };
            }
          } else {
            state.userData = { item: "Account do not exist" };
          }
        });
        window.localStorage.setItem(
          "userData",
          JSON.stringify(allExistingUsersArr)
        );
      }
    },
  },
});

export const { addNewUser, logoutUser, authenticateUser } = userSlice.actions;
export default userSlice.reducer;
