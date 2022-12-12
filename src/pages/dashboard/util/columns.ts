import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { TProduct } from "../types";

export const columns: GridColDef[] = [
    { 
      field: 'id',
      headerName: 'ID', 
      align: 'center',
      headerAlign: 'center',
      width: 100 
    },
    { 
      field: 'name', 
      headerName: 'Name', 
      align: 'center',
      headerAlign: 'center',
      width: 380 
    },
    { 
      field: 'price', 
      headerName: 'Price', 
      align: 'center',
      headerAlign: 'center',
      width: 350 
    },
    { 
      field: 'noInStock', 
      headerName: 'Number In Stock', 
      align: 'center',
      headerAlign: 'center',
      width: 350 
    },
    {
       field: 'isAvailable', 
       headerName: 'isAvailable', 
       align: 'center',
      headerAlign: 'center',
       width: 125,
      valueGetter: (param: GridValueGetterParams<TProduct, TProduct>) => param.row.isAvailable ? 'Available' : 'Not Available'
    },
  ];