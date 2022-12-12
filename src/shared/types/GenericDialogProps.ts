import {
  DialogProps,
  ButtonProps as MuiButtonProps,
} from "@mui/material";
import { TProduct } from "../../pages/dashboard/types";
export type GenericDialogProps = Omit<DialogProps, "onClose" | "onSubmit"> & {
    dialog: {
      title: string;
      submitButton: MuiButtonProps & {
        label: string;
      };
      closeButton: MuiButtonProps & {
        label: string;
      };
    };
    onClose: () => void;
    handleSubmit?: (data: TProduct) => void;
    intialValues: TProduct;
    validationSchema: Record<string, any>;
  };