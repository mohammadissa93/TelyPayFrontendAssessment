import { Button, ButtonGroup, Grid } from "@mui/material";
import { useEditProductForm } from "../hooks/useEditProductForm";
import { DashboardActionButtonsProps } from "../types";

export const DashboardActionButtons = (props: DashboardActionButtonsProps) => {
  const { initialValues } = useEditProductForm();
  const handleEditProductDialog = () => {
    props.setOpenEditProductDialog(!props.openEditProductDialog);
  };

  const handleDeleteSelectedProduct = () => {
    if (window.confirm("Are You Sure You Want To Delete Selected Items?")) {
      const productsAfterDeleting = props.localProducts.filter(
        (ar) => !props.selectedProduct.find((rm) => rm.id === ar.id)
      );
      props.products.data = [...productsAfterDeleting];
      props.setLocalProducts([...productsAfterDeleting]);
    }
  };
  return (
    <Grid item xs={12} sm={6} justifyContent="center" display="flex">
      <ButtonGroup
        variant="text"
        sx={{ marginInlineStart: "45%" }}
        aria-label="text button group"
      >
        <Button
          disabled={
            (props.selectedProduct.length === 1 &&
              props.selectedProduct[0].name === initialValues.name) ||
            props.selectedProduct.length === 0 ||
            props.selectedProduct.length > 1
          }
          onClick={handleEditProductDialog}
        >
          Edit
        </Button>
        <Button
          disabled={
            (props.selectedProduct.length === 1 &&
              props.selectedProduct[0].name === initialValues.name) ||
            props.selectedProduct.length === 0
          }
          onClick={handleDeleteSelectedProduct}
        >
          Delete
        </Button>
      </ButtonGroup>
    </Grid>
  );
};
