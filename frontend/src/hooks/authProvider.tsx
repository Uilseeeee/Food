"use client";

import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

type AuthContextType = {
  token: string | null;
};

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [token, setToken] = useState<string | null>(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("token", localStorage.getItem("auth_token"));
      setToken(localStorage.getItem("auth_token"));
    }
  }, []);
  export const AuthProvider = ({ children }: PropsWithChildren) => {
    const [token, setToken] = useState<string | null>(null);
    useEffect(() => {
      if (typeof window !== "undefined") {
        console.log("token", localStorage.getItem("auth_token"));
        setToken(localStorage.getItem("auth_token"));
      }
    }, []);
    export const AuthProvider = ({ children }: PropsWithChildren) => {
        const [token, setToken] = useState<string | null>(null);
        useEffect(() => {
          if (typeof window !== "undefined") {
            console.log("token", localStorage.getItem("auth_token"));
            setToken(localStorage.getItem("auth_token"));
          }
        }, []);

  return (
    <AuthContext.Provider value={{ token }}>{children}</AuthContext.Provider>
    
  );
};

export const useAuth = () => useContext(AuthContext);
