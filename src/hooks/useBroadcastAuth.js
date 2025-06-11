import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

/**
 * Custom hook to sync authentication state across browser tabs
 * using the BroadcastChannel API.
 * Listens for LOGIN and LOGOUT messages and updates state accordingly.
 */

export default function useBroadcastAuth(setIsAuthenticated) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const channel = new BroadcastChannel("auth_channel");

    channel.onmessage = (event) => {
      const { type } = event.data;

      if (type === "LOGOUT") {
        setIsAuthenticated(false);
        localStorage.setItem("isAuthenticated", "false");
      }

      if (type === "LOGIN") {
        setIsAuthenticated(true);
        localStorage.setItem("isAuthenticated", "true");

        // Redirect only if current tab is on /login
        if (location.pathname === "/login") {
          navigate("/dashboard");
        }
      }
    };

    return () => {
      channel.close();
    };
  }, [location.pathname, navigate, setIsAuthenticated]);
}
