import { Button, FormInput, Alert } from "../components/Common/index";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.svg";
import { FaArrowLeftLong as Back } from "react-icons/fa6";
import { useFormik } from "formik";
import { registerValidationSchema } from "../validations/registerValidationSchema";
import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../lib/Axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [alert, setAlert] = useState(null);

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      retypePassword: "",
    },
    validationSchema: registerValidationSchema,
    onSubmit: () => {
      authRegister(formik.values);
    },
  });

  const { mutate: authRegister } = useMutation({
    mutationFn: async (body) => {
      const response = await axiosInstance.post("auth/register", body);

      return response;
    },
    onSuccess: (data) => {
      setAlert(data.data.message);
      navigate("/login");
    },
    onError: (error) => {
      setAlert(error.response.data);
      formik.setFieldValue("username", "");
      formik.setFieldValue("email", "");
      formik.setFieldValue("password", "");
      formik.setFieldValue("retypePassword", "");
    },
  });

  const handleFormInput = (name, value) => {
    formik.setFieldValue(name, value);
  };

  return (
    <main className="min-h-screen flex items-center justify-center">
      <section className="max-w-2xl mx-auto text-center py-6 px-8 text-dark">
        <Link
          to="/"
          className="absolute top-0 left-0 mx-12 my-6 inline-flex items-center gap-x-4 font-semibold animate-hover hover:text-primary-800"
        >
          <Back />
          Back to homepage
        </Link>
        {alert ? (
          <Alert type="danger" message={alert} />
        ) : null}
        <Link
          to="/"
          className="inline-flex h-16 mb-4 items-center font-black text-xl lg:text-2xl"
        >
          <img src={Logo} width={40} alt="Book Rent Logo" className="mr-4" />
          BOOKRENT
          <span className="text-primary-800 mb-2 text-3xl lg:text-4xl lg:mb-2.5">
            .
          </span>
        </Link>
        <h1 className="mb-8 text-5xl font-extrabold tracking-tight leading-none text-dark underline-highlight lg:text-6xl">
          Create Account
        </h1>
        <form onSubmit={formik.handleSubmit} className="flex flex-col mb-8">
          <div className="flex flex-col mb-4">
            <FormInput
              type="text"
              label="username"
              name="username"
              placeholder="John Doe"
              value={formik.values.username}
              onChange={handleFormInput}
              errorMessage={formik.touched.username && formik.errors.username}
            />
            {formik.touched.username && formik.errors.username ? (
              <span className="mt-1 text-sm font-semibold text-red-600 text-end">
                {formik.errors.username}
              </span>
            ) : null}
          </div>
          <div className="flex flex-col mb-4">
            <FormInput
              type="email"
              label="email"
              name="email"
              placeholder="johndoe@email.com"
              value={formik.values.email}
              onChange={handleFormInput}
              errorMessage={formik.touched.email && formik.errors.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <span className="mt-1 text-sm font-semibold text-red-600 text-end">
                {formik.errors.email}
              </span>
            ) : null}
          </div>
          <div className="flex flex-col mb-4">
            <FormInput
              type="password"
              label="password"
              name="password"
              placeholder="********"
              value={formik.values.password}
              onChange={handleFormInput}
              errorMessage={formik.touched.password && formik.errors.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <span className="mt-1 text-sm font-semibold text-red-600 text-end">
                {formik.errors.password}
              </span>
            ) : null}
          </div>
          <div className="flex flex-col mb-8">
            <FormInput
              type="password"
              label="re-type password"
              name="retypePassword"
              placeholder="********"
              value={formik.values.retypePassword}
              onChange={handleFormInput}
              errorMessage={
                formik.touched.retypePassword && formik.errors.retypePassword
              }
            />
            {formik.touched.retypePassword && formik.errors.retypePassword ? (
              <span className="mt-1 text-sm font-semibold text-red-600 text-end">
                {formik.errors.retypePassword}
              </span>
            ) : null}
          </div>
          <Button type="submit" variant="primary">
            Register
          </Button>
        </form>
        <span>
          Already have an account?
          <Link
            to="/login"
            className="font-semibold underline animate-hover hover:text-primary-800"
          >
            Login
          </Link>
        </span>
      </section>
    </main>
  );
};
