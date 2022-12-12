import { Box, Typography, Grid } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import { DataGrid, GridSelectionModel } from "@mui/x-data-grid";
import { useState } from "react";
import { TProduct, TProducts } from "./types";
import { columns } from "./util/columns";
import { useEditProductForm } from "./hooks/useEditProductForm";
import Stack from "@mui/material/Stack";
import { ProductAction, ProductLoader } from "./util/productsDashboardHelper";
import SearchProductTextField from "./components/SearchProductTextField";
import { EditProductDialog } from "./components/EditProductDialog";
import { DashboardActionButtons } from "./components/DashboardActionButtons";
import { DashboardGeneralInformation } from "./components/DashboardGeneralInformation";

function Dashboard() {
  const products = useLoaderData() as TProducts;

  const [localProducts, setLocalProducts] = useState(products.data);
  const { initialValues } = useEditProductForm();
  const [openEditProductDialog, setOpenEditProductDialog] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<TProduct[]>([
    initialValues,
  ]);

  const handleEditProductDialog = () => {
    setOpenEditProductDialog(!openEditProductDialog);
  };
  const handleSelectionModelChange = (ids: GridSelectionModel) => {
    const selectedIDs = new Set(ids);
    const selectedRowData = localProducts.filter((row) =>
      selectedIDs.has(row.id)
    );
    setSelectedProduct(selectedRowData);
  };
  return (
    <Stack spacing={2}>
      <Box overflow="hidden" height="25%">
        <Grid container columnSpacing={2} height="55%">
          <DashboardGeneralInformation localProducts={localProducts} />
          <SearchProductTextField
            orginalData={products.data}
            setLocalProducts={setLocalProducts}
          />
          <DashboardActionButtons
            setOpenEditProductDialog={setOpenEditProductDialog}
            setLocalProducts={setLocalProducts}
            selectedProduct={selectedProduct}
            products={products}
            localProducts={localProducts}
            openEditProductDialog={openEditProductDialog}
          />
        </Grid>
      </Box>
      <Box sx={{ height: 650, width: "100%" }}>
        <DataGrid
          rows={localProducts}
          columns={columns}
          checkboxSelection={true}
          onSelectionModelChange={(ids) => handleSelectionModelChange(ids)}
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
        <EditProductDialog
          selectedProduct={selectedProduct}
          handleEditProductDialog={handleEditProductDialog}
          localProducts={localProducts}
          setLocalProducts={setLocalProducts}
          setOpenEditProductDialog={setOpenEditProductDialog}
          openEditProductDialog={openEditProductDialog}
        />
      </Box>
    </Stack>
  );
}
Dashboard.loader = ProductLoader;
Dashboard.action = ProductAction;

export default Dashboard;
