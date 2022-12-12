import { Grid, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { TProduct, SearchProductTextFieldProps } from "../types/index";
import React from "react";

function SearchProductTextField(props: SearchProductTextFieldProps) {
  const searchProduct = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const higCopyProducts = props.orginalData;
    if (e.target.value === "") {
      props.setLocalProducts([...higCopyProducts]);
      return;
    }
    const getProductsByName = higCopyProducts.filter((localProduct) =>
      localProduct.name.includes(e.target.value)
    );
    props.setLocalProducts([...getProductsByName]);
  };
  return (
    <Grid
    item
      sm={6}
      sx={{
        display: {
          xs: "none",
          sm: "flex",
        },
        justifyContent: "space-between",
      }}
    >
      <TextField
        variant="outlined"
        color="secondary"
        size="small"
        placeholder="Search for product"
        InputProps={{
          startAdornment: <SearchIcon />,
        }}
        sx={{
          display: {
            xs: "none",
            sm: "flex",
          },
        }}
        onChange={searchProduct}
      />
    </Grid>
  );
}
export default React.memo(SearchProductTextField);
