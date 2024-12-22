import { createContext, useContext } from "react";
// import { AuthContext } from "../signInWithOuth";
import { User } from "@supabase/supabase-js";

interface AuthContextProps {
  user: User;
  handleGoogleSignIn: () => Promise<void>;
  handleSignOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
