import { FormDialog } from "../../../shared/components/Dialog";
import { useEditProductForm } from "../hooks/useEditProductForm";
import { EditProductDialogProps, TProduct } from "../types";
import { EditProductForm } from "./EditProductForm";

export const EditProductDialog = (props: EditProductDialogProps) => {

    const {validationSchema } = useEditProductForm();
      const handleSubmitProductDialog = (data: TProduct) => {
        const getProductById = props.localProducts.findIndex(
          (localProduct) => localProduct.id === data.id
        );
        props.localProducts[getProductById].name = data.name;
        props.localProducts[getProductById].price = data.price;
        props.localProducts[getProductById].noInStock = data.noInStock;
        props.localProducts[getProductById].isAvailable = data.isAvailable;
        props.setLocalProducts([...props.localProducts]);
        props.setOpenEditProductDialog(!props.openEditProductDialog);
      };

  return (
    <FormDialog
      open={props.openEditProductDialog}
      onClose={() => props.handleEditProductDialog()}
      handleSubmit={handleSubmitProductDialog}
      dialog={{
        title: "Edit Product",
        submitButton: {
          label: "Edit",
        },
        closeButton: {
          label: "Close",
        },
      }}
      intialValues={props.selectedProduct[0]}
      validationSchema={validationSchema}
    >
      <EditProductForm />
    </FormDialog>
  );
};
