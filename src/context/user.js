import React, { useState, useEffect } from "react";

export const UserContext = React.createContext();

function getUserFromLocalStorage() {
  return localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : { username: null, token: null };
}

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(getUserFromLocalStorage());
  const [alert, setAlert] = useState({ show: false, msg: "", type: "success" });

  const showAlert = ({ msg, type = "success" }) => {
    setAlert({ show: true, msg, type });
  };

  const hideAlert = () => {
    setAlert({ ...alert, show: false });
  };

  const userLogin = (user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };
  const userLogout = () => {
    setUser({ username: null, token: null });
    localStorage.removeItem("user");
  };

  return (
    <UserContext.Provider
      value={{ user, userLogin, userLogout, alert, showAlert, hideAlert }}
    >
      {children}
    </UserContext.Provider>
  );
};
