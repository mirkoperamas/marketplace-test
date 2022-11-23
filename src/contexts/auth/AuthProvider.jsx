import { useReducer, useState } from "react";
import AuthContext from "./AuthContext";
import AuthReducer from "./AuthReducer";
import { auth, provider } from "../../config/firebase";
import { signInWithPopup } from "firebase/auth";

export const AuthProvider = ({ children }) => {
  const initialState = {
    auth: null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);
  const [getAccount, setGetAccount] = useState(
    JSON.parse(localStorage.getItem("account"))
  );

  const login = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const account = {
          name: result.user.displayName,
          email: result.user.email,
          profilePic: result.user.photoURL,
        };
        localStorage.setItem("account", JSON.stringify(account));
        setGetAccount(account);
        dispatch({
          type: "TO_LOGIN",
          payload: account,
        });
      })
      .catch((err) => console.log(err));
  };

  const logout = () => {
    localStorage.removeItem("account");
    setGetAccount(null);
    dispatch({
      type: "TO_LOGOUT",
      payload: null,
    });
  };

  return (
    <AuthContext.Provider
      value={{ auth: state.auth, login, logout, getAccount }}
    >
      {children}
    </AuthContext.Provider>
  );
};
