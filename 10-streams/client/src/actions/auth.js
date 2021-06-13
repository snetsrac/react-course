import { CHANGE_AUTH } from './types';

const loadGoogleApi = () => {
  return new Promise((resolve) => {
    window.gapi.load('client:auth2', {
        callback: resolve,
        onError: () => {
          console.error('Could not load Google API.');
          resolve();
        }
    });
  });
};

const authAction = (auth) => {
  const isSignedIn = auth.isSignedIn.get();
  const user = isSignedIn ? getUserProfile(auth) : null;

  return {
    type: CHANGE_AUTH,
    payload: { isSignedIn, user }
  }
};

const getUserProfile = (auth) => {
  const profile = auth.currentUser.get().getBasicProfile();
  
  return {
    id: profile.getId(),
    email: profile.getEmail()
  };
}

export const initAuth = () => async (dispatch) => {
  const initSettings = {
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    scope: 'email'
  };

  await loadGoogleApi();
  await window.gapi.client.init(initSettings);
  dispatch(authAction(window.gapi.auth2.getAuthInstance()));
};

export const trySignIn = () => async (dispatch) => {
  const auth = window.gapi.auth2.getAuthInstance();

  try {
    await auth.signIn();
    dispatch(authAction(auth));
  } catch ({ error }) {
    console.error(`Authentication Error: ${error}`);
  };
};

export const trySignOut = () => async (dispatch) => {
  const auth = window.gapi.auth2.getAuthInstance();

  await auth.signOut();
  dispatch(authAction(auth));
};
