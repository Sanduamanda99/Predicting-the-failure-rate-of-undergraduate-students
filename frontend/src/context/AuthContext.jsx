import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(localStorage.getItem("token"));

  const login = (token) => {
    setAuthToken(token);
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setAuthToken(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ authToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
