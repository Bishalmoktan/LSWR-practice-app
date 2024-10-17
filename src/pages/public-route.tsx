import { useAuth } from "@/context/AuthContext";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

export default function PublicRoute({ element }: { element: ReactNode }) {
  const { isAuthenticated } = useAuth();
  return !isAuthenticated ? element : <Navigate to="/" replace />;
}
