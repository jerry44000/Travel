import { createContext, useState, useEffect } from "react";
import {
  signInWithEmailPassword,
  CreateUserWithEmailAndPassword,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase-config.js";

export const UserContext = createContext();

export function UserContextProvider(props) {
  const [currentUser, setCurrentUser] = useState();
  const [loadingData, setLoadingData] = useState(true);

  const signUp = (email, pwd) =>
    createUserWithEmailAndPassword(auth, email, pwd);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setCurrentUser(currentUser)
        setLoadingData(false)
    });
    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={{ signUp, currentUser }}>
      {!loadingData && props.children}
    </UserContext.Provider>
  );
}
