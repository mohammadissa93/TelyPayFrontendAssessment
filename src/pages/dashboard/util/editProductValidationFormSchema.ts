import * as Yup from "yup"

export const editProductValidationFormSchema = Yup.object({
    name: Yup.string().required("Name is required "),
    price: Yup.number().required("Price is required "),
    noInStock: Yup.number().required("Number in is required "),
})