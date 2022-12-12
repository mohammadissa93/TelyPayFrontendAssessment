import { TProduct, TSchema } from "../types"
import { editProductValidationFormSchema } from "../util/editProductValidationFormSchema"

export const useEditProductForm = () => {
    const schema: TSchema = {
        initialValues: {
            id: 0,
            name: "",
            price: 0,
            noInStock: 0,
            isAvailable: false,
        },
        validationSchema: editProductValidationFormSchema
    }
    return schema
}
