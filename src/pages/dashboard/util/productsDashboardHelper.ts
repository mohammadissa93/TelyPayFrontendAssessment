import { QueryClient } from "@tanstack/react-query";
import { LoaderFunctionArgs, redirect } from "react-router-dom";
import API from "../../../client/api";

export const ProductsListQuery = {
    queryKey: ["ProductsList"],
    queryFn: () => API.get("product/all"),
  };

  export const ProductLoader =
  (client: QueryClient) =>
  async ({ request }: LoaderFunctionArgs) => {
    const token = localStorage.getItem("token");
    if (!token || token !== "Login Successful") {
      return redirect("/login");
    } else {
      const products =
        client.getQueryData(ProductsListQuery.queryKey) ??
        (await client.fetchQuery(ProductsListQuery));
      return products;
    }
  };
  export const ProductAction = () => null;