import * as Yup from "yup";

export const addCommentValidationSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").matches(/[a-z]/).required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    body: Yup.string().min(2, "Too Short!").required("Body is required"),
});

export const filterValidationSchema = Yup.object().shape({
    letters: Yup.string()
        .matches(/[a-zA-Z]/)
        .required("Letters are required"),
    text: Yup.string()
        .matches(/^[a-zA-Z\s]*$/)
        .required("Text is required"),
    select: Yup.string().min(2, "Too Short!").required("Select is required"),
});