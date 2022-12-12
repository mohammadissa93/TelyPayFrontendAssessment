import { GridRowParams } from "@mui/x-data-grid";
import { Ref } from "react";

export type TProduct = {
      id: number;
    name: string;
    price: number;
    noInStock: number;
    isAvailable: boolean;
  }
export type TProducts = {
    data: TProduct[]
  }
  export type TSchema = {
    initialValues: TProduct,
    validationSchema: any;
}
export type EditProductFormTypes = {
name: string;
price: number;
noInStock: number;
isAvailable: boolean;
}
export type SearchProductTextFieldProps = {
  orginalData: TProduct[],
  setLocalProducts: (value: React.SetStateAction<TProduct[]>) => void
  }
export type EditProductDialogProps = {
  localProducts: TProduct[],
  setLocalProducts: React.Dispatch<React.SetStateAction<TProduct[]>>,
  openEditProductDialog: boolean,
  setOpenEditProductDialog: React.Dispatch<React.SetStateAction<boolean>>,
  handleEditProductDialog: (param?: TProduct) => void,
  selectedProduct: TProduct[]
}
export type DashboardActionButtonsProps = {
  localProducts: TProduct[],
  openEditProductDialog: boolean,
  selectedProduct: TProduct[]
  setLocalProducts: React.Dispatch<React.SetStateAction<TProduct[]>>,
  setOpenEditProductDialog: React.Dispatch<React.SetStateAction<boolean>>,
  products: TProducts,
}
export type DashboardGeneralInformationProps = {
  localProducts: TProduct[],
}