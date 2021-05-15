import firebase from "firebase/app";
import "firebase/auth";

const auth = firebase
  .initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  })
  .auth();

export const signUp = async (email, password) => {
  return await auth
    .createUserWithEmailAndPassword(email, password)
    .then((response) => response)
    .catch((error) => error);
};

export const logIn = async (email, password) => {
  return await auth
    .signInWithEmailAndPassword(email, password)
    .then(() => auth.currentUser.getIdToken().then((token) => token))
    .catch((err) => err)
    .catch((err) => err);
};

export const signOut = () => {
  return auth.signOut();
};
