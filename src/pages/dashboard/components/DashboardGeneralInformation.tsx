import { Card, CardContent, Grid, Typography } from "@mui/material";
import { DashboardGeneralInformationProps } from "../types";

export const DashboardGeneralInformation = (
  props: DashboardGeneralInformationProps
) => {
  const avaragePrice =
    props.localProducts.reduce((preVal, currentVal) => {
      return preVal + currentVal.price;
    }, 0) / props.localProducts.length;
  return (
    <Grid
      sm={12}
      item
      sx={{
        display: {
          xs: "none",
          sm: "flex",
        },
        justifyContent: "space-around",
      }}
    >
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
            General information :
          </Typography>
          <Typography variant="h6" component="span" mr={2}>
            Product Count:{" "}
            <Typography
              component={"span"}
              sx={{ mb: 1.5 }}
              color="text.secondary"
            >
              {props.localProducts.length}
            </Typography>
          </Typography>
          <Typography variant="h6" component="span">
            Avarage Price:{" "}
            <Typography
              component={"span"}
              sx={{ mb: 0 }}
              color="text.secondary"
            >
              {avaragePrice ? avaragePrice.toFixed(2) : 0}
            </Typography>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
