import { useEffect } from "react";
import { supabase } from "./services/supabaseClient";
import { useAuthStore } from "./store";
import App from "./App";

const GoogleAuth = () => {
  const { user, setUser, clearUser } = useAuthStore();
  useEffect(() => {
    // Check the current session when the component loads
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session?.user || null);
    };

    checkSession();

    // Listen for auth state changes
    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    // Cleanup the subscription when the component unmounts
    return () => {
      data.subscription.unsubscribe();
    };
  }, []);
  const signInWithGoogle = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) {
      console.error("Error during Google sign-in:", error.message);
    } else {
      console.log("Google sign-in successful:", data);
    }
  };

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error signing out:", error.message);
    } else {
      clearUser();
    }
  };
  return (
    <div>
      {user ? (
        // <button onClick={handleSignOut}>Sign out</button>
        <App handleSignOut={handleSignOut} user={user} />
      ) : (
        <button onClick={signInWithGoogle}>Sign in</button>
      )}
    </div>
  );
};

export default GoogleAuth;
