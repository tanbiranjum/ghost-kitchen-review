import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GithubAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";

import app from "../../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const register = (email, password) => {
    try {
      return createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  const login = (email, password) => {
    try {
      return signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    try {
      return signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error);
    }
  };

  const githubLogin = () => {
    const provider = new GithubAuthProvider();
    try {
      return signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    try {
      return signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  const value = {
    user,
    register,
    login,
    googleLogin,
    githubLogin,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
