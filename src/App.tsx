import React from "react";
import { RouterProvider } from "react-router-dom";
import { CssBaseline, responsiveFontSizes, ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";
import { router } from "./routes/router";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false
    }
  }
})


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={responsiveFontSizes(theme)}>
        <CssBaseline />
        <ToastContainer limit={3} />
        <RouterProvider router={router(queryClient)} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
