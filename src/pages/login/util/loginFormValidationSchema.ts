import * as Yup from "yup"

export const loginFormValidationSchema = Yup.object({
    email: Yup.string()
        .email("Not Email Format")
        .required("Username is required"),
    password: Yup.string()
        .required("Please enter a password")
        .min(5, "Password too short")
})