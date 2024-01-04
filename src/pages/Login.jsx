import { Button, FormInput, Alert } from "../components/Common/index";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.svg";
import { FaArrowLeftLong as Back } from "react-icons/fa6";
import { usePasswordToggle } from "../hooks/usePasswordToggle";
import { useFormik } from "formik";
import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../lib/Axios"
import { useEffect, useState } from "react";
import { loginValidationSchema } from "../validations/loginValidationSchema";
import { useSelector, useDispatch } from "react-redux";
import { loginSuccess } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [alert, setAlert] = useState(null);

  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidationSchema,
    onSubmit: () => {
      authLogin(formik.values);
    },
  });

  const { mutate: authLogin } = useMutation({
    mutationFn: async (body) => {
      const loginResponse = await axiosInstance.post("auth/login", body);

      return loginResponse;
    },
    onSuccess: (data) => {
      dispatch(loginSuccess(data.data));
      setAlert(data.data.message)
      navigate('/')
    },
    onError: (error) => {
      setAlert(error.response.data);
      formik.setFieldValue("email", "");
      formik.setFieldValue("password", "");
    }
  })

  const handleFormInput = (name, value) => {
    formik.setFieldValue(name, value);
  }

  const { showPassword, icon, handleToggle } = usePasswordToggle();

  useEffect(() => {
    if (user !== null) {
      history.pushState
    }
  }, [user, history])

  return (
    <main className="min-h-screen flex items-center justify-center">
      <section className="max-w-2xl mx-auto text-center py-6 px-8 text-dark">
        {alert ? (
          <Alert type="danger" message={alert} />
        ) : null}
        <Link
          to="/"
          className="absolute top-0 left-0 mx-12 my-6 inline-flex items-center gap-x-4 hover:gap-x-2 font-semibold animate-hover hover:text-primary-800"
        >
          <Back />
          Back to homepage
        </Link>
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
          Welcome Back
        </h1>
        <form onSubmit={formik.handleSubmit} className="flex flex-col mb-8">
          <div className="flex flex-col mb-4">
            <FormInput type="email" label="email" name="email" placeholder="johndoe@email.com" value={formik.values.email} onChange={handleFormInput} errorMessage={formik.touched.email && formik.errors.email} />
            {formik.touched.email && formik.errors.email ? (
              <span className="mt-1 text-sm font-semibold text-red-600 text-end">{formik.errors.email}</span>
            ) : null}
          </div>
          <div className="flex flex-col mb-2">
            <FormInput type={showPassword ? 'text' : 'password'} label="password" name="password" placeholder="********" value={formik.values.password} onChange={handleFormInput} errorMessage={formik.touched.password && formik.errors.password} />
            {formik.touched.password && formik.errors.password ? (
              <span className="mt-1 text-sm font-semibold text-red-600 text-end">{formik.errors.password}</span>
            ) : null}
          </div>
          <span
            className="inline-flex justify-end items-center gap-x-1 mb-8 text-sm font-semibold cursor-pointer hover:underline"
            onClick={() => handleToggle()}
            role="button"
            aria-label={showPassword ? 'Show Password' : 'Hide Password'}
          >
            {icon}{showPassword ? 'Hide' : 'Show'} Password
          </span>
          <Button type="submit" variant="primary">
            Login
          </Button>
        </form>
        <span>
          Don't have an account yet?
          <Link
            to="/register"
            className="font-semibold underline animate-hover hover:text-primary-800"
          >
            Register
          </Link>
        </span>
      </section>
    </main>
  );
};
