import React from "react";
import {
  Box,
  FormControlLabel,
  Switch,
  TextField,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import { useFormikContext } from "formik";
import { Form } from "react-router-dom";
import { EditProductFormTypes } from "../types";
import { number } from "yup/lib/locale";

export const EditProductForm = () => {
  const { getFieldProps, touched, errors } =
    useFormikContext<EditProductFormTypes>();

  return (
    <Box m={2}>
      <Form method="post">
        <Grid container rowSpacing={3} flexDirection="column">
          <Grid xs={12} >
            <TextField
              variant="outlined"
              color="primary"
              label="Product Name"
              id="name"
              fullWidth
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
              {...getFieldProps("name")}
            />
          </Grid>
          <Grid xs={12} >
            <TextField
              variant="outlined"
              color="primary"
              label="Price"
              id="price"
              type='number'
              fullWidth
              error={touched.price && Boolean(errors.price)}
              helperText={touched.price && errors.price}
              {...getFieldProps("price")}
            />
          </Grid>
          <Grid xs={12} >
            <TextField
              variant="outlined"
              color="primary"
              label="Number In Stock"
              id="noInStock"
              type='number'
              fullWidth
              error={touched.noInStock && Boolean(errors.noInStock)}
              helperText={touched.noInStock && errors.noInStock}
              {...getFieldProps("noInStock")}
            />
          </Grid>
          <Grid xs={12} >
            <FormControlLabel
              control={<Switch defaultChecked={getFieldProps("isAvailable").value} />}
              id="isAvailable"
              {...getFieldProps("isAvailable")}
              color="primary"
              label="Is Avaliable"
            />
          </Grid>
        </Grid>
      </Form>
    </Box>
  );
};
