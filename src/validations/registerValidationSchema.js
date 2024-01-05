import * as Yup from "yup";

export const registerValidationSchema = () =>
  Yup.object().shape({
    username: Yup.string()
      .min(3, "Username must be at least 8 characters")
      .required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    retypePassword: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required")
      .oneOf(
        [Yup.ref("password"), null],
        "Retype password doesn't match with password"
      ),
  });
