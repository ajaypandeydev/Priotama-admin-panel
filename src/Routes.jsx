import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/Dashboard";


export default function AppRoutes() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // load state from local Storage
  useEffect(() => {
    const authState = localStorage.getItem("isAuthenticated");
    if(authState === 'true'){
      setIsAuthenticated(true)
    }
  }, [])

  // Sync local storage when change 
  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated)
  }, [isAuthenticated])

  function handleLogout(){
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated")
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Login Page */}
        <Route
          path="/"
          element={<AdminLogin setIsAuthenticated={setIsAuthenticated} />}
        />

        {/* Dashboard Page (Protected Route) */}
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? (
              <Dashboard onLogout={handleLogout}/>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        {/* Catch-All Route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
