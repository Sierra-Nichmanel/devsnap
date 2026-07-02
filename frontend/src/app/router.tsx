import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Signup from "../pages/SignUp";
import Dashboard from "../pages/Dashboard";

import ProtectedRoute from "../components/ProtectedRoute";
import Home from "../pages/Home";
import DashboardLayout from "../layouts/DashboardLayout";
import Settings from "@/pages/Settings";
import Collections from "@/pages/Collections";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/signup" element={<Signup />} />

      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/collections" element={<Collections />} />

        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default Router;
