import { Button } from "../components/Common/index";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.svg";
import { FaArrowLeftLong as Back, FaEye as Show, FaEyeSlash as Hide } from "react-icons/fa6";
import { useState } from "react";

export const Login = () => {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(Show);

  const handlePasswordToggle = () => {
    if (type === "password") {
      setType("text")
      setIcon(Hide)
    } else if (type === "text") {
      setType("password")
      setIcon(Show)
    } else {
      return;
    }
  }

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
        <form action="#" className="flex flex-col mb-8">
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="text-start font-semibold mb-2">
              Email<span className="text-red-600 ms-1">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="johndoe@email.com"
              required
              className="w-full px-5 py-3 mr-3 text-base text-dark font-medium rounded-lg border border-dark/30 animate-hover hover:border-dark focus:ring-4 focus:ring-primary-300 hover-animation"
            />
          </div>
          <div className="flex flex-col mb-2">
            <label htmlFor="password" className="text-start font-semibold mb-2">
              Password<span className="text-red-600 ms-1">*</span>
            </label>
            <input
              type={type}
              name="password"
              id="password"
              placeholder="*****"
              required
              className="w-full px-5 py-3 mr-3 text-base text-dark font-medium rounded-lg border border-dark/30 animate-hover hover:border-dark focus:ring-4 focus:ring-primary-300 hover-animation"
            />
          </div>
          <span className="inline-flex justify-end items-center gap-x-1 mb-8 text-sm font-semibold cursor-pointer hover:underline" onClick={() => handlePasswordToggle()}>
            {icon} Show Password
          </span>
          <Button type="submit" variant="primary">
            Login
          </Button>
        </form>
        <span>
          Don't have an account yet?{" "}
          <Link
            to="/register"
            className="font-semibold underline animate-hover hover:text-primary-800"
          >
            Register now
          </Link>
        </span>
      </section>
    </main>
  );
};
