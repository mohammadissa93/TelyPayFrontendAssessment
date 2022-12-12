import React from "react";
import { Box, Toolbar } from "@mui/material";
import { Outlet, useNavigation } from "react-router-dom";
import { AppBar, Container } from "../shared/components";

export const DashboardLayout = () => {
  const { state } = useNavigation();

  return (
    <Box>
      <AppBar />
      <Container sx={{ opacity: state === "loading" ? 0.5 : 1, mt: 1 }}>
        <Toolbar />
        <Outlet />
      </Container>
    </Box>
  );
};
