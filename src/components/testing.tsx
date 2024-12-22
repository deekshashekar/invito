// Authguard

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

// import { Navigate } from "@tanstack/react-router";
// import { useAuth } from "../signInWithOuth";
// // import { useAuth } from "../context/AuthContext";

// const AuthGuard = ({ children }: { children: React.ReactNode }) => {
//   const { user } = useAuth();

//   if (!user) {
//     return <Navigate to="/" />;
//   }

//   return <>{children}</>;
// };

// export default AuthGuard;

// __root.tsx

// import * as React from "react";
// import { Link, Outlet, createRootRoute } from "@tanstack/react-router";

// export const Route = createRootRoute({
//   component: RootComponent,
// });

// function RootComponent() {
//   return (
//     <React.Fragment>
//       <Link to="/add-event">Add events</Link>
//       <Link to="/view-events">View all events</Link>
//       <Outlet />
//     </React.Fragment>
//   );
// }

// import { Outlet, Link, createRootRoute } from "@tanstack/react-router";
// import { useAuth } from "../signInWithOuth";
// // import { useAuth } from "../context/AuthContext";

// export const rootRoute = createRootRoute({
//   component: RootComponent,
// });

// function RootComponent() {
//   const { user, handleSignOut } = useAuth();

//   return (
//     <div>
//       <header>
//         <nav>
//           <Link to="/add-event">Add Event</Link>
//           <Link to="/view-events">View Events</Link>
//           {user ? (
//             <button onClick={handleSignOut}>Sign Out</button>
//           ) : (
//             <Link to="/login">Login</Link>
//           )}
//         </nav>
//       </header>
//       <main>
//         <Outlet />
//       </main>
//     </div>
//   );
// }

//index.tsx

// import { createFileRoute } from "@tanstack/react-router";
// import App from "../App";

// export const Route = createFileRoute("/")({
//   component: RouteComponent,
// });

// function RouteComponent() {
//   return (
//     <div>
//       <App />
//     </div>
//   );
// }

// import { rootRoute } from "./__root";
// import { createRouteConfig } from "@tanstack/react-router";
// import HomePage from "../components/HomePage";
// import LandingPage from "../components/LandingPage";

// const homeRoute = rootRoute.createFileRoute({
//   path: "/",
//   component: HomePage,
// });

// const loginRoute = rootRoute.createRoute({
//   path: "/login",
//   component: LandingPage,
// });

// // Add more routes as needed, e.g., for add-event, view-events
// const addEventRoute = rootRoute.createRoute({
//   path: "/add-event",
//   component: () => <div>Add Event Page</div>,
// });

// const viewEventsRoute = rootRoute.createRoute({
//   path: "/view-events",
//   component: () => <div>View Events Page</div>,
// });

// export const routeConfig = createRouteConfig().addChildren([
//   homeRoute,
//   loginRoute,
//   addEventRoute,
//   viewEventsRoute,
// ]);

// export const router = routeConfig.createRouter();

// import { rootRoute } from "./__root";
// import { createRoute, createRouter } from "@tanstack/react-router";
// import HomePage from "../components/HomePage";
// import LandingPage from "../components/LandingPage";

// const homeRoute = createRoute({
//   path: "/",
//   component: HomePage,
//   getParentRoute: () => rootRoute, // Use this to nest under `rootRoute`
// });

// const loginRoute = createRoute({
//   path: "/login",
//   component: LandingPage,
//   getParentRoute: () => rootRoute,
// });

// const addEventRoute = createRoute({
//   path: "/add-event",
//   component: () => <div>Add Event Page</div>,
//   getParentRoute: () => rootRoute,
// });

// const viewEventsRoute = createRoute({
//   path: "/view-events",
//   component: () => <div>View Events Page</div>,
//   getParentRoute: () => rootRoute,
// });

// // Combine all routes
// export const router = createRouter({
//   routeTree: rootRoute.addChildren([
//     homeRoute,
//     loginRoute,
//     addEventRoute,
//     viewEventsRoute,
//   ]),
//});

//App.tsx

// import { Link } from "@tanstack/react-router";
// import "./App.css";
// import { RouterProvider, createRouter } from "@tanstack/react-router";

// import { routeTree } from "./routeTree.gen";

// const router = createRouter({ routeTree });

// Register the router instance for type safety
// declare module "@tanstack/react-router" {
//   interface Register {
//     router: typeof router;
//   }
// }
// function App() {
//   return (
//     <>
//       <div>
//         Hello world
//         {/* <RouterProvider router={router} /> */}
//         {/* <Link to="/add-event">Add events</Link>
//         <Link to="/view-events">View all events</Link> */}
//       </div>
//     </>
//   );
// }

// export default App;

//main.tsx

// import "./index.css";
// import { StrictMode } from "react";
// import ReactDOM from "react-dom/client";
// import GoogleAuth from "./signInWithOuth.tsx";
// import App from "./App.tsx";

// const rootElement = document.getElementById("root")!;
// if (!rootElement.innerHTML) {
//   const root = ReactDOM.createRoot(rootElement);
//   root.render(
//     <StrictMode>
//       <GoogleAuth>
//         <App />
//       </GoogleAuth>
//     </StrictMode>
//   );
// }

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
// import GoogleAuth from "./signInWithOuth.jsx";
// // import { GoogleOAuthProvider } from "@react-oauth/google";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <GoogleAuth>
//       <App />
//     </GoogleAuth>
//   </StrictMode>
// );

// import "./index.css";
// import { StrictMode } from "react";
// import ReactDOM from "react-dom/client";
// import { RouterProvider } from "@tanstack/react-router";
// // import { AuthProvider } from "./context/AuthContext";
// import { router } from "./routes"; // Create this router in the next step
// import { AuthProvider } from "./signInWithOuth";

// const rootElement = document.getElementById("root")!;
// ReactDOM.createRoot(rootElement).render(
//   <StrictMode>
//     <AuthProvider>
//       <RouterProvider router={router} />
//     </AuthProvider>
//   </StrictMode>
// );

// import { useEffect, useState } from "react";
// import HomePage from "./components/HomePage";
// import LandingPage from "./components/LandingPage";
// import { supabase } from "./services/supabaseClient";
// import { User } from "@supabase/supabase-js";

// const GoogleAuth = ({ children }) => {
//   const [user, setUser] = useState<User | null>(null);

//   useEffect(() => {
//     // Check the current session when the component loads
//     const checkSession = async () => {
//       const {
//         data: { session },
//       } = await supabase.auth.getSession();
//       setUser(session?.user || null);
//     };

//     checkSession();

//     // Listen for auth state changes
//     const { data } = supabase.auth.onAuthStateChange((_event, session) => {
//       setUser(session?.user || null);
//     });

//     // Cleanup the subscription when the component unmounts
//     return () => {
//       data.subscription.unsubscribe();
//     };
//   }, []);

//   const handleGoogleSignIn = async () => {
//     const { error } = await supabase.auth.signInWithOAuth({
//       provider: "google",
//     });
//     if (error) {
//       console.error("Error signing in with Google:", error.message);
//     }
//   };

//   const handleSignOut = async () => {
//     const { error } = await supabase.auth.signOut();
//     if (error) {
//       console.error("Error signing out:", error.message);
//     } else {
//       setUser(null);
//     }
//   };

//   return (
//     <div className="home-container">
//       {user ? (
//         <HomePage user={user} handleSignOut={handleSignOut} />
//       ) : (
//         <LandingPage handleGoogleSignIn={handleGoogleSignIn} />
//       )}
//     </div>
//   );
// };

// export default GoogleAuth;

// context/AuthContext.tsx
// import {
//   createContext,
//   useContext,
//   useEffect,
//   useState,
//   ReactNode,
// } from "react";
// import { supabase } from "../src/services/supabaseClient";
// import { User } from "@supabase/supabase-js";

// interface AuthContextProps {
//   user: User | null;
//   handleGoogleSignIn: () => Promise<void>;
//   handleSignOut: () => Promise<void>;
// }

// const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [user, setUser] = useState<User | null>(null);

//   useEffect(() => {
//     // Check for the current session when the component mounts
//     const checkSession = async () => {
//       const { data } = await supabase.auth.getSession();
//       setUser(data.session?.user || null);
//     };

//     checkSession();

//     // Listen for auth state changes
//     const { data } = supabase.auth.onAuthStateChange((_event, session) => {
//       setUser(session?.user || null);
//     });

//     // Cleanup the subscription when the component unmounts
//     return () => data.subscription.unsubscribe();
//   }, []);

//   const handleGoogleSignIn = async () => {
//     const { error } = await supabase.auth.signInWithOAuth({
//       provider: "google",
//     });
//     if (error) console.error("Google Sign-In Error:", error.message);
//   };

//   const handleSignOut = async () => {
//     const { error } = await supabase.auth.signOut();
//     if (error) {
//       console.error("Sign-Out Error:", error.message);
//     } else {
//       setUser(null);
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ user, handleGoogleSignIn, handleSignOut }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Custom Hook for AuthContext
// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) throw new Error("useAuth must be used within an AuthProvider");
//   return context;
// };
