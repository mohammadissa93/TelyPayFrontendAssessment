import React from "react";
import { useLoginForm } from "../hooks/useLoginForm";
import { Stack, TextField, Box, Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Form, useNavigation } from "react-router-dom";
import _ from "lodash";

function LoginForm() {
  const { getFieldProps, touched, errors, isValid, dirty } = useLoginForm();
  const { state } = useNavigation();
  return (
    <Box
      my={7}
      px={2}
      width={{
        xs: "100%",
        md: "430px",
      }}
      alignSelf="center"
    >
      <Stack id="loginForm" method="post" component={Form} spacing={5}>
        <TextField
          id="email"
          label="email"
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
          {...getFieldProps("email")}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          error={touched.password && Boolean(errors.password)}
          helperText={touched.password && errors.password}
          {...getFieldProps("password")}
        />
      </Stack>
      <Box mt={8} display="flex" flexDirection={"column"} rowGap={4}>
        <LoadingButton
          variant="contained"
          type="submit"
          form="loginForm"
          loading={state === "submitting"}
          loadingIndicator="Saving..."
          disabled={(!dirty || !isValid) && !_.isEmpty(touched)}
        >
          Login
        </LoadingButton>
      </Box>
    </Box>
  );
}

export default LoginForm;
