import { useNhostAuth } from "@nhost/react-auth";
import { Navigate, useLocation } from "react-router";

export function RequireAuth({ children }: { children: JSX.Element }) {
  const { isAuthenticated, isLoading } = useNhostAuth();
  const location = useLocation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/sign-in" state={{ from: location }} />;
  }

  return children;
}
