import React from "react";
import { createBrowserRouter, Link as RouterLink } from "react-router-dom";
import { QueryClient } from "@tanstack/react-query";
import { Link, Typography } from "@mui/material";
import { Login } from "../pages/login";
import { DashboardLayout } from "../layouts";
import Dashboard from "../pages/dashboard/Dashboard";

export const router = (client: QueryClient) =>
  createBrowserRouter([
    {
      element: <Login />,
      path: "/login",
      action: Login.action,
      loader: Login.loader,
    },
    {
      element: <DashboardLayout />,
      path: "/",
      children: [
        {
          element: <Dashboard />,
          index: true,
          loader: Dashboard.loader(client),
          action: Dashboard.action,
        },
      ],
    },
  ]);
