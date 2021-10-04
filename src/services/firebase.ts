import config from "./config";
import { FirebaseApp, initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore/lite";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  sendPasswordResetEmail,
  updatePassword,
  User,
  EmailAuthProvider,
  reauthenticateWithCredential,
  updateEmail,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";

class Firebase {
  private app!: FirebaseApp;

  constructor() {
    this.app = initializeApp(config);
  }

  // *** Auth API ***
  auth = getAuth(this.app);

  createAccount = (email: string, password: string) =>
    createUserWithEmailAndPassword(this.auth, email, password);

  signIn = (email: string, password: string) =>
    signInWithEmailAndPassword(this.auth, email, password);

  signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(this.auth, provider);
  };

  signInWithGiHub = () => {
    const provider = new GithubAuthProvider();
    return signInWithPopup(this.auth, provider);
  };

  signOut = () => this.auth.signOut();

  passwordReset = (email: string) => sendPasswordResetEmail(this.auth, email);

  passwordUpdate = (user: User, password: string) =>
    updatePassword(user, password);

  reauthenticate = (password: string) => {
    const user = this.auth.currentUser;
    const credential = EmailAuthProvider.credential(
      user?.email as string,
      password
    );

    return reauthenticateWithCredential(user as User, credential);
  };

  changePassword = (currentPassword: string, newPassword: string) =>
    new Promise((resolve, reject) => {
      this.reauthenticate(currentPassword)
        .then(() => {
          const user = this.auth.currentUser;
          updatePassword(user as User, newPassword)
            .then(() => {
              resolve("Password updated successfully!");
            })
            .catch((error) => reject(error));
        })
        .catch((error) => reject(error));
    });

  changeEmail = (currentPassword: string, newEmail: string) =>
    new Promise((resolve, reject) => {
      this.reauthenticate(currentPassword)
        .then(() => {
          const user = this.auth.currentUser;
          updateEmail(user as User, newEmail)
            .then(() => {
              resolve("Email updated successfully!");
            })
            .catch((error) => reject(error));
        })
        .catch((error) => reject(error));
    });

  onAuthStateChanged = () =>
    new Promise((resolve, reject) => {
      this.auth.onAuthStateChanged((user) => {
        if (user) {
          resolve(user);
        } else {
          reject(new Error("Auth State Changed failed"));
        }
      });
    });

  setAuthPersistance = () => setPersistence(this.auth, browserLocalPersistence);

  // *** Firestore API ***
  db = getFirestore(this.app);

  addUser = (id: string, user: Record<string, any>) =>
    setDoc(doc(this.db, "users", id), user);

  getUser = (id: string) => getDoc(doc(this.db, "users", id));
}

const firebaseInstance = new Firebase();

export default firebaseInstance;
