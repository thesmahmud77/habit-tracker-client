import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "./Firebase/Firebse.init";

const GoogleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // console.log(user);
  const [loading, setLoading] = useState(true);

  const GoogleSignUp = () => {
    return signInWithPopup(auth, GoogleProvider);
  };

  const registerWithEP = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginWithEP = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const SignOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const Unsubscribe = onAuthStateChanged(auth, (currectuser) => {
      setUser(currectuser);
      setLoading(currectuser);
    });
    return () => {
      Unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    GoogleSignUp,
    SignOut,
    loginWithEP,
    registerWithEP,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
