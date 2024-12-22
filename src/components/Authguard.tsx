// import { useEffect } from "react";
// import { supabase } from "../services/supabaseClient";
// // import { supabase } from "./supabaseClient";

// const AuthListener = () => {
//   useEffect(() => {
//     const {
//       data: { subscription },
//     } = supabase.auth.onAuthStateChange((event, session) => {
//       console.log("Auth event:", event);
//       console.log("User session:", session);
//     });

//     return () => subscription.unsubscribe();
//   }, []);

//   return null;
// };

// export default AuthListener;

import { Navigate } from "@tanstack/react-router";
import { useAuth } from "./useAuth";
// import { useAuth } from "../context/AuthContext";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default AuthGuard;
