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

const AuthProvider = () => {
  const [user, setUser] = useState();
  // console.log(user);
  const [loading, setLoading] = useState(true);

  // Login With Google
  const SignInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, GoogleProvider);
  };

  // SignOut
  const SignOutGoogle = () => {
    return signOut(auth);
  };

  // Create user with login Password
  const registerEmailPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Sign-In With Email Password
  const LoginEmailPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currectUser) => {
      setUser(currectUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    SignInWithGoogle,
    SignOutGoogle,
    registerEmailPassword,
    LoginEmailPassword,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}></AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
