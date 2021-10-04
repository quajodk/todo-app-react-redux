// import { AuthError, User } from "@firebase/auth";
import { types } from "../../constants";

export const signIn = (email: string, password: string) => ({
  type: types.SIGNIN,
  payload: {
    email,
    password,
  },
});

export const signUp = (user: Record<string, any>) => ({
  type: types.SIGNUP,
  payload: user,
});

export const signInWithGoogle = () => ({
  type: types.SIGNIN_WITH_GOOGLE,
});

export const signInWithGithub = () => ({
  type: types.SIGNIN_WITH_GITHUB,
});

export const signInSuccess = (auth: any) => ({
  type: types.SIGNIN_SUCCESS,
  payload: auth,
});

// export const setAuthPersistence = () => ({
//   type: types.SET_AUTH_PERSISTENCE,
// });

// export const signOut = () => ({
//   type: types.SIGNOUT,
// });

// export const signOutSuccess = () => ({
//   type: types.SIGNOUT_SUCCESS,
// });

// export const onAuthStateChanged = () => ({
//   type: types.ON_AUTHSTATE_CHANGED,
// });

// export const onAuthStateSuccess = (user: User) => ({
//   type: types.ON_AUTHSTATE_SUCCESS,
//   payload: user,
// });

// export const onAuthStateFail = (error: AuthError) => ({
//   type: types.ON_AUTHSTATE_FAIL,
//   payload: error,
// });

// export const resetPassword = (email: string) => ({
//   type: types.RESET_PASSWORD,
//   payload: email,
// });
